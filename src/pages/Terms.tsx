
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last Updated: June 1, 2023</p>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>
              Welcome to GenerateMeme.com. Please read these Terms of Service ("Terms") carefully before using our website.
              By accessing or using GenerateMeme.com, you agree to be bound by these Terms.
            </p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the Terms, 
              you may not access the service.
            </p>
            
            <h2>2. Description of Service</h2>
            <p>
              GenerateMeme.com provides an online platform for creating, customizing, and downloading memes. 
              We offer pre-designed templates and the ability to upload your own images to create custom memes.
            </p>
            
            <h2>3. User Conduct</h2>
            <p>You agree not to use our service to:</p>
            <ul>
              <li>Violate any laws or regulations</li>
              <li>Infringe upon the rights of others, including copyright, trademark, privacy, or other personal or proprietary rights</li>
              <li>Create or distribute content that is harmful, abusive, racially or ethnically offensive, vulgar, sexually explicit, defamatory, or otherwise objectionable</li>
              <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
              <li>Interfere with or disrupt the service or servers or networks connected to the service</li>
              <li>Collect or store personal data about other users without their consent</li>
            </ul>
            
            <h2>4. Intellectual Property</h2>
            <p>
              GenerateMeme.com and its original content, features, and functionality are owned by GenerateMeme.com and are protected by 
              international copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              The meme templates provided on our service may be subject to copyright protection. While we provide these templates for use 
              within our service, we do not claim ownership of them. The use of these templates for commercial purposes may require 
              permission from the original copyright holders.
            </p>
            
            <h2>5. User Content</h2>
            <p>
              You retain ownership of any images you upload to our service. By uploading content, you grant us a non-exclusive, 
              worldwide, royalty-free license to use, store, and process that content solely for the purpose of providing our service to you.
            </p>
            <p>
              You are solely responsible for the content you create and share using our service. You represent and warrant that you have all 
              necessary rights to the content you upload and that the use of such content does not violate these Terms or any applicable laws.
            </p>
            
            <h2>6. Disclaimer of Warranties</h2>
            <p>
              Our service is provided "as is" and "as available" without any warranties of any kind, either express or implied. 
              We do not guarantee that the service will be uninterrupted, timely, secure, or error-free.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall GenerateMeme.com, its directors, employees, partners, agents, suppliers, or affiliates be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, 
              goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
            
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' 
              notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br />
              <a href="mailto:terms@generatememe.com" className="text-meme-purple">terms@generatememe.com</a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
