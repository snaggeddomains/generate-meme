
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

interface FeaturesSectionProps {
  features: Array<{
    icon: ReactNode;
    title: string;
    description: string;
  }>;
}

const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  return (
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
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
