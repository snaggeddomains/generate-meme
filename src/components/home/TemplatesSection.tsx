
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TemplatesSectionProps {
  templates: Array<{
    url: string;
    name: string;
    fallback: string;
  }>;
}

const TemplatesSection = ({ templates }: TemplatesSectionProps) => {
  return (
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
          {templates.map((template, index) => (
            <Link 
              key={index} 
              to={`/create?template=${encodeURIComponent(template.url)}`}
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
  );
};

export default TemplatesSection;
