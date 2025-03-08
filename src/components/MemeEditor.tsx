
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { 
  Download, 
  Type, 
  Image as ImageIcon, 
  PlusCircle,
  MinusCircle,
  RefreshCw,
  Palette
} from "lucide-react";

interface MemeText {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
  fontFamily: string;
}

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

  // Available font families
  const fontFamilies = [
    { value: "Impact", label: "Impact" },
    { value: "Arial", label: "Arial" },
    { value: "Comic Sans MS", label: "Comic Sans" },
    { value: "Pacifico", label: "Pacifico" },
    { value: "Oswald", label: "Oswald" },
  ];

  // Text colors
  const textColors = [
    "#FFFFFF", // White
    "#000000", // Black
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#8B5CF6", // Purple
    "#D946EF", // Pink
    "#F97316", // Orange
  ];

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setImageLoading(true);
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
      setImageLoading(false);
    };
    reader.readAsDataURL(file);
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

  const updateTextContent = (value: string) => {
    if (!selectedTextId) return;
    
    setTexts(texts.map(t => 
      t.id === selectedTextId ? { ...t, text: value } : t
    ));
  };

  const updateTextSize = (value: number[]) => {
    if (!selectedTextId) return;
    
    setTexts(texts.map(t => 
      t.id === selectedTextId ? { ...t, fontSize: value[0] } : t
    ));
  };

  const updateTextColor = (color: string) => {
    if (!selectedTextId) return;
    
    setTexts(texts.map(t => 
      t.id === selectedTextId ? { ...t, color } : t
    ));
  };

  const updateTextFont = (fontFamily: string) => {
    if (!selectedTextId) return;
    
    setTexts(texts.map(t => 
      t.id === selectedTextId ? { ...t, fontFamily } : t
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

    // Ensure x and y are within bounds
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

  const downloadMeme = () => {
    if (!canvasRef.current) return;
    
    import('html2canvas').then(({ default: html2canvas }) => {
      html2canvas(canvasRef.current!).then(canvas => {
        const link = document.createElement('a');
        link.download = 'generated-meme.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        toast.success("Meme downloaded successfully!");
      });
    }).catch(err => {
      console.error("Error downloading meme:", err);
      toast.error("Failed to download meme. Please try again.");
    });
  };

  const useTemplateImage = (templateUrl: string) => {
    setImageLoading(true);
    setImage(templateUrl);
    setImageLoading(false);
  };

  const selectedText = selectedTextId 
    ? texts.find(t => t.id === selectedTextId) 
    : null;

  // Updated template images with animals
  const templateImages = [
    {
      url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      name: 'Sleepy Cat'
    },
    {
      url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      name: 'Grey Kitten'
    },
    {
      url: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      name: 'Penguins'
    },
    {
      url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      name: 'Deer'
    },
    {
      url: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      name: 'Smiling Dog'
    },
    {
      url: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      name: 'Cat & Dog'
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 flex flex-col space-y-4">
        <div className="bg-white dark:bg-card rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Meme Preview</h2>
          
          {!image ? (
            <div className="border-4 border-dashed border-muted rounded-lg p-12 text-center">
              <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No image selected</h3>
              <p className="text-muted-foreground mb-4">Upload an image or choose a template to get started</p>
              <div className="flex justify-center">
                <Label 
                  htmlFor="image-upload" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md cursor-pointer"
                >
                  Upload Image
                </Label>
                <Input 
                  id="image-upload" 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          ) : (
            <div 
              ref={canvasRef}
              className="meme-canvas-container relative mx-auto" 
              style={{ maxWidth: '100%' }}
              onMouseMove={handleMouseMove}
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
                        fontFamily: text.fontFamily
                      }}
                      onClick={() => setSelectedTextId(text.id)}
                      onMouseDown={(e) => handleTextMouseDown(e, text.id)}
                    >
                      {text.text}
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
          
          {image && (
            <div className="mt-4 flex justify-center">
              <Button 
                onClick={downloadMeme} 
                className="bg-meme-purple hover:bg-meme-purple/90"
              >
                <Download className="mr-2 h-4 w-4" /> Download Meme
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white dark:bg-card rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <ImageIcon className="mr-2 h-5 w-5" /> Image
          </h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="image-upload-control" className="block mb-2">Upload Image</Label>
              <Input 
                id="image-upload-control" 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload}
              />
            </div>
            
            <div>
              <Label className="block mb-2">Quick Templates</Label>
              <div className="grid grid-cols-3 gap-2">
                {templateImages.map((template, index) => (
                  <div 
                    key={index}
                    className="overflow-hidden rounded-md cursor-pointer hover:ring-2 hover:ring-primary"
                    onClick={() => useTemplateImage(template.url)}
                  >
                    <img 
                      src={template.url} 
                      alt={`${template.name} template`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-card rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <Type className="mr-2 h-5 w-5" /> Text
          </h3>
          
          <div className="space-y-4">
            <div className="flex gap-2 mb-4">
              <Button 
                onClick={addNewText} 
                variant="outline" 
                className="flex-1"
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Add Text
              </Button>
              
              <Button 
                onClick={removeSelectedText} 
                variant="outline" 
                className="flex-1"
                disabled={!selectedTextId || texts.length <= 1}
              >
                <MinusCircle className="mr-2 h-4 w-4" /> Remove Text
              </Button>
            </div>
            
            {selectedText ? (
              <>
                <div>
                  <Label htmlFor="text-content" className="block mb-2">Text Content</Label>
                  <Input 
                    id="text-content" 
                    value={selectedText.text} 
                    onChange={(e) => updateTextContent(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="text-font" className="block mb-2">Font Family</Label>
                  <Select 
                    value={selectedText.fontFamily} 
                    onValueChange={updateTextFont}
                  >
                    <SelectTrigger id="text-font">
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      {fontFamilies.map(font => (
                        <SelectItem key={font.value} value={font.value}>
                          {font.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="block mb-2">Font Size: {selectedText.fontSize}px</Label>
                  <Slider 
                    value={[selectedText.fontSize]} 
                    min={12} 
                    max={72} 
                    step={1}
                    onValueChange={updateTextSize}
                  />
                </div>

                <div>
                  <Label className="block mb-2 flex items-center">
                    <Palette className="mr-2 h-4 w-4" /> Text Color
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {textColors.map(color => (
                      <button
                        key={color}
                        type="button"
                        className={`w-8 h-8 rounded-full border-2 ${selectedText.color === color ? 'border-meme-purple' : 'border-transparent'}`}
                        style={{ backgroundColor: color }}
                        onClick={() => updateTextColor(color)}
                        aria-label={`Select color ${color}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 p-3 bg-muted rounded-md">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="font-semibold">Tip:</span> Drag text directly on the image to position it
                  </p>
                </div>
              </>
            ) : (
              <p className="text-muted-foreground text-center py-4">
                Select a text on the meme to edit its properties
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeEditor;
