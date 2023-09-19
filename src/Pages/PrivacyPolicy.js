import React from 'react';
import Navbar from '../Components/navbar/NavBar';
import Footer from '../Components/footer/Footer';
import './pagescss/pravicy.css';

const PrivacyPolicy = () => {
  const privacyPolicyData = {
    "title": "Privacy Policy",
    "sections": [
      {
        "title": "Website Terms and Conditions of Use",
        "content": "Welcome to Intersect Info Developers. By accessing and using our website, you agree to comply with the terms and conditions outlined in this Privacy Policy. If you do not agree with these terms, please refrain from using our services."
      },
      {
        "title": "Information Collection and Use",
        "content": "We collect and utilize various types of information to improve our services and provide a better user experience. This may include personal information such as names, email addresses, and contact information, which is collected with your consent for specific purposes."
      },
      {
        "title": "Log Data",
        "content": "We gather information that your browser sends whenever you visit our website. This Log Data may include information such as your computer's Internet Protocol ('IP') address, browser version, pages visited, time and date of your visit, and other statistics."
      },
      {
        "title": "International Data Transfers",
        "content": "Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those of your jurisdiction. By using our services, you consent to the transfer of this information."
      },
      {
        "title": "Cookies",
        "content": "We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us improve functionality and tailor your experience. You can disable cookies through your browser settings, but this may affect certain features of our website."
      },
      {
        "title":"Service Providers",
        "content":"We may employ third-party companies and individuals to facilitate our services ('Service Providers'), to provide services on our behalf, and to assist in analyzing how our services are used. These third parties may have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."
      },
      {
        "title":"Security",
        "content":"We prioritize the security of your personal information and implement appropriate measures to protect it. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure and we cannot guarantee its absolute security."
      },
      ,
      {
        "title":"Links to Other Sites",
        "content":"Our website may contain links to other sites. Please note that we do not control and are not responsible for the content or practices of these external sites. We encourage you to read their privacy policies before engaging with them."
      },
      {
        "title":"Changes to This Privacy Policy",
        "content":"We reserve the right to update our Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be noted at the top of the policy. Your continued use of our services after such changes will constitute your acknowledgement of the modified policy."
      },
      {
        "title":"Data Retention Period and Other Information Concerning Data Processing",
        "content":"We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required by law."
      },
    
      {
        "title": "Contact Us",
        "content": "If you have any questions or concerns about our Privacy Policy or the way your information is being handled, please don't hesitate to contact us at [contact email/phone number]. We value your privacy and will do our best to address any issues promptly."
      }
    ]
  };

  return (
    <section>
        <Navbar/>
        <div className="privacy-policy-container">
      <h1 className="timeline-title">{privacyPolicyData.title}</h1>
      {privacyPolicyData.sections.map((section, index) => (
        <div key={index} className="policy-section">
          <h3 className="section-title">{section.title}</h3>
          <p className="section-content">{section.content}</p>
        </div>
      ))}
    </div>
    <Footer/>
    </section>
  );
};

export default PrivacyPolicy;