
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TemplateGrid from "@/components/templates/TemplateGrid";
import { toast } from "sonner";
import { extractGoogleDriveFolderContents, markImageAsLoaded } from "@/components/home/DriveUtils";

const Templates = () => {
  const [templates, setTemplates] = useState<Array<{url: string, name: string, fallback: string}>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTemplates = async () => {
      setIsLoading(true);
      try {
        const templateContents = await extractGoogleDriveFolderContents();
        
        if (templateContents.length > 0) {
          const localTemplates = templateContents.map(item => {
            // Pre-load images to check which ones work
            const img = new Image();
            const url = item.url || `/lovable-uploads/${item.id}.png`;
            img.onload = () => markImageAsLoaded(url);
            img.src = url;
            
            return {
              url: url,
              name: item.name,
              fallback: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6' // Default fallback
            };
          });
          
          setTemplates(localTemplates);
          toast.success(`Loaded template options`);
        }
      } catch (error) {
        console.error("Error fetching templates:", error);
        toast.error("Failed to load templates");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTemplates();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Browse Meme Templates</h1>
        
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading templates...</p>
          </div>
        ) : (
          <TemplateGrid templates={templates} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Templates;
