
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Type, PlusCircle, MinusCircle, Palette } from "lucide-react";
import { MemeText, fontFamilies, textColors } from "@/utils/memeUtils";

interface TextControlsProps {
  texts: MemeText[];
  selectedTextId: string | null;
  onTextAdd: () => void;
  onTextRemove: () => void;
  onTextUpdate: (textId: string, updates: Partial<MemeText>) => void;
  onTextSelect: (textId: string | null) => void;
}

const TextControls = ({
  texts,
  selectedTextId,
  onTextAdd,
  onTextRemove,
  onTextUpdate,
  onTextSelect
}: TextControlsProps) => {
  const selectedText = selectedTextId 
    ? texts.find(t => t.id === selectedTextId) 
    : null;

  const updateTextContent = (value: string) => {
    if (!selectedTextId) return;
    onTextUpdate(selectedTextId, { text: value });
  };

  const updateTextSize = (value: number[]) => {
    if (!selectedTextId) return;
    onTextUpdate(selectedTextId, { fontSize: value[0] });
  };

  const updateTextColor = (color: string) => {
    if (!selectedTextId) return;
    onTextUpdate(selectedTextId, { color });
  };

  const updateTextFont = (fontFamily: string) => {
    if (!selectedTextId) return;
    onTextUpdate(selectedTextId, { fontFamily });
  };

  return (
    <div className="bg-white dark:bg-card rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-bold mb-4 flex items-center">
        <Type className="mr-2 h-5 w-5" /> Text
      </h3>
      
      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          <Button 
            onClick={onTextAdd} 
            variant="outline" 
            className="flex-1"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add Text
          </Button>
          
          <Button 
            onClick={onTextRemove} 
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
                    className={`w-8 h-8 rounded-full border-2 ${selectedText.color === color ? 'border-blue-600' : 'border-transparent'}`}
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
  );
};

export default TextControls;
