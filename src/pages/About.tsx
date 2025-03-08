
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About GenerateMeme.com</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground mb-6">
              Welcome to GenerateMeme.com - your go-to destination for creating hilarious, 
              shareable memes in seconds without any complicated tools or sign-ups.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
            <p>
              GenerateMeme.com was born from a simple idea: meme creation should be fun, fast, 
              and accessible to everyone. We wanted to build a tool that removes all the 
              barriers to creativity and lets people focus on what matters - crafting the 
              perfect meme to make friends laugh or to participate in the latest internet trend.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">What Makes Us Different</h2>
            <p>
              Unlike other meme generators that require account creation or limit functionality 
              behind paywalls, GenerateMeme.com is completely free to use. We believe in 
              providing a seamless experience with no watermarks, no account requirements, 
              and no limitations on what you can create.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p>
              Our mission is to empower internet users of all skill levels to express themselves 
              through memes. Whether you're a seasoned meme creator or just getting started, 
              our intuitive tools make it easy to bring your ideas to life.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Features That Make Meme Creation Easy</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Intuitive Editor:</strong> Our drag-and-drop interface makes positioning text and images simple.</li>
              <li><strong>Template Library:</strong> Access hundreds of popular meme templates, updated regularly with trending formats.</li>
              <li><strong>Custom Uploads:</strong> Use your own images to create truly unique memes.</li>
              <li><strong>Text Customization:</strong> Change font size, position, and style to get your meme just right.</li>
              <li><strong>Instant Downloads:</strong> Save your creations directly to your device in high quality.</li>
              <li><strong>No Watermarks:</strong> Your memes are yours - we don't add any branding or watermarks.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Get Started Today</h2>
            <p>
              Ready to create your first meme? It's as easy as selecting a template (or uploading your own image), 
              adding your text, and downloading your creation. No account needed - just pure creativity.
            </p>
            
            <div className="mt-8 mb-10">
              <Link to="/create">
                <Button className="bg-meme-purple hover:bg-meme-purple/90">
                  Create Your First Meme <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Questions or Feedback?</h2>
            <p>
              We're always looking to improve GenerateMeme.com and would love to hear from you. 
              If you have suggestions, feature requests, or just want to share a meme you created 
              using our tools, please don't hesitate to reach out to us at contact@generatememe.com.
            </p>
            
            <p className="mt-6">
              Thank you for choosing GenerateMeme.com for your meme creation needs. Now go forth and create!
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
