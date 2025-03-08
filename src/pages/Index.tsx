import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Smile, Share2, Download, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const convertGoogleDriveUrl = (url: string) => {
  const fileIdMatch = url.match(/\/d\/(.*?)\/view/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
  }
  return url;
};

const Index = () => {
  const features = [
    {
      icon: <Smile className="h-10 w-10 text-primary mb-2" />,
      title: "Easy to Use",
      description: "Create hilarious memes in seconds with our intuitive editor"
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary mb-2" />,
      title: "Share Anywhere",
      description: "Download your memes and share them on any social platform"
    },
    {
      icon: <Download className="h-10 w-10 text-primary mb-2" />,
      title: "Free Downloads",
      description: "No watermarks, no limits - download all your creations for free"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary mb-2" />,
      title: "Stay Trending",
      description: "Access the latest meme templates and stay ahead of trends"
    }
  ];

  const popularTemplates = [
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
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

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
                    src={popularTemplates[0].url}
                    alt="Meme example"
                    className="w-full h-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = popularTemplates[0].fallback;
                      console.log(`Using fallback image: ${popularTemplates[0].fallback}`);
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

      <section className="py-16 bg-white dark:bg-background">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose GenerateMeme.com?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Create memorable memes in seconds with these powerful features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-800/30 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Meme Templates</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Jump-start your meme creation with these trending templates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularTemplates.map((template, index) => (
              <Link 
                key={index} 
                to={`/create?template=${encodeURIComponent(template.fallback || template.url)}`}
                className="block rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <div className="overflow-hidden aspect-video">
                  <img 
                    src={template.url} 
                    alt={`${template.name} template`}
                    className="w-full h-full object-contain transition-transform hover:scale-105 duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = template.fallback;
                      console.log(`Using fallback image for ${template.name}: ${template.fallback}`);
                    }}
                  />
                </div>
                <div className="p-3 text-center font-medium">
                  {template.name}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/templates">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20">
                View All Templates <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing Memes?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              No signup, no fuss. Start creating and sharing your memes right away.
            </p>
            <Link to="/create">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Create Your First Meme <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
