
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TemplateGrid from "@/components/templates/TemplateGrid";
import { toast } from "sonner";
import { extractGoogleDriveFolderContents } from "@/components/home/DriveUtils";

const Templates = () => {
  const [templates, setTemplates] = useState<Array<{url: string, name: string, fallback: string}>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDriveFolderContents = async () => {
      setIsLoading(true);
      try {
        const folderUrl = "https://drive.google.com/drive/folders/1MWU09Gq7ux87a8qg8S3BnfbIEn1WV_ys?usp=sharing";
        const folderContents = await extractGoogleDriveFolderContents();
        
        // Add the Google Drive folder images to templates
        if (folderContents.length > 0) {
          const driveTemplates = folderContents.map(item => ({
            url: `https://drive.google.com/uc?export=view&id=${item.id}`,
            name: item.name,
            fallback: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6' // Default fallback
          }));
          
          setTemplates(driveTemplates);
          toast.success(`Loaded ${driveTemplates.length} templates from Google Drive`);
        }
      } catch (error) {
        console.error("Error fetching templates:", error);
        toast.error("Failed to load templates");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchDriveFolderContents();
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
