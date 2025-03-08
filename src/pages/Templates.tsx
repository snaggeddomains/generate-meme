
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Templates = () => {
  // Using only the three new meme templates
  const templates = [
    {
      url: '/lovable-uploads/e6ba6807-fcd5-44bb-8943-06408a69c18f.png',
      name: 'Highway Exit Meme'
    },
    {
      url: '/lovable-uploads/4ef6ba1e-ea94-40f5-a331-df2b2ac04bac.png',
      name: 'Kermit Meme'
    },
    {
      url: '/lovable-uploads/b1cb09a7-9e13-46dd-8b5f-7e50d501f949.png',
      name: 'Will Smith Slap'
    }
  ];

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
                    target.src = 'https://placehold.co/400x400/lightgray/darkgray?text=Loading+Failed';
                    toast.error(`Failed to load ${template.name}`);
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
