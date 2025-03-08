
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
      url: '/lovable-uploads/ded0621f-61a3-4ac9-b29f-f589867034e1.png',
      name: 'Buff Doge vs Cheems'
    },
    {
      url: '/lovable-uploads/25cb8922-dd81-4a4b-8d8b-8597c18a33e7.png',
      name: 'Its a Trap'
    },
    {
      url: '/lovable-uploads/f97eb470-37ac-4d5a-aa93-6f35513c0f9c.png',
      name: 'Every Day We Stray'
    },
    {
      url: '/lovable-uploads/a47b5d6c-5e5c-4aaa-9ff9-ceeb54755ecf.png',
      name: 'Twin Reaction'
    },
    {
      url: '/lovable-uploads/2728caa6-6184-4bf9-b511-657f438f9850.png',
      name: 'Minecraft Furnace'
    },
    {
      url: '/lovable-uploads/7e2728c3-7eb2-4adf-9ee7-426be67f99a6.png',
      name: 'Simpson Sign'
    },
    {
      url: '/lovable-uploads/b7847934-a4fa-4900-848d-b7e00b7d3710.png',
      name: 'Winnie the Pooh'
    },
    {
      url: '/lovable-uploads/c1af50a6-23ed-481b-bb80-60e10ce92bd9.png',
      name: 'Community Pizza'
    },
    {
      url: '/lovable-uploads/64e1c847-1b60-432a-ab93-5a92216be82a.png',
      name: 'Three Wolves'
    },
    {
      url: '/lovable-uploads/5f581a1d-b606-4091-864c-fe02c5ae8b27.png',
      name: 'Gossip Children'
    },
    {
      url: '/lovable-uploads/5de627b8-4aa8-4b3e-8969-eb50a910d367.png',
      name: 'Gumball Face'
    },
    {
      url: '/lovable-uploads/7b9c64d5-ca3b-4c7d-a4bd-4f4caefe7fb5.png',
      name: 'Nebula Weak'
    },
    {
      url: '/lovable-uploads/d29ff828-af7d-4617-9309-62af658d9fcb.png',
      name: 'Battlefield Comic'
    },
    {
      url: '/lovable-uploads/858e12af-6e1a-4551-a483-aa877637ff96.png',
      name: 'Captain Hook'
    },
    {
      url: '/lovable-uploads/c81af325-2cf5-4eea-8fa8-4c6dda0e6f00.png',
      name: 'Will Smith Slap'
    },
    {
      url: '/lovable-uploads/23010d12-13a9-4827-8202-8943107f71a0.png',
      name: 'Wojak Comic'
    },
    {
      url: '/lovable-uploads/c469e706-55b3-4d16-bee5-93a800f39094.png',
      name: 'Distracted Cat'
    },
    {
      url: '/lovable-uploads/a0fb2f8c-ce73-4c2d-bc3c-de7a48bdaa95.png',
      name: 'No Opinion Gun'
    },
    {
      url: '/lovable-uploads/4df8d505-b6a1-455e-89a3-ca89a4d719b6.png',
      name: 'Matrix Man'
    },
    {
      url: '/lovable-uploads/47c547e4-e354-4c1c-ad0a-3fae785c3742.png',
      name: 'Grievous Negotiator'
    },
    {
      url: '/lovable-uploads/69fb5d58-34f4-4669-9322-556d4ab242bb.png',
      name: 'Water Cannon'
    },
    {
      url: '/lovable-uploads/fe0a98a3-2c6a-45e3-aa26-cfe8c77f57c9.png',
      name: 'Buzz Cat Throw'
    },
    {
      url: '/lovable-uploads/d5658deb-79b2-4302-aa70-6e477a6b86af.png',
      name: 'King of the Hill'
    },
    {
      url: '/lovable-uploads/e61752da-929e-421d-a4e2-af0c5b254b1c.png',
      name: 'You New Here'
    },
    {
      url: '/lovable-uploads/350b6678-b22b-4301-9f74-58d9b763cb56.png',
      name: 'Study Lofi Girl'
    },
    {
      url: '/lovable-uploads/d8dbd750-e16e-4238-bb28-79cbf9a3fd2a.png',
      name: 'Gumball Kiss'
    },
    {
      url: '/lovable-uploads/bf7b0737-b9a9-4b30-91fc-d727a8456972.png',
      name: 'Heaven NPC'
    },
    {
      url: '/lovable-uploads/49495548-3240-4653-a7d3-a6ec501c79f8.png',
      name: 'Tired Wojak'
    },
    {
      url: '/lovable-uploads/dd853b5c-e25d-41ce-a136-6e1afc5babdd.png',
      name: 'Chimp Hand'
    },
    {
      url: '/lovable-uploads/52f14052-f58e-4c84-9fee-0e4ac18642d1.png',
      name: 'Weird Walk'
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
