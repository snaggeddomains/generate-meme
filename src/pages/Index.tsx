
import { useEffect, useState } from "react";
import { Smile, Share2, Download, TrendingUp } from "lucide-react";
import { toast } from "sonner";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import TemplatesSection from "@/components/home/TemplatesSection";
import CallToAction from "@/components/home/CallToAction";
import { convertGoogleDriveUrl, extractGoogleDriveFolderContents } from "@/components/home/DriveUtils";

const Index = () => {
  const [popularTemplates, setPopularTemplates] = useState([
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
  ]);

  useEffect(() => {
    const fetchDriveFolderContents = async () => {
      const folderContents = await extractGoogleDriveFolderContents();
      
      if (folderContents.length > 0) {
        const driveTemplates = folderContents.map(item => ({
          url: `https://drive.google.com/uc?export=view&id=${item.id}`,
          name: item.name,
          fallback: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
        }));
        
        setPopularTemplates(driveTemplates);
      }
    };
    
    fetchDriveFolderContents();
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
