
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Templates = () => {
  const templates = [
    {
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200',
      name: 'Smiling Woman'
    },
    {
      url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200',
      name: 'Smiling Man'
    },
    {
      url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200',
      name: 'Business Man'
    },
    {
      url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200',
      name: 'Colorful Woman'
    },
    {
      url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200',
      name: 'Surprised Man'
    },
    {
      url: 'https://images.unsplash.com/photo-1579591919791-0e3737ae3808?auto=format&fit=crop&w=1200',
      name: 'Frustrated Man'
    },
    {
      url: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?auto=format&fit=crop&w=1200',
      name: 'Laughing Man'
    },
    {
      url: 'https://images.unsplash.com/photo-1603775020644-eb8decd79994?auto=format&fit=crop&w=1200',
      name: 'Confused Person'
    },
    {
      url: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=1200',
      name: 'Confident Man'
    },
    {
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200',
      name: 'Fashion Model'
    },
    {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200',
      name: 'Serious Man'
    },
    {
      url: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=1200',
      name: 'Thinking Person'
    },
    {
      url: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=1200',
      name: 'Happy Woman'
    },
    {
      url: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&w=1200',
      name: 'Coffee Man'
    },
    {
      url: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=1200',
      name: 'Face Close-up'
    },
    {
      url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200',
      name: 'Professional Woman'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Browse Meme Templates</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {templates.map((template, index) => (
            <Link 
              key={index} 
              to={`/create?template=${index + 1}`}
              className="block rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={template.url} 
                  alt={`${template.name} template`}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
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
