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

  const fontFamilies = [
    { value: "Impact", label: "Impact" },
    { value: "Arial", label: "Arial" },
    { value: "Comic Sans MS", label: "Comic Sans" },
    { value: "Pacifico", label: "Pacifico" },
    { value: "Oswald", label: "Oswald" },
  ];

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

  const templateImages = [
    {
      url: '/lovable-uploads/9581f077-87c7-4013-bd4b-72f8abb319a2.png',
      name: 'Zac Efron Collage'
    },
    {
      url: '/lovable-uploads/869b7d2b-b158-479f-b61a-6dfcc59c1d0d.png',
      name: 'Highway Exit'
    },
    {
      url: '/lovable-uploads/2433aa4e-ad2e-409f-bada-436ebb360bf7.png',
      name: 'Kermit Mood'
    },
    {
      url: '/lovable-uploads/04abb2c3-6a1e-4ded-85b7-3893eb48cb40.png',
      name: 'Will Smith Slap'
    },
    {
      url: '/lovable-uploads/39dfe9a4-2ab1-438e-994c-2aa77e221057.png',
      name: 'Shaq Surprise'
    },
    {
      url: '/lovable-uploads/a5cbe67a-9047-45e3-b897-d8350ab6dfbe.png',
      name: 'Taken Phone Call'
    },
    {
      url: '/lovable-uploads/f8173864-427b-4ef1-ba7d-40455da56a9a.png',
      name: 'John Cena'
    },
    {
      url: '/lovable-uploads/984f5c84-9f42-4567-b531-43a9b13b8552.png',
      name: 'Red Button Choice'
    },
    {
      url: '/lovable-uploads/31fd2421-f639-4e43-b494-a8deb2cc8ff3.png',
      name: 'Spongebob Pointing'
    },
    {
      url: '/lovable-uploads/f78d8307-89cc-4977-8b84-c0a367e46310.png',
      name: 'Hide The Pain Harold'
    },
    {
      url: '/lovable-uploads/1608f8a5-891a-4d8c-b920-40bc4bd90b8a.png',
      name: 'Matt Damon Aging'
    },
    {
      url: '/lovable-uploads/10de5f8f-91e8-425c-b3b6-ab5165c0bb1a.png',
      name: 'Predator Handshake'
    },
    {
      url: '/lovable-uploads/b91f569c-f7a4-4344-ba61-2b8b0c5ed7ec.png',
      name: 'The Office Handshake'
    },
    {
      url: '/lovable-uploads/818c33f7-5db2-4c8d-8680-7d5cf176a587.png',
      name: 'Dave Chappelle'
    },
    {
      url: '/lovable-uploads/afdb1e53-36b2-4184-84c9-b45269fa6eeb.png',
      name: 'Money Sleep'
    },
    {
      url: '/lovable-uploads/26cc6e99-ac06-4ec7-97ce-afd2c9f09c0f.png',
      name: 'Decision Buttons'
    }
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
              <div className="grid grid-cols-3 gap-2 max-h-[360px] overflow-y-auto pr-1">
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
