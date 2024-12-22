import React, { useEffect } from "react";
import { electronicsProducts } from "../data/products";
import ProductCards from "./ProductCards";
import BrandCards from "./BrandCards";
import "./Electronics.css";

const Electronics = () => {
  const electronicsLogos = [
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="electronics-container">
      <ProductCards
        products={electronicsProducts}
        sectionSubtitle="Latest Items"
        sectionMainTitle="Our Electronics Collections"
      />
      <BrandCards
        logos={electronicsLogos}
        title="Top Electronics Brands"
        subtitle="Our trusted partners in innovation"
      />
    </div>
  );
};

export default Electronics;