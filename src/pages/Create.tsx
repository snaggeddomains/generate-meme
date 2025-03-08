
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MemeEditor from "@/components/MemeEditor";
import { useEffect } from "react";
import { toast } from "sonner";

const Create = () => {
  useEffect(() => {
    // You could add a check here to validate templates if needed
    toast.info("Ready to create your meme!", { duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Create Your Meme</h1>
        <MemeEditor />
      </main>
      
      <Footer />
    </div>
  );
};

export default Create;
