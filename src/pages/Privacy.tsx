
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 15, 2023</p>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              At GenerateMeme.com, we take your privacy seriously. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our meme generation service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <Separator className="mb-4" />
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Non-Personal Information</h3>
            <p>
              When you visit GenerateMeme.com, we may collect non-personal information about your visit, such as your browser type, operating system, and pages visited. This information is collected through cookies and similar technologies to help us improve our service and user experience.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Images and Content</h3>
            <p>
              When you upload images to create memes, these images are temporarily stored on our servers to provide the meme generation service. We do not claim ownership of any images you upload, and we do not permanently store or use these images for any purpose other than providing you with the requested service.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Log Data</h3>
            <p>
              Like many websites, we collect information that your browser sends whenever you visit our site. This Log Data may include your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, the time spent on those pages, and other statistics. This information is used to analyze trends, administer the site, and gather demographic information.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <Separator className="mb-4" />
            
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our website</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
            <Separator className="mb-4" />
            
            <p>
              Cookies are files with a small amount of data that are stored on your device. We use cookies to collect information to improve our services. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
            <Separator className="mb-4" />
            
            <p>
              We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used. These third parties have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <Separator className="mb-4" />
            
            <p>
              The security of your information is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
            <Separator className="mb-4" />
            
            <p>
              Our service is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <Separator className="mb-4" />
            
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <Separator className="mb-4" />
            
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <a 
                href="mailto:privacy@generatememe.com" 
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                privacy@generatememe.com
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
