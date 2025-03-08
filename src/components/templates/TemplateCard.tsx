
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { markImageAsLoaded } from "@/components/home/DriveUtils";

interface TemplateCardProps {
  template: {
    url: string;
    name: string;
    fallback: string;
  };
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  return (
    <Link 
      to={`/create?template=${encodeURIComponent(template.url)}`}
      className="block rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={template.url} 
          alt={`${template.name} template`}
          className="w-full h-full object-contain transition-transform hover:scale-105 duration-300"
          onLoad={() => markImageAsLoaded(template.url)}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = template.fallback;
            console.log(`Using fallback image for ${template.name}: ${template.fallback}`);
            toast.error(`Failed to load ${template.name} image, using fallback`);
          }}
        />
      </div>
    </Link>
  );
};

export default TemplateCard;
