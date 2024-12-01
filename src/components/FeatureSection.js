import React from "react";
import "./FeatureSection.css";

const features = [
  { 
    number: "01", 
    title: "Order Online", 
    subtitle: "Experience seamless online ordering with easy navigation and quick processing, tailored for your convenience." 
  },
  { 
    number: "02", 
    title: "Cash on Delivery", 
    subtitle: "Enjoy complimentary cash on delivery on all orders, delivered directly to your doorstep with care." 
  },
  { 
    number: "03", 
    title: "More Freshness", 
    subtitle: "We prioritize freshness with every delivery, ensuring high-quality products every time." 
  },
  { 
    number: "04", 
    title: "Safe Payment", 
    subtitle: "Secure and trusted payment options give you peace of mind with every transaction." 
  },
];

const FeatureSection = () => {
  return (
    <div className="feature-section">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <div className="divider"></div>
          <div>
            <span className="number">{feature.number}</span>
            <h3 className="title">{feature.title}</h3>
            <p className="subtitle">{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
