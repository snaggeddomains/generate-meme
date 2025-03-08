
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: June 1, 2023</p>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>
              At GenerateMeme.com, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              <strong>Information You Provide:</strong> We do not require you to create an account to use our service. 
              We do not collect your name, email address, or other personal information unless you voluntarily provide it to us through contact forms.
            </p>
            <p>
              <strong>Images You Upload:</strong> Any images you upload to create memes are processed on your device. We do not store your uploaded images on our servers permanently.
            </p>
            <p>
              <strong>Automatically Collected Information:</strong> Like most websites, we collect certain information automatically when you visit our site, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referral source</li>
              <li>Length of visit and pages viewed</li>
              <li>Time and date of your visit</li>
            </ul>
            <p>This information helps us understand how visitors use our site and improve the user experience.</p>
            
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our service</li>
              <li>Monitor usage patterns and analyze trends</li>
              <li>Improve our website functionality and user experience</li>
              <li>Prevent and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2>Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              Cookies are files with a small amount of data that may include an anonymous unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
            
            <h2>Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. 
              While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
            
            <h2>Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our service, provide service-related assistance, or assist us in analyzing how our service is used. 
              These third parties have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            
            <h2>Children's Privacy</h2>
            <p>
              Our service is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. 
              If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@generatememe.com" className="text-meme-purple">privacy@generatememe.com</a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
