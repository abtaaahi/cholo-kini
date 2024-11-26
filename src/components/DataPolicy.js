import React, {useEffect} from "react";
import ReactMarkdown from "react-markdown";
import "./Policy.css";

const DataPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const markdown = `  
# Data & Individual Information Policy  

**Your trust is important to us.**  
At **Cholo Kini**, we are committed to maintaining the privacy and integrity of your personal data. This policy outlines how we collect, use, store, and protect your information.

## Data We Collect  
To provide you with the best shopping experience, we may collect the following information:  
- **Personal Information:** Name, mobile number, email address, shipping address, and other necessary details to fulfill your orders.  
- **Transaction Details:** Information related to your purchases, such as payment methods and billing details.  
- **Browsing Data:** Your interactions with our website, including visited pages, viewed products, and preferences.  
- **Technical Information:** Device identifiers, IP addresses, and browser types to improve site performance.  

## How We Use Your Data  
Your data helps us deliver personalized and efficient services. Specifically, we use your data for:  
- **Order Processing:** Ensuring your orders are processed, packaged, and delivered seamlessly.  
- **Customer Support:** Responding to your inquiries, resolving issues, and providing updates.  
- **Promotions and Offers:** Sending marketing emails and promotional materials tailored to your interests (with your consent).  
- **Improvement and Analytics:** Enhancing website functionality and understanding user preferences.  

## Data Storage and Security  
We implement robust security measures to safeguard your personal data, including encryption and secure servers. However, no system is entirely foolproof. While we strive to protect your data, we encourage safe internet practices.

## Data Sharing Policy  
We value your privacy and limit sharing your data to trusted third parties, including:  
- **Service Providers:** Payment processors, delivery partners, and IT service providers who assist in operations.  
- **Legal Compliance:** Authorities, when required by law or for protecting our rights.  

We **do not sell your data** to third parties.  

## Your Rights  
As a user, you have the following rights regarding your personal data:  
- **Access and Update:** Review and update your personal details at any time.  
- **Data Deletion:** Request removal of your data from our systems, subject to legal obligations.  
- **Opt-Out of Marketing:** Unsubscribe from promotional communications through provided links.  

## Disclaimer  
We reserve the right to update this policy to reflect changes in our practices or for legal compliance. Updated policies will be posted on our website, and significant changes will be communicated.  

**Contact Us:**  
For any queries or concerns about this policy or your personal data, please reach out to us at:  
- **Email:** support@cholokini.com  
- **Phone:** 01845117624 

Thank you for trusting Cholo Kini!  
  `;

  return (
    <div className="policy-container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default DataPolicy;
