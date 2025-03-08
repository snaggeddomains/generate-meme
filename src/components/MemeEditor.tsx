
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

  useEffect(() => {
    if (canvasRef.current) {
      const updateCanvasPosition = () => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
          canvasPositionRef.current = {
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width,
            height: rect.height
          };
        }
      };

      updateCanvasPosition();
      window.addEventListener('resize', updateCanvasPosition);
      return () => {
        window.removeEventListener('resize', updateCanvasPosition);
      };
    }
  }, [image]);

  const handleCanvasRefChange = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      canvasRef.current = ref.current;
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
    setSelectedTextId(textId);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !selectedTextId || !canvasRef.current) return;

    const canvasRect = canvasPositionRef.current;
    const x = ((e.clientX - canvasRect.left) / canvasRect.width) * 100;
    const y = ((e.clientY - canvasRect.top) / canvasRect.height) * 100;

    const boundedX = Math.max(0, Math.min(100, x));
    const boundedY = Math.max(0, Math.min(100, y));

    setTexts(texts.map(t => 
      t.id === selectedTextId ? { ...t, x: boundedX, y: boundedY } : t
    ));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

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
