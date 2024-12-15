import React, {useEffect} from "react";
import ReactMarkdown from "react-markdown";
import "./Policy.css";

const PrivacyPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const markdown = `
# Privacy Policy  

**Welcome to Kinbo Ekhaney!**  
We value your trust and are dedicated to safeguarding your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our platform.  

## Information We Collect  
To provide you with the best service, we may collect the following types of information:  
- **Personal Information:**  
  - Name, email address, phone number, shipping address, and payment details during purchases.  
- **Usage Information:**  
  - Pages you visit, products you view, IP address, browser type, device identifiers, and session data.  
- **Optional Information:**  
  - Reviews, feedback, or survey responses provided voluntarily.  

## How We Use Your Information  
We use your data responsibly for the following purposes:  
- **Order Fulfillment:**  
  - Processing purchases, verifying payments, and coordinating deliveries.  
- **Customer Support:**  
  - Resolving queries, tracking orders, and providing technical assistance.  
- **Service Improvement:**  
  - Analyzing data to optimize our website and enhance user experience.  
- **Marketing & Promotions:**  
  - Sending newsletters, special offers, and product updates (with your consent).  
- **Compliance:**  
  - Adhering to legal requirements and ensuring platform security.  

## Sharing Your Information  
We respect your privacy and only share your data in the following cases:  
1. **Service Providers:** Trusted third parties assisting with payment processing, shipping, or customer support.  
2. **Legal Compliance:** When required to comply with applicable laws or protect our rights.  
3. **Consent-Based Sharing:** With your explicit permission for specific purposes.  

## Data Retention  
We retain your information only as long as necessary for the purposes outlined in this policy or as required by law.  

## Data Security  
Your data security is our priority. We implement:  
- Secure servers to store sensitive information.  
- Encryption protocols for payment and personal data.  
- Regular audits to identify and address vulnerabilities.  

**Disclaimer:** While we take every precaution, no system is entirely foolproof. Please notify us immediately of any suspected breaches.  

## Your Rights  
You have the following rights regarding your personal data:  
- **Access & Correction:** Request a copy of your data or correct inaccuracies.  
- **Opt-Out:** Unsubscribe from marketing emails or limit data collection.  
- **Deletion:** Request deletion of your personal information, subject to legal obligations.  

## Children's Privacy  
We do not knowingly collect data from children under 13. If we discover such information, we will delete it immediately.  

## Policy Updates  
This policy may be updated periodically to reflect changes in our practices. Significant updates will be communicated via email or website notifications.  

## Contact Us  
For any concerns or queries about our privacy practices, reach out to us:  
- **Email:** contact@kinboekhaney.com  
- **Phone:** 01409327811    

Thank you for trusting **Kinbo Ekhaney** with your data. Your privacy is our commitment!  
  `;

  return (
    <div className="policy-container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default PrivacyPolicy;
