import React from "react";
import "./FeatureSection.css";

const features = [
  { number: "01", title: "Order Online", subtitle: "Share some details here. This is a flexible section where you can share anything you want." },
  { number: "02", title: "Free Shipping", subtitle: "Share some details here. This is a flexible section where you can share anything you want." },
  { number: "03", title: "More Freshness", subtitle: "Share some details here. This is a flexible section where you can share anything you want." },
  { number: "04", title: "Safe Payment", subtitle: "Share some details here. This is a flexible section where you can share anything you want." },
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
