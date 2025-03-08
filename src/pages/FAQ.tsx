
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I create a meme?",
      answer: "Creating a meme is easy! Just select a template from our gallery or upload your own image. Then add your text, adjust the font size and color, and position it where you want. When you're happy with your creation, click the download button to save your meme."
    },
    {
      question: "Is this service completely free?",
      answer: "Yes! GenerateMeme.com is 100% free to use with no hidden fees or watermarks. You can create and download as many memes as you want without paying anything."
    },
    {
      question: "Can I upload my own images to create memes?",
      answer: "Absolutely! You can upload your own images to create custom memes. Simply click on the 'Upload Image' button in the editor and select the image from your device."
    },
    {
      question: "What image formats can I download my memes in?",
      answer: "Currently, all memes are downloaded as PNG files, which ensures good quality while maintaining reasonable file sizes."
    },
    {
      question: "Can I add more than two text fields to my meme?",
      answer: "Yes! You can add as many text fields as you want by clicking the 'Add Text' button in the editor. Each text field can be customized individually with different fonts, sizes, and colors."
    },
    {
      question: "Are there any restrictions on what kind of memes I can create?",
      answer: "While we encourage creativity, we do ask users to refrain from creating content that is hateful, discriminatory, or violates copyright laws. Please refer to our Terms of Service for more details."
    },
    {
      question: "Do I need to create an account to use GenerateMeme.com?",
      answer: "No account is required! You can start creating memes immediately without signing up or logging in."
    },
    {
      question: "How can I share my meme on social media?",
      answer: "After downloading your meme, you can share it on any social media platform by uploading the saved image file directly to that platform."
    },
    {
      question: "My meme isn't downloading. What should I do?",
      answer: "If you're having trouble downloading your meme, try using a different browser or check your browser's download settings. If the problem persists, please contact us for assistance."
    },
    {
      question: "Can I edit a meme after I've created it?",
      answer: "Currently, we don't have a feature to save your work for later editing. We recommend keeping the meme open in your browser until you're completely satisfied with your creation before downloading it."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Find answers to the most common questions about using GenerateMeme.com
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
            <p className="text-muted-foreground mb-4">
              If you couldn't find the answer you were looking for, feel free to contact us.
            </p>
            <a 
              href="mailto:support@generatememe.com" 
              className="text-blue-600 hover:underline dark:text-blue-400"
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
