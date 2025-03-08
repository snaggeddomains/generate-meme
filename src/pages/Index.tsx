import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Smile, Share2, Download, TrendingUp } from "lucide-react";

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
      name: 'Hide The Pain Harold'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section */}
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
                    src="/lovable-uploads/9581f077-87c7-4013-bd4b-72f8abb319a2.png"
                    alt="Meme example"
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 left-0 right-0 text-center">
                    <p className="meme-text" style={{ fontSize: "28px" }}>
                      WHEN YOU FINALLY FIND
                    </p>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="meme-text" style={{ fontSize: "28px" }}>
                      THE PERFECT MEME GENERATOR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Popular Templates Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/30 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Meme Templates</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Jump-start your meme creation with these trending templates
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularTemplates.map((template, index) => (
              <Link 
                key={index} 
                to={`/create?template=${index + 1}`}
                className="block rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <div className="overflow-hidden">
                  <img 
                    src={template.url} 
                    alt={`${template.name} template`}
                    className="w-full h-auto transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-2 text-center text-sm font-medium">
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

      {/* CTA Section */}
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
