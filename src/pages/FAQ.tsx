
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is GenerateMeme.com?",
      answer: "GenerateMeme.com is a free online platform that allows you to create, customize, and share memes quickly and easily. No signup or account creation is required to start creating memes."
    },
    {
      question: "Is GenerateMeme.com completely free to use?",
      answer: "Yes! GenerateMeme.com is 100% free to use. You can create and download as many memes as you want without paying anything. We don't add watermarks to your creations, and we don't limit how many memes you can download."
    },
    {
      question: "Can I use the memes I create for commercial purposes?",
      answer: "While our meme generator is free to use, please be aware that many popular meme templates may be subject to copyright restrictions. If you plan to use memes for commercial purposes, we recommend either using your own images or getting proper permission from the original copyright holders."
    },
    {
      question: "How do I create a meme?",
      answer: "Creating a meme is simple: 1) Choose a template from our gallery or upload your own image, 2) Add your custom text, 3) Customize the font, size, and position of your text, 4) Download your finished meme. It takes just seconds to create something shareable!"
    },
    {
      question: "What file format are the downloaded memes?",
      answer: "All memes are downloaded as PNG image files, which maintain good quality while keeping file sizes reasonable. This format is widely supported and can be easily shared on social media platforms."
    },
    {
      question: "Can I upload my own images to make custom memes?",
      answer: "Absolutely! You can upload your own images in JPG, PNG, or GIF format to create completely custom memes. Just click on the 'Upload Image' button in the meme editor."
    },
    {
      question: "Is there a limit to how many memes I can create?",
      answer: "No, there's no limit to how many memes you can create or download using our generator. Create to your heart's content!"
    },
    {
      question: "Do I need to create an account to use GenerateMeme.com?",
      answer: "No account or registration is needed to create and download memes. You can start creating immediately without signing up."
    },
    {
      question: "Can I edit a meme after I've created it?",
      answer: "Currently, we don't have a save feature, so you can't edit memes after closing your browser. We recommend keeping your browser tab open until you're completely satisfied with your meme before downloading it."
    },
    {
      question: "How can I share my meme on social media?",
      answer: "After creating your meme, download it to your device, then upload it directly to your preferred social media platform. This gives you the most control over how and where your creation is shared."
    },
    {
      question: "Which social media platforms are best for sharing memes?",
      answer: "Memes perform well on most social platforms, including Instagram, Twitter, Facebook, Reddit, and TikTok. Different platforms might have different optimal image dimensions, so consider where you plan to share when creating your meme."
    },
    {
      question: "What's the ideal size for a meme?",
      answer: "While memes come in all shapes and sizes, square formats (1:1 ratio) tend to work well across most platforms. For Instagram, 1080x1080 pixels is optimal. For Twitter, images up to 1200x675 pixels display well in feeds."
    },
    {
      question: "My meme looks blurry after downloading. How can I fix this?",
      answer: "If your meme appears blurry, try using a larger, higher-resolution base image. The quality of your output depends largely on the quality of the original image you're working with."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground mb-10 text-center">
            Everything you need to know about using GenerateMeme.com
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
            <p className="mb-4 text-muted-foreground">
              We're here to help! Reach out to our support team for assistance.
            </p>
            <a 
              href="mailto:support@generatememe.com" 
              className="text-meme-purple hover:underline font-medium"
            >
              support@generatememe.com
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
