
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
