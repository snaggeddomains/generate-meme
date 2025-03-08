
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-8 px-4 sm:px-6 bg-white dark:bg-card mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">GenerateMeme.com</h3>
            <p className="text-muted-foreground text-sm">
              The easy way to create, customize, and share your favorite memes online.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/create" className="hover:text-meme-purple transition-colors">Create Meme</Link></li>
              <li><Link to="/templates" className="hover:text-meme-purple transition-colors">Templates</Link></li>
              <li><Link to="/popular" className="hover:text-meme-purple transition-colors">Popular Memes</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-meme-purple transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-meme-purple transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-meme-purple transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-meme-purple transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GenerateMeme.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
