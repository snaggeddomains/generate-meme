
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { templateImages } from "@/utils/memeUtils";

interface ImageControlsProps {
  onImageSelect: (url: string) => void;
}

const ImageControls = ({ onImageSelect }: ImageControlsProps) => {
  const [imageLoading, setImageLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setImageLoading(true);
    const reader = new FileReader();
    reader.onload = () => {
      onImageSelect(reader.result as string);
      setImageLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const useTemplateImage = (templateUrl: string) => {
    setImageLoading(true);
    onImageSelect(templateUrl);
    setImageLoading(false);
    toast.success("Template loaded successfully");
  };

  return (
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-[360px] overflow-y-auto pr-1">
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
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/150x150/lightgray/darkgray?text=Failed';
                    toast.error(`Failed to load ${template.name}`);
                  }}
                />
                <div className="p-1 text-center text-xs">
                  {template.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import { ImageIcon } from "lucide-react";
export default ImageControls;
