
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Templates = () => {
  const templates = [
    {
      url: '/lovable-uploads/When Your Parents Ask Where All Your Money Went - Zac Efron, High School Musical 2.jpg',
      name: 'Zac Efron Money'
    },
    {
      url: '/lovable-uploads/Highway Exit - Guy Swerving Car.jpg',
      name: 'Highway Exit'
    },
    {
      url: '/lovable-uploads/Kermit Inner Me.jpg',
      name: 'Kermit Inner Me'
    },
    {
      url: '/lovable-uploads/Will Smith Slap.jpg',
      name: 'Will Smith Slap'
    },
    {
      url: '/lovable-uploads/Shaq Hot Ones.jpg',
      name: 'Shaq Hot Ones'
    },
    {
      url: '/lovable-uploads/Liam Neeson Taken Phone Call.jpg',
      name: 'Taken Phone Call'
    },
    {
      url: '/lovable-uploads/John Cena Confused.jpg',
      name: 'John Cena Confused'
    },
    {
      url: '/lovable-uploads/Red Button Choice Panic.jpg',
      name: 'Red Button Choice'
    },
    {
      url: '/lovable-uploads/Spongebob Mocking.jpg',
      name: 'Spongebob Mocking'
    },
    {
      url: '/lovable-uploads/Hide The Pain Harold.jpg',
      name: 'Hide The Pain Harold'
    },
    {
      url: '/lovable-uploads/Matt Damon Aging.jpg',
      name: 'Matt Damon Aging'
    },
    {
      url: '/lovable-uploads/Predator Epic Handshake.jpg',
      name: 'Predator Handshake'
    },
    {
      url: '/lovable-uploads/The Office Handshake.jpg',
      name: 'The Office Handshake'
    },
    {
      url: '/lovable-uploads/Dave Chappelle.jpg',
      name: 'Dave Chappelle'
    },
    {
      url: '/lovable-uploads/Drake Hotline Bling.jpg',
      name: 'Drake Hotline Bling'
    },
    {
      url: '/lovable-uploads/Distracted Boyfriend.jpg',
      name: 'Distracted Boyfriend'
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
              to={`/create?template=${template.url}`}
              className="block rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={template.url} 
                  alt={`${template.name} template`}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/400x400/lightgray/darkgray?text=Loading+Failed';
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
