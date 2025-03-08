
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="border-b py-3 px-4 sm:px-6 bg-white dark:bg-card shadow-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-meme-purple to-meme-pink text-transparent bg-clip-text">
            GenerateMeme.com
          </span>
        </Link>
        <div className="flex items-center space-x-4">
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
      </div>
    </nav>
  );
};

export default NavBar;
