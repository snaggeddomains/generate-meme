
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Download, RefreshCw } from "lucide-react";
import { MemeText, downloadMeme } from "@/utils/memeUtils";

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

  return (
    <>
      <div 
        ref={canvasRef}
        className="meme-canvas-container relative mx-auto" 
        style={{ maxWidth: '100%' }}
        onMouseMove={onMouseMove}
      >
        {imageLoading ? (
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="animate-spin" />
          </div>
        ) : (
          <>
            <img 
              src={image} 
              alt="Meme template" 
              className="max-w-full w-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://placehold.co/600x400/lightgray/darkgray?text=Image+Loading+Failed';
                toast.error("Failed to load image");
              }}
            />
            {texts.map(text => (
              <div
                key={text.id}
                className={`absolute meme-text cursor-move ${selectedTextId === text.id ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                style={{
                  top: `${text.y}%`,
                  left: `${text.x}%`,
                  transform: 'translate(-50%, -50%)',
                  fontSize: `${text.fontSize}px`,
                  maxWidth: '90%',
                  padding: '0.25rem',
                  color: text.color,
                  fontFamily: text.fontFamily,
                  textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
                  userSelect: 'none',
                  backgroundColor: 'transparent'
                }}
                onClick={() => onTextSelect(text.id)}
                onMouseDown={(e) => onTextMouseDown(e, text.id)}
              >
                {text.text}
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

import { ImageIcon } from "lucide-react";
export default MemeCanvas;
