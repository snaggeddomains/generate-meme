
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import MobileMenu from './MobileMenu';

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b py-3 px-4 sm:px-6 bg-white dark:bg-card shadow-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-meme-purple to-meme-pink text-transparent bg-clip-text truncate max-w-[180px] sm:max-w-none">
            GenerateMeme.com
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
            {/* Blog link removed */}
          </div>
          <Link to="/create">
            <Button className="bg-meme-purple hover:bg-meme-purple/90">
              CREATE MEME
            </Button>
          </Link>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <Link to="/create" className="mr-2">
            <Button 
              variant="default" 
              size="sm" 
              className="bg-meme-purple hover:bg-meme-purple/90 px-2 py-1 h-8 text-xs"
            >
              Create
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 h-8 w-8"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </nav>
  );
};

export default NavBar;
