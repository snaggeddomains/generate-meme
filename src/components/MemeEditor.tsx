import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { 
  Download, 
  Type, 
  Image as ImageIcon, 
  ArrowUp, 
  ArrowDown,
  PlusCircle,
  MinusCircle,
  RefreshCw
} from "lucide-react";

interface MemeText {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
}

const MemeEditor = () => {
  const [image, setImage] = useState<string | null>(null);
  const [texts, setTexts] = useState<MemeText[]>([
    { id: "top", text: "TOP TEXT", x: 50, y: 10, fontSize: 36 },
    { id: "bottom", text: "BOTTOM TEXT", x: 50, y: 90, fontSize: 36 }
  ]);
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

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
      fontSize: 36
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

  const moveTextVertically = (direction: 'up' | 'down') => {
    if (!selectedTextId) return;
    
    setTexts(texts.map(t => {
      if (t.id === selectedTextId) {
        const newY = direction === 'up' 
          ? Math.max(0, t.y - 5) 
          : Math.min(100, t.y + 5);
        return { ...t, y: newY };
      }
      return t;
    }));
  };

  const updateTextSize = (value: number[]) => {
    if (!selectedTextId) return;
    
    setTexts(texts.map(t => 
      t.id === selectedTextId ? { ...t, fontSize: value[0] } : t
    ));
  };

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
                    className="max-w-full"
                  />
                  {texts.map(text => (
                    <div
                      key={text.id}
                      className={`absolute meme-text cursor-pointer ${selectedTextId === text.id ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                      style={{
                        top: `${text.y}%`,
                        left: `${text.x}%`,
                        transform: 'translate(-50%, -50%)',
                        fontSize: `${text.fontSize}px`,
                        maxWidth: '90%',
                        padding: '0.25rem'
                      }}
                      onClick={() => setSelectedTextId(text.id)}
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
                {[
                  {
                    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
                    name: 'Coding'
                  },
                  {
                    url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
                    name: 'Laptop'
                  },
                  {
                    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
                    name: 'Circuit'
                  },
                  {
                    url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
                    name: 'Remote Work'
                  },
                  {
                    url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
                    name: 'MacBook'
                  },
                  {
                    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
                    name: 'Work Setup'
                  },
                ].map((template, index) => (
                  <div 
                    key={index}
                    className="aspect-square bg-muted rounded-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary"
                    onClick={() => useTemplateImage(template.url)}
                  >
                    <img 
                      src={template.url} 
                      alt={`${template.name} template`}
                      className="w-full h-full object-cover"
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
                  <Label className="block mb-2">Position</Label>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => moveTextVertically('up')}
                      className="flex-1"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => moveTextVertically('down')}
                      className="flex-1"
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                  </div>
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
