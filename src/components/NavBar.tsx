
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b py-3 px-4 sm:px-6 bg-white dark:bg-card shadow-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-meme-purple to-meme-pink text-transparent bg-clip-text">
            GenerateMeme.com
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/create">
            <Button variant="default" className="bg-meme-purple hover:bg-meme-purple/90">
              Create Meme
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link to="/blog">
            <Button variant="ghost">Blog</Button>
          </Link>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <Link to="/create" className="mr-2">
            <Button variant="default" size="sm" className="bg-meme-purple hover:bg-meme-purple/90">
              Create
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 z-50 mt-3 bg-white dark:bg-card shadow-md border-t">
          <div className="container py-3 flex flex-col space-y-2">
            <Link to="/create" className="px-4 py-2 hover:bg-muted rounded-md">
              Create Meme
            </Link>
            <Link to="/about" className="px-4 py-2 hover:bg-muted rounded-md">
              About
            </Link>
            <Link to="/blog" className="px-4 py-2 hover:bg-muted rounded-md">
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
