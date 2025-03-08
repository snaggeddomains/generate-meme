
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Calendar, User, Tag } from "lucide-react";

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: React.ReactNode;
  tags: string[];
  relatedPosts: {
    title: string;
    slug: string;
    image: string;
  }[];
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  date,
  author,
  category,
  image,
  content,
  tags,
  relatedPosts
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-10">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-meme-purple mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">{title}</h1>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-1 h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-1 h-4 w-4" />
              <span>{category}</span>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden mb-8">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
            {content}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag, index) => (
              <Link 
                key={index} 
                to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
          
          <div className="border-t pt-6 mb-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Share This Post</h2>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {relatedPosts.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) => (
                  <Link key={index} to={`/blog/${post.slug}`} className="group">
                    <div className="rounded-lg overflow-hidden mb-3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold group-hover:text-meme-purple transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
