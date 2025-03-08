
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 15, 2023</p>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using GenerateMeme.com (the "Service") operated by GenerateMeme ("us", "we", or "our").
            </p>
            
            <p className="mt-4">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            
            <p className="mt-4">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Use of the Service</h2>
            <Separator className="mb-4" />
            
            <p>
              GenerateMeme.com provides a platform for creating and downloading memes. You are responsible for your use of the Service and any content you produce using our tools.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Content</h3>
            <p>
              Our Service allows you to create, download, and share content. You understand that you are solely responsible for the content you create and share using our Service.
            </p>
            
            <p className="mt-2">
              When using our Service, you agree not to create or share content that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
              <li>Infringes upon the intellectual property rights of others</li>
              <li>Contains software viruses or any other malicious code</li>
              <li>Constitutes unauthorized advertising or spam</li>
              <li>Is designed to impersonate others or mislead recipients about your identity</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Intellectual Property</h3>
            <p>
              GenerateMeme.com and its original content, features, and functionality are and will remain the exclusive property of GenerateMeme and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            
            <p className="mt-2">
              We do not claim ownership of the content you create using our Service. However, by using our Service, you grant us a license to use, store, and display your content for the purpose of providing and improving the Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
            <Separator className="mb-4" />
            
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>
            
            <p className="mt-2">
              GenerateMeme, its subsidiaries, affiliates, and licensors do not warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The Service will function uninterrupted, secure, or available at any particular time or location</li>
              <li>Any errors or defects will be corrected</li>
              <li>The Service is free of viruses or other harmful components</li>
              <li>The results of using the Service will meet your requirements</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            <Separator className="mb-4" />
            
            <p>
              In no event shall GenerateMeme, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your access to or use of or inability to access or use the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Termination</h2>
            <Separator className="mb-4" />
            
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
            <Separator className="mb-4" />
            
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes</h2>
            <Separator className="mb-4" />
            
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <Separator className="mb-4" />
            
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2">
              <a 
                href="mailto:legal@generatememe.com" 
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                legal@generatememe.com
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
