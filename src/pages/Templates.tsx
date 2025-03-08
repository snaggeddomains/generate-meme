
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Templates = () => {
  const templates = [
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/ded0621f-61a3-4ac9-b29f-f589867034e1.png',
      name: 'Buff Doge vs Cheems'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/25cb8922-dd81-4a4b-8d8b-8597c18a33e7.png',
      name: 'Its a Trap'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/f97eb470-37ac-4d5a-aa93-6f35513c0f9c.png',
      name: 'Every Day We Stray'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/a47b5d6c-5e5c-4aaa-9ff9-ceeb54755ecf.png',
      name: 'Twin Reaction'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/2728caa6-6184-4bf9-b511-657f438f9850.png',
      name: 'Minecraft Furnace'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/7e2728c3-7eb2-4adf-9ee7-426be67f99a6.png',
      name: 'Simpson Sign'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/b7847934-a4fa-4900-848d-b7e00b7d3710.png',
      name: 'Winnie the Pooh'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/c1af50a6-23ed-481b-bb80-60e10ce92bd9.png',
      name: 'Community Pizza'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/64e1c847-1b60-432a-ab93-5a92216be82a.png',
      name: 'Three Wolves'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/5f581a1d-b606-4091-864c-fe02c5ae8b27.png',
      name: 'Gossip Children'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/5de627b8-4aa8-4b3e-8969-eb50a910d367.png',
      name: 'Gumball Face'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/7b9c64d5-ca3b-4c7d-a4bd-4f4caefe7fb5.png',
      name: 'Nebula Weak'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/d29ff828-af7d-4617-9309-62af658d9fcb.png',
      name: 'Battlefield Comic'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/858e12af-6e1a-4551-a483-aa877637ff96.png',
      name: 'Captain Hook'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/c81af325-2cf5-4eea-8fa8-4c6dda0e6f00.png',
      name: 'Will Smith Slap'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/23010d12-13a9-4827-8202-8943107f71a0.png',
      name: 'Wojak Comic'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/c469e706-55b3-4d16-bee5-93a800f39094.png',
      name: 'Distracted Cat'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/a0fb2f8c-ce73-4c2d-bc3c-de7a48bdaa95.png',
      name: 'No Opinion Gun'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/4df8d505-b6a1-455e-89a3-ca89a4d719b6.png',
      name: 'Matrix Man'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/47c547e4-e354-4c1c-ad0a-3fae785c3742.png',
      name: 'Grievous Negotiator'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/69fb5d58-34f4-4669-9322-556d4ab242bb.png',
      name: 'Water Cannon'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/fe0a98a3-2c6a-45e3-aa26-cfe8c77f57c9.png',
      name: 'Buzz Cat Throw'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/d5658deb-79b2-4302-aa70-6e477a6b86af.png',
      name: 'King of the Hill'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/e61752da-929e-421d-a4e2-af0c5b254b1c.png',
      name: 'You New Here'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/350b6678-b22b-4301-9f74-58d9b763cb56.png',
      name: 'Study Lofi Girl'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/d8dbd750-e16e-4238-bb28-79cbf9a3fd2a.png',
      name: 'Gumball Kiss'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/bf7b0737-b9a9-4b30-91fc-d727a8456972.png',
      name: 'Heaven NPC'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/49495548-3240-4653-a7d3-a6ec501c79f8.png',
      name: 'Tired Wojak'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/dd853b5c-e25d-41ce-a136-6e1afc5babdd.png',
      name: 'Chimp Hand'
    },
    {
      url: 'https://07be27b9-3848-4fb5-8ac3-95da123d9ce5.lovableproject.com/lovable-uploads/52f14052-f58e-4c84-9fee-0e4ac18642d1.png',
      name: 'Weird Walk'
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
