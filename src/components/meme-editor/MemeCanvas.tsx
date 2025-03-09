
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Download, RefreshCw, GripHorizontal } from "lucide-react";
import { MemeText, downloadMeme, getPublicPath } from "@/utils/memeUtils";
import { ImageIcon } from "lucide-react";

interface MemeCanvasProps {
  image: string | null;
  texts: MemeText[];
  selectedTextId: string | null;
  imageLoading: boolean;
  isDragging: boolean;
  onTextSelect: (textId: string | null) => void;
  onTextMouseDown: (e: React.MouseEvent, textId: string) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onCanvasRefChange: (ref: React.RefObject<HTMLDivElement>) => void;
}

const MemeCanvas = ({ 
  image, 
  texts, 
  selectedTextId, 
  imageLoading, 
  isDragging,
  onTextSelect, 
  onTextMouseDown, 
  onMouseMove,
  onCanvasRefChange
}: MemeCanvasProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      onCanvasRefChange(canvasRef);
    }
  }, [canvasRef, onCanvasRefChange]);

  const handleDownload = () => {
    downloadMeme(
      canvasRef,
      () => toast.success("Meme downloaded successfully!"),
      () => toast.error("Failed to download meme. Please try again.")
    );
  };

  if (!image) {
    return (
      <div className="border-4 border-dashed border-muted rounded-lg p-12 text-center">
        <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium mb-2">No image selected</h3>
        <p className="text-muted-foreground mb-4">Upload an image or choose a template to get started</p>
      </div>
    );
  }

  // Process the image URL to ensure it works with GitHub Pages
  const processedImageUrl = getPublicPath(image);
  console.log("Image URL being used:", processedImageUrl);

  // Handle text click separately from drag operations
  const handleTextClick = (e: React.MouseEvent, textId: string) => {
    e.stopPropagation(); // Prevent event from bubbling up
    
    if (selectedTextId !== textId) {
      onTextSelect(textId);
    }
  };

  // Handle canvas background click to deselect text
  const handleCanvasClick = (e: React.MouseEvent) => {
    // Only deselect if we're not in the middle of a drag operation
    if (!isDragging && e.target === canvasRef.current) {
      onTextSelect(null);
    }
  };

  return (
    <>
      <div 
        ref={canvasRef}
        className="meme-canvas-container relative mx-auto rounded-md overflow-hidden" 
        style={{ maxWidth: '100%', touchAction: 'none' }}
        onMouseMove={onMouseMove}
        onClick={handleCanvasClick}
      >
        {imageLoading ? (
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="animate-spin" />
          </div>
        ) : (
          <>
            <img 
              src={processedImageUrl} 
              alt="Meme template" 
              className="max-w-full w-full"
              onError={(e) => {
                console.error("Image failed to load:", processedImageUrl);
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                // Use a base64 fallback instead of an external URL to ensure it always loads
                target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDNkM2QzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzU1NTU1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SW1hZ2UgTG9hZGluZyBGYWlsZWQ8L3RleHQ+PC9zdmc+";
                toast.error("Failed to load image");
              }}
            />
            {texts.map(text => (
              <div
                key={text.id}
                className={`absolute meme-text-container ${
                  selectedTextId === text.id 
                    ? 'ring-2 ring-primary ring-offset-2 cursor-move' 
                    : 'cursor-grab hover:ring-1 hover:ring-primary/50'
                }`}
                style={{
                  top: `${text.y}%`,
                  left: `${text.x}%`,
                  transform: 'translate(-50%, -50%)',
                  fontSize: `${text.fontSize}px`,
                  maxWidth: '90%',
                  padding: '0.5rem',
                  borderRadius: '0.25rem',
                  fontFamily: text.fontFamily,
                  userSelect: 'none',
                  backgroundColor: 'transparent',
                  transition: isDragging ? 'none' : 'all 0.1s ease',
                  zIndex: selectedTextId === text.id ? 10 : 1,
                  pointerEvents: 'auto'
                }}
                onClick={(e) => handleTextClick(e, text.id)}
                onMouseDown={(e) => onTextMouseDown(e, text.id)}
              >
                <span 
                  className="meme-text"
                  style={{
                    color: text.color,
                    display: 'inline-block',
                    backgroundColor: 'transparent',
                    textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 1px 1px 0 #000',
                  }}
                >
                  {text.text}
                  {selectedTextId === text.id && (
                    <div className="absolute -top-6 -right-6 bg-primary/90 text-white p-1 rounded-full shadow-md">
                      <GripHorizontal size={16} />
                    </div>
                  )}
                </span>
              </div>
            ))}
          </>
        )}
      </div>
      
      <div className="mt-4 flex justify-center">
        <Button 
          onClick={handleDownload} 
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Download className="mr-2 h-4 w-4" /> Download Meme
        </Button>
      </div>
    </>
  );
};

export default MemeCanvas;
