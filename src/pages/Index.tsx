import { useEffect, useState } from "react";
import { Smile, Share2, Download, TrendingUp } from "lucide-react";
import { toast } from "sonner";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import TemplatesSection from "@/components/home/TemplatesSection";
import CallToAction from "@/components/home/CallToAction";
import { extractGoogleDriveFolderContents } from "@/components/home/DriveUtils";

const Index = () => {
  const [popularTemplates, setPopularTemplates] = useState([
    {
      url: '/lovable-uploads/e6ba6807-fcd5-44bb-8943-06408a69c18f.png',
      name: 'Highway Exit Meme',
      fallback: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      url: '/lovable-uploads/02d162d5-0051-4e01-9453-f84dac7b779b.png',
      name: 'Roll Safe Meme',
      fallback: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    },
    {
      url: '/lovable-uploads/98151edf-a71a-498e-bead-59b67030ea29.png',
      name: 'Blinking Guy Meme',
      fallback: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    },
    {
      url: '/lovable-uploads/90de871d-b892-4cc1-a2ef-45cb71a5af6d.png',
      name: 'Change My Mind',
      fallback: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    }
  ]);

  useEffect(() => {
    const fetchTemplateContents = async () => {
      const templateContents = await extractGoogleDriveFolderContents();
      
      if (templateContents.length > 0) {
        const localTemplates = templateContents.map(item => ({
          url: item.url || `/lovable-uploads/${item.id}.png`,
          name: item.name,
          fallback: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
        }));
        
        if (localTemplates.length === 0) {
          toast.error("Failed to load template images, using defaults");
        }
      }
    };
    
    fetchTemplateContents();
  }, []);

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

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <Hero popularTemplate={popularTemplates[0]} />
      <FeaturesSection features={features} />
      <TemplatesSection templates={popularTemplates} />
      <CallToAction />
      
      <Footer />
    </div>
  );
};

export default Index;
