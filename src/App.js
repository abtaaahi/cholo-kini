import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import AppLoader from "./components/AppLoader";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { products } from "./data/products";
import "./App.css";

const HeroTopSection = React.lazy(() => import('./components/HeroTopSection'));
const HeroSection = React.lazy(() => import("./components/HeroSection"));
const BannerSection = React.lazy(() => import("./components/BannerSection"));
const ScrollText = React.lazy(() => import("./components/ScrollText"));
const ImageSlider = React.lazy(() => import("./components/ImageSlider"));
const CategorySection = React.lazy(() => import("./components/CategorySection"));
const FeatureSection = React.lazy(() => import("./components/FeatureSection"));
const ProductCards = React.lazy(() => import("./components/ProductCards"));
const Electronics = React.lazy(() => import("./components/Electronics"));
const Cosmetics = React.lazy(() => import("./components/Cosmetics"));
const Footwear = React.lazy(() => import("./components/Footwear"));
const Foods = React.lazy(() => import("./components/Foods"));
const HealthCare = React.lazy(() => import("./components/HealthCare"));
const Footer = React.lazy(() => import("./components/Footer"));
// const RealEstateBanner = React.lazy(() => import("./components/RealEstateBanner"));
const PrivacyPolicy = React.lazy(() => import("./components/PrivacyPolicy"));
const ReturnPolicy = React.lazy(() => import("./components/ReturnPolicy"));
const DataPolicy = React.lazy(() => import("./components/DataPolicy"));
const ProductDetails = React.lazy(() => import("./components/ProductDetails"));
const Cart = React.lazy(() => import("./components/Cart"));
const FloatingButtons = React.lazy(() => import("./components/FloatingButtons"));

function App() {
  return (
    <Router basename="/">
      <CartProvider>
        <div>
          <Suspense fallback={<AppLoader />}>
            <HeroTopSection />
            <HeroSection />
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<AppLoader />}>
                  <>
                    <BannerSection />
                    <CategorySection />
                    <ImageSlider />
                    <ScrollText />
                    <ProductCards 
                      products={products} 
                      sectionSubtitle="Latest Items"
                      sectionMainTitle="Our Products Collections"
                    />
                  </>
                  </Suspense>
                }
              />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/footwear" element={<Footwear />} />
              <Route path="/cosmetics" element={<Cosmetics />} />
              <Route path="/foods" element={<Foods />} />
              <Route path="/health" element={<HealthCare />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/return-policy" element={<ReturnPolicy />} />
              <Route path="/data-policy" element={<DataPolicy />} />
            </Routes>
            <FloatingButtons />
            {/* <RealEstateBanner/> */}
            <FeatureSection />
            <Footer />
          </Suspense>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;