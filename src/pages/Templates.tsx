
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Templates = () => {
  // Updated templates with reliable image sources
  const templates = [
    {
      url: '/lovable-uploads/e6ba6807-fcd5-44bb-8943-06408a69c18f.png',
      name: 'Highway Exit Meme',
      fallback: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      url: '/lovable-uploads/4ef6ba1e-ea94-40f5-a331-df2b2ac04bac.png',
      name: 'Kermit Meme',
      fallback: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    },
    {
      url: '/lovable-uploads/b1cb09a7-9e13-46dd-8b5f-7e50d501f949.png',
      name: 'Will Smith Slap',
      fallback: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
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
              to={`/create?template=${encodeURIComponent(template.fallback || template.url)}`}
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
                    // Use Unsplash fallback images
                    target.src = template.fallback;
                    console.log(`Using fallback image for ${template.name}: ${template.fallback}`);
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
