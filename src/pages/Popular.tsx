
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Share2, ThumbsUp } from "lucide-react";

const Popular = () => {
  const popularMemes = [
    {
      id: 1,
      title: "The Day I Discovered Stackoverflow",
      image: "/lovable-uploads/ded0621f-61a3-4ac9-b29f-f589867034e1.png",
      creator: "CodeMaster42",
      likes: 1263,
      shares: 482,
      tags: ["programming", "funny", "relatable"]
    },
    {
      id: 2,
      title: "When the Code Works on First Try",
      image: "/lovable-uploads/25cb8922-dd81-4a4b-8d8b-8597c18a33e7.png",
      creator: "BugHunter",
      likes: 958,
      shares: 376,
      tags: ["programming", "success", "rare"]
    },
    {
      id: 3,
      title: "Me Explaining to My Mom What I Do for Work",
      image: "/lovable-uploads/b7847934-a4fa-4900-848d-b7e00b7d3710.png",
      creator: "TechTalker",
      likes: 843,
      shares: 291,
      tags: ["work", "family", "tech"]
    },
    {
      id: 4,
      title: "The Perfect Meeting That Could Have Been an Email",
      image: "/lovable-uploads/f97eb470-37ac-4d5a-aa93-6f35513c0f9c.png",
      creator: "OfficeLyfe",
      likes: 792,
      shares: 253,
      tags: ["office", "meetings", "corporate"]
    },
    {
      id: 5,
      title: "When You Find the Bug After 3 Hours",
      image: "/lovable-uploads/c469e706-55b3-4d16-bee5-93a800f39094.png",
      creator: "DebugQueen",
      likes: 731,
      shares: 219,
      tags: ["debugging", "programming", "victory"]
    },
    {
      id: 6,
      title: "My Brain at 3am vs Important Meeting",
      image: "/lovable-uploads/a47b5d6c-5e5c-4aaa-9ff9-ceeb54755ecf.png",
      creator: "SleepDeprived",
      likes: 698,
      shares: 201,
      tags: ["relatable", "work", "sleep"]
    },
    {
      id: 7,
      title: "Weekend Plans vs Reality",
      image: "/lovable-uploads/c1af50a6-23ed-481b-bb80-60e10ce92bd9.png",
      creator: "WeekendWarrior",
      likes: 676,
      shares: 187,
      tags: ["weekend", "reality", "funny"]
    },
    {
      id: 8,
      title: "Me Explaining My Career to Relatives at Family Gatherings",
      image: "/lovable-uploads/23010d12-13a9-4827-8202-8943107f71a0.png",
      creator: "FamilyGuy",
      likes: 642,
      shares: 176,
      tags: ["family", "career", "holidays"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center">
            <TrendingUp className="mr-2 h-7 w-7 text-meme-purple" /> Popular Memes
          </h1>
          <Link to="/create">
            <Button className="bg-meme-purple hover:bg-meme-purple/90">Create Your Own</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularMemes.map((meme) => (
            <div 
              key={meme.id} 
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={meme.image} 
                  alt={meme.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-bold mb-2 line-clamp-2">{meme.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">Created by {meme.creator}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {meme.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t">
                  <div className="flex items-center text-sm">
                    <ThumbsUp className="h-4 w-4 mr-1 text-meme-purple" />
                    <span>{meme.likes}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Share2 className="h-4 w-4 mr-1 text-meme-purple" />
                    <span>{meme.shares}</span>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="mx-auto">Load More</Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Popular;
