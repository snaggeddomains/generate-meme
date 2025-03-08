
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Evolution of Memes: From Dawkins to Doge",
    excerpt: "Explore how memes have evolved from a scientific concept to a cornerstone of internet culture.",
    date: "June 15, 2023",
    category: "Meme History",
    image: "https://placekitten.com/800/500"
  },
  {
    id: 2,
    title: "10 Classic Meme Templates That Never Go Out of Style",
    excerpt: "Some meme formats stand the test of time. Here are ten templates that continue to deliver laughs year after year.",
    date: "July 22, 2023",
    category: "Templates",
    image: "https://placekitten.com/801/500"
  },
  {
    id: 3,
    title: "How Memes Became a Modern Language for Gen Z",
    excerpt: "Discover how younger generations use memes as a sophisticated form of communication and social commentary.",
    date: "August 3, 2023",
    category: "Culture",
    image: "https://placekitten.com/802/500"
  },
  {
    id: 4,
    title: "The Psychology Behind Viral Memes: Why We Share",
    excerpt: "What makes certain memes spread like wildfire? We dive into the psychology that drives meme virality.",
    date: "September 17, 2023",
    category: "Analysis",
    image: "https://placekitten.com/803/500"
  },
  {
    id: 5,
    title: "From Reddit to Instagram: How Memes Travel Across Platforms",
    excerpt: "Follow the journey of memes as they make their way across different social media ecosystems.",
    date: "October 5, 2023",
    category: "Social Media",
    image: "https://placekitten.com/804/500"
  },
  {
    id: 6,
    title: "Memes as Marketing: How Brands Use Humor to Connect",
    excerpt: "Businesses are increasingly using memes to engage with audiences. Here's how they're doing it successfully.",
    date: "November 12, 2023",
    category: "Marketing",
    image: "https://placekitten.com/805/500"
  }
];

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Meme Blog</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Insights, guides, and humor from the world of memes
          </p>
          
          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="overflow-hidden h-64 md:h-auto">
                  <img 
                    src="https://placekitten.com/900/600" 
                    alt="Meme culture impact" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="uppercase text-xs font-semibold text-meme-purple tracking-wide mb-2">
                    Featured Article
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    How Memes Are Shaping Modern Communication
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    In an age of information overload, memes have emerged as a surprisingly efficient form 
                    of communication, packing complex ideas and emotions into simple, shareable formats.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">December 1, 2023</p>
                  <Link to="/blog/memes-modern-communication" className="text-meme-purple font-medium hover:underline">
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Blog Post Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {BLOG_POSTS.map(post => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                <div className="overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-muted-foreground">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to={`/blog/${post.id}`} className="text-meme-purple text-sm font-medium hover:underline">
                    Read More →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <Card className="bg-gradient-purple text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Stay Updated on Meme Trends</CardTitle>
              <CardDescription className="text-white/80">
                Subscribe to our newsletter for the latest meme templates, trends, and tips.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-2 rounded-md text-foreground"
                />
                <button 
                  type="submit" 
                  className="bg-white text-meme-purple px-4 py-2 rounded-md font-medium hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
