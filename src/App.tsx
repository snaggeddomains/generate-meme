
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Create from "./pages/Create";
import Templates from "./pages/Templates";
import About from "./pages/About";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Blog Posts
import MemeHistory from "./pages/BlogPosts/MemeHistory";
import ClassicTemplates from "./pages/BlogPosts/ClassicTemplates";
import MemesGenZ from "./pages/BlogPosts/MemesGenZ";
import PsychologyMemes from "./pages/BlogPosts/PsychologyMemes";
import MemeMarketing from "./pages/BlogPosts/MemeMarketing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create" element={<Create />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Blog post routes */}
          <Route path="/blog/memes-history" element={<MemeHistory />} />
          <Route path="/blog/classic-templates" element={<ClassicTemplates />} />
          <Route path="/blog/memes-gen-z" element={<MemesGenZ />} />
          <Route path="/blog/psychology-memes" element={<PsychologyMemes />} />
          <Route path="/blog/meme-marketing" element={<MemeMarketing />} />
          <Route path="/blog/memes-modern-communication" element={<PsychologyMemes />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
