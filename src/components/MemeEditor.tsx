
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";
import { MemeText, convertGoogleDriveUrl, templateImages } from "@/utils/memeUtils";
import ImageControls from "./meme-editor/ImageControls";
import TextControls from "./meme-editor/TextControls";
import MemeCanvas from "./meme-editor/MemeCanvas";

const MemeEditor = () => {
  const [image, setImage] = useState<string | null>(null);
  const [texts, setTexts] = useState<MemeText[]>([
    { id: "top", text: "TOP TEXT", x: 50, y: 10, fontSize: 36, color: "#FFFFFF", fontFamily: "Impact" },
    { id: "bottom", text: "BOTTOM TEXT", x: 50, y: 90, fontSize: 36, color: "#FFFFFF", fontFamily: "Impact" }
  ]);
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const canvasPositionRef = useRef({ top: 0, left: 0, width: 0, height: 0 });
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const templateParam = searchParams.get('template');
    
    if (templateParam) {
      setImageLoading(true);
      
      if (!isNaN(Number(templateParam)) && Number(templateParam) > 0 && Number(templateParam) <= templateImages.length) {
        const index = Number(templateParam) - 1;
        setImage(templateImages[index].url);
      } else if (templateParam.includes('drive.google.com')) {
        // Handle Google Drive links
        setImage(convertGoogleDriveUrl(templateParam));
      } else {
        setImage(templateParam);
      }
      
      setImageLoading(false);
    }
  }, [location]);

  // Update canvas position when canvas is mounted or window is resized
  const updateCanvasPosition = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      canvasPositionRef.current = {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height
      };
    }
  };

  useEffect(() => {
    updateCanvasPosition();
    window.addEventListener('resize', updateCanvasPosition);
    window.addEventListener('scroll', updateCanvasPosition);
    
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && selectedTextId && canvasRef.current) {
        e.preventDefault();
        
        const canvasRect = canvasPositionRef.current;
        
        // Calculate position with the offset to maintain relative position to cursor
        const x = ((e.clientX - canvasRect.left - dragOffsetRef.current.x) / canvasRect.width) * 100;
        const y = ((e.clientY - canvasRect.top - dragOffsetRef.current.y) / canvasRect.height) * 100;

        // Ensure text stays within the canvas boundaries
        const boundedX = Math.max(5, Math.min(95, x));
        const boundedY = Math.max(5, Math.min(95, y));

        setTexts(texts.map(t => 
          t.id === selectedTextId ? { ...t, x: boundedX, y: boundedY } : t
        ));
      }
    };
    
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        document.body.style.cursor = '';
      }
    };
    
    // Add global event listeners
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    
    return () => {
      window.removeEventListener('resize', updateCanvasPosition);
      window.removeEventListener('scroll', updateCanvasPosition);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, selectedTextId, texts]);

  const handleCanvasRefChange = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      canvasRef.current = ref.current;
      updateCanvasPosition();
    }
  };

  const addNewText = () => {
    const newId = `text-${Date.now()}`;
    const newText: MemeText = {
      id: newId,
      text: "NEW TEXT",
      x: 50,
      y: 50,
      fontSize: 36,
      color: "#FFFFFF",
      fontFamily: "Impact"
    };
    setTexts([...texts, newText]);
    setSelectedTextId(newId);
    toast.success("New text added!");
  };

  const removeSelectedText = () => {
    if (!selectedTextId || texts.length <= 1) return;
    
    setTexts(texts.filter(t => t.id !== selectedTextId));
    setSelectedTextId(null);
    toast.success("Text removed!");
  };

  const updateTextProperties = (textId: string, updates: Partial<MemeText>) => {
    setTexts(texts.map(t => 
      t.id === textId ? { ...t, ...updates } : t
    ));
  };

  const handleTextMouseDown = (e: React.MouseEvent, textId: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Set the text as selected
    setSelectedTextId(textId);
    
    // Get selected text position
    const selectedText = texts.find(t => t.id === textId);
    if (!selectedText) return;
    
    // Update canvas position
    updateCanvasPosition();
    
    // Calculate drag offset relative to the text element's center
    const canvasRect = canvasPositionRef.current;
    const textCenterX = (selectedText.x / 100) * canvasRect.width;
    const textCenterY = (selectedText.y / 100) * canvasRect.height;
    
    dragOffsetRef.current = {
      x: e.clientX - (canvasRect.left + textCenterX),
      y: e.clientY - (canvasRect.top + textCenterY)
    };
    
    // Set dragging state to true
    setIsDragging(true);
    
    // Set cursor to grabbing
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    // Use global mouse move handler instead
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 flex flex-col space-y-4">
        <div className="bg-white dark:bg-card rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Meme Preview</h2>
          
          <MemeCanvas
            image={image}
            texts={texts}
            selectedTextId={selectedTextId}
            imageLoading={imageLoading}
            isDragging={isDragging}
            onTextSelect={setSelectedTextId}
            onTextMouseDown={handleTextMouseDown}
            onMouseMove={handleMouseMove}
            onCanvasRefChange={handleCanvasRefChange}
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <ImageControls onImageSelect={setImage} />
        
        <TextControls 
          texts={texts}
          selectedTextId={selectedTextId}
          onTextAdd={addNewText}
          onTextRemove={removeSelectedText}
          onTextUpdate={updateTextProperties}
          onTextSelect={setSelectedTextId}
        />
      </div>
    </div>
  );
};

export default MemeEditor;
