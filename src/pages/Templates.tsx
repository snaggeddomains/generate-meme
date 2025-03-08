
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Templates = () => {
  const templates = [
    {
      url: '/lovable-uploads/9581f077-87c7-4013-bd4b-72f8abb319a2.png',
      name: 'Zac Efron Money'
    },
    {
      url: '/lovable-uploads/ded0621f-61a3-4ac9-b29f-f589867034e1.png',
      name: 'Highway Exit'
    },
    {
      url: '/placeholder.svg',
      name: 'Kermit Inner Me'
    },
    {
      url: '/placeholder.svg',
      name: 'Will Smith Slap'
    },
    {
      url: '/placeholder.svg',
      name: 'Shaq Hot Ones'
    },
    {
      url: '/placeholder.svg',
      name: 'Taken Phone Call'
    },
    {
      url: '/placeholder.svg',
      name: 'John Cena Confused'
    },
    {
      url: '/placeholder.svg',
      name: 'Red Button Choice'
    },
    {
      url: '/placeholder.svg',
      name: 'Spongebob Mocking'
    },
    {
      url: '/placeholder.svg',
      name: 'Hide The Pain Harold'
    },
    {
      url: '/placeholder.svg',
      name: 'Matt Damon Aging'
    },
    {
      url: '/placeholder.svg',
      name: 'Predator Handshake'
    },
    {
      url: '/placeholder.svg',
      name: 'The Office Handshake'
    },
    {
      url: '/placeholder.svg',
      name: 'Dave Chappelle'
    },
    {
      url: '/placeholder.svg',
      name: 'Drake Hotline Bling'
    },
    {
      url: '/placeholder.svg',
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
