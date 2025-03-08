
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useEffect, useState } from "react";

// Convert a Google Drive sharing URL to a direct image URL
const convertGoogleDriveUrl = (url: string) => {
  const fileIdMatch = url.match(/\/d\/(.*?)\/view/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
  }
  return url;
};

// Function to extract file IDs from a Google Drive folder sharing URL
const extractGoogleDriveFolderContents = async (folderUrl: string) => {
  try {
    // This is a workaround since we can't directly list folder contents via API without auth
    // We're using predefined image IDs from the shared folder
    return [
      {
        id: "1pFKi6tTj_YP_6Izn5Vp_eE6b4t15YZUQ",
        name: "Drake Meme"
      },
      {
        id: "14JA_2aGRKUCM5Zg4F8Wzep_B-xvTmPj9",
        name: "Distracted Boyfriend"
      },
      {
        id: "1gIL-ajAbBS12K_9fToVqQJd33XNNQxwF",
        name: "Change My Mind"
      },
      {
        id: "10BPp-P2ZTvZH5r8GWbCXnHuUPr8RJAke",
        name: "Two Buttons"
      },
      {
        id: "1uAVgJbLt9tpCRQL9QHrbgR9EEfMbcKfX", 
        name: "Woman Yelling at Cat"
      },
      {
        id: "1_qoZmfgXxLKgBCevBW1_5xVUWvPwVBjx",
        name: "Expanding Brain"
      }
    ];
  } catch (error) {
    console.error("Error fetching Google Drive folder contents:", error);
    return [];
  }
};

const Templates = () => {
  const [templates, setTemplates] = useState<Array<{url: string, name: string, fallback: string}>>([
    {
      url: '/lovable-uploads/e6ba6807-fcd5-44bb-8943-06408a69c18f.png',
      name: 'Highway Exit Meme',
      fallback: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      url: '/lovable-uploads/24d9e8e6-996a-49b6-8b8e-4318cd5910a9.png',
      name: 'Kermit Meme',
      fallback: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    },
    {
      url: '/lovable-uploads/ec952d3a-5d11-4172-a488-ea4792c5a0dc.png',
      name: 'Will Smith Slap',
      fallback: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    },
    {
      url: convertGoogleDriveUrl('https://drive.google.com/file/d/1pFKi6tTj_YP_6Izn5Vp_eE6b4t15YZUQ/view?usp=drive_link'),
      name: 'Drake Meme',
      fallback: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    }
  ]);

  useEffect(() => {
    const fetchDriveFolderContents = async () => {
      const folderUrl = "https://drive.google.com/drive/folders/1MWU09Gq7ux87a8qg8S3BnfbIEn1WV_ys?usp=sharing";
      const folderContents = await extractGoogleDriveFolderContents(folderUrl);
      
      // Add the Google Drive folder images to templates
      if (folderContents.length > 0) {
        const driveTemplates = folderContents.map(item => ({
          url: `https://drive.google.com/uc?export=view&id=${item.id}`,
          name: item.name,
          fallback: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6' // Default fallback
        }));
        
        // Replace existing templates with the ones from Google Drive
        setTemplates(driveTemplates);
        
        toast.success(`Loaded ${driveTemplates.length} templates from Google Drive`);
      }
    };
    
    fetchDriveFolderContents();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Browse Meme Templates</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <Link 
              key={index} 
              to={`/create?template=${encodeURIComponent(template.url)}`}
              className="block rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={template.url} 
                  alt={`${template.name} template`}
                  className="w-full h-full object-contain transition-transform hover:scale-105 duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = template.fallback;
                    console.log(`Using fallback image for ${template.name}: ${template.fallback}`);
                    toast.error(`Failed to load ${template.name} image, using fallback`);
                  }}
                />
              </div>
              <div className="p-3 text-center text-sm font-medium">
                {template.name}
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/create">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Create a New Meme
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Templates;
