
import TemplateCard from "./TemplateCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface TemplateGridProps {
  templates: Array<{
    url: string;
    name: string;
    fallback: string;
  }>;
}

const TemplateGrid = ({ templates }: TemplateGridProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, index) => (
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
