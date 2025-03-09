
import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from './ui/Button';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 md:hidden">
      <div className="fixed top-0 right-0 w-3/4 h-full bg-white dark:bg-card p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="p-1">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-col space-y-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground" onClick={onClose}>
            Home
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground" onClick={onClose}>
            About
          </Link>
          {/* Blog link removed */}
          <Link to="/create" className="text-muted-foreground hover:text-foreground" onClick={onClose}>
            Create Meme
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
