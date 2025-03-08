
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  popularTemplate: {
    url: string;
    name: string;
    fallback: string;
  };
}

const Hero = ({ popularTemplate }: HeroProps) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 text-foreground py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Create, Share, <span className="text-accent">Laugh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/90">
              The simplest way to create hilarious memes online. No signup required!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/create">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                  Create a Meme <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/templates">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-blue-400 dark:border-blue-400 w-full sm:w-auto">
                  Browse Templates
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-lg bg-orange-400 opacity-20 animate-bounce-slow"></div>
              <div className="relative overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-xl">
                <img
                  src={popularTemplate.url}
                  alt="Meme example"
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = popularTemplate.fallback;
                    console.log(`Using fallback image: ${popularTemplate.fallback}`);
                  }}
                />
                <div className="absolute top-4 left-0 right-0 text-center">
                  <p className="meme-text" style={{ 
                    fontSize: "28px", 
                    color: "white", 
                    textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000" 
                  }}>
                    WHEN YOU FINALLY FIND
                  </p>
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="meme-text" style={{ 
                    fontSize: "28px", 
                    color: "white", 
                    textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000" 
                  }}>
                    THE PERFECT MEME GENERATOR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
