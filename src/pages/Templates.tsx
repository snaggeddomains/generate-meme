
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Templates = () => {
  const templates = [
    {
      url: '/lovable-uploads/9581f077-87c7-4013-bd4b-72f8abb319a2.png',
      name: 'Zac Efron Collage'
    },
    {
      url: '/lovable-uploads/869b7d2b-b158-479f-b61a-6dfcc59c1d0d.png',
      name: 'Highway Exit'
    },
    {
      url: '/lovable-uploads/2433aa4e-ad2e-409f-bada-436ebb360bf7.png',
      name: 'Kermit Mood'
    },
    {
      url: '/lovable-uploads/04abb2c3-6a1e-4ded-85b7-3893eb48cb40.png',
      name: 'Will Smith Slap'
    },
    {
      url: '/lovable-uploads/39dfe9a4-2ab1-438e-994c-2aa77e221057.png',
      name: 'Shaq Surprise'
    },
    {
      url: '/lovable-uploads/a5cbe67a-9047-45e3-b897-d8350ab6dfbe.png',
      name: 'Taken Phone Call'
    },
    {
      url: '/lovable-uploads/f8173864-427b-4ef1-ba7d-40455da56a9a.png',
      name: 'John Cena'
    },
    {
      url: '/lovable-uploads/984f5c84-9f42-4567-b531-43a9b13b8552.png',
      name: 'Red Button Choice'
    },
    {
      url: '/lovable-uploads/31fd2421-f639-4e43-b494-a8deb2cc8ff3.png',
      name: 'Spongebob Pointing'
    },
    {
      url: '/lovable-uploads/f78d8307-89cc-4977-8b84-c0a367e46310.png',
      name: 'Hide The Pain Harold'
    },
    {
      url: '/lovable-uploads/1608f8a5-891a-4d8c-b920-40bc4bd90b8a.png',
      name: 'Matt Damon Aging'
    },
    {
      url: '/lovable-uploads/10de5f8f-91e8-425c-b3b6-ab5165c0bb1a.png',
      name: 'Predator Handshake'
    },
    {
      url: '/lovable-uploads/b91f569c-f7a4-4344-ba61-2b8b0c5ed7ec.png',
      name: 'The Office Handshake'
    },
    {
      url: '/lovable-uploads/818c33f7-5db2-4c8d-8680-7d5cf176a587.png',
      name: 'Dave Chappelle'
    },
    {
      url: '/lovable-uploads/afdb1e53-36b2-4184-84c9-b45269fa6eeb.png',
      name: 'Money Sleep'
    },
    {
      url: '/lovable-uploads/26cc6e99-ac06-4ec7-97ce-afd2c9f09c0f.png',
      name: 'Decision Buttons'
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
