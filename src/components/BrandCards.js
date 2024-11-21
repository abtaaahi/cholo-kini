import React from "react";
import "./BrandCards.css";

const BrandCards = () => {
  const logos = [
    "https://res.cloudinary.com/dasqmi9fl/image/upload/v1732084954/pngwing.com_10_ff91nr.png",
    "https://res.cloudinary.com/dasqmi9fl/image/upload/v1732084953/pngwing.com_4_dlpara.png",
    "https://res.cloudinary.com/dasqmi9fl/image/upload/v1732084954/pngwing.com_brwifq.png",
    "https://res.cloudinary.com/dasqmi9fl/image/upload/v1732084954/pngwing.com_1_xxbsbv.png",
    "https://res.cloudinary.com/dasqmi9fl/image/upload/v1732084954/pngwing.com_2_xsnw1y.png",
    "https://res.cloudinary.com/dasqmi9fl/image/upload/v1732084953/pngwing.com_3_yr13gh.png",
    "https://res.cloudinary.com/dasqmi9fl/image/upload/v1732084915/pngwing.com_5_wdxhdf.png",
    "https://res.cloudinary.com/dasqmi9fl/image/upload/v1732084887/pngwing.com_7_hqqdka.png",
    "https://res.cloudinary.com/dasqmi9fl/image/upload/v1732084883/pngwing.com_8_rxixdc.png",
    "https://res.cloudinary.com/dasqmi9fl/image/upload/v1732084883/pngwing.com_6_ixuyxj.png",
    "https://res.cloudinary.com/dasqmi9fl/image/upload/v1732084882/pngwing.com_9_zkst7u.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_QbP-LEvxTpi-oLm55dde_J7wIJ6b4X_eQ&s"
  ];

  return (
    <div className="brand-cards-container">
      <div className="brand-cards-header">
        <h1 className="brand-cards-title">Top Electronics Brands</h1>
        <p className="brand-cards-subtitle">Our trusted partners in innovation</p>
      </div>

      <div className="brand-cards-grid">
        {logos.map((logo, index) => (
          <div key={index} className="brand-card">
            <img src={logo} alt="Brand Logo" className="brand-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCards;