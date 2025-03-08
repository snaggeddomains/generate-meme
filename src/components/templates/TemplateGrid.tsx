
import { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { successfullyLoadedImages } from "@/components/home/DriveUtils";

interface TemplateGridProps {
  templates: Array<{
    url: string;
    name: string;
    fallback: string;
  }>;
}

const TemplateGrid = ({ templates }: TemplateGridProps) => {
  const [filteredTemplates, setFilteredTemplates] = useState(templates);

  useEffect(() => {
    // Initially show all, then filter after a brief delay
    const timer = setTimeout(() => {
      const loaded = templates.filter(template => 
        successfullyLoadedImages.has(template.url)
      );
      if (loaded.length > 0) {
        // Only take the top 11 templates that have successfully loaded
        setFilteredTemplates(loaded.slice(0, 11));
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [templates]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTemplates.map((template, index) => (
          <TemplateCard key={index} template={template} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/create">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Create a New Meme
          </Button>
        </Link>
      </div>
    </>
  );
};

export default TemplateGrid;
