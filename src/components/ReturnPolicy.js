import React, {useEffect} from "react";
import ReactMarkdown from "react-markdown";
import "./Policy.css";

const ReturnPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const markdown = `
# Return & Refund Policy  

**Your satisfaction is our priority.**  
At **Kinbo Ekhaney**, we strive to ensure that our customers have the best shopping experience. If you're not satisfied with your purchase, our return and refund policy makes it easy to resolve issues.

## Valid Reasons to Return  
We accept returns under the following conditions:  
- **Damaged or Defective Items:** If the product is damaged, physically broken, or not functioning as expected.  
- **Incorrect or Incomplete Items:** If the delivered product does not match the order specifications or is incomplete.  
- **Size Issues:** If the product size differs from what was ordered.  

## Conditions for Returns  
To be eligible for a return, the following conditions must be met:  
1. The product must be **unused**, **unworn**, and **unwashed**.  
2. All original tags, user manuals, warranty cards, freebies, and accessories must be included.  
3. The product must be returned in its original, undamaged packaging.  
4. Return requests must be made within **48 hours** of delivery.  

## Non-Eligible Returns  
We cannot accept returns for:  
- Products where the customer has changed their mind after use.  
- Items that no longer have original packaging or tags.  
- Custom or special orders.  

## Refund Process  
We aim to make refunds seamless and hassle-free:  
- **Processing Time:** Refunds will be processed within **7 working days** after receiving the returned item.  
- **Quality Control:** Returned products undergo a 1-2 day quality check to ensure compliance with return conditions.  
- **Refund Method:** Refunds will be issued via exchange courier or the payment method used for the purchase.  

**Note:** Delays may occur due to transportation or other unforeseen circumstances.  

## Exchange Policy  
If you prefer an exchange over a refund:  
- You may request a replacement for size or color issues.  
- Delivery charges may apply for exchanges unless the issue is due to our error.  

## How to Initiate a Return  
1. Contact our customer support team at **support@kinboekhaney.com** or call **01845117624**.  
2. Provide your order ID, details of the product, and reason for the return.  
3. Follow the instructions provided by our team for packaging and return shipping.  

## Important Notes  
- For **inside Chattogram deliveries**, products must be inspected during delivery. Any issues must be reported immediately.  
- For **outside Chattogram deliveries**, returns must be initiated within 48 hours of delivery.  

**Contact Us**  
For any concerns or queries about our return and refund policies, please feel free to reach out:  
- **Email:** support@kinboekhaney.com  
- **Phone:** 01845117624 

Thank you for trusting **Kinbo Ekhaney** for your shopping needs!  
  `;

  return (
    <div className="policy-container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default ReturnPolicy;
