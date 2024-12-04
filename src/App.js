import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroTopSection from './components/HeroTopSection';
import HeroSection from "./components/HeroSection";
import BannerSection from "./components/BannerSection";
import ScrollText from "./components/ScrollText";
import ImageSlider from "./components/ImageSlider";
import CategorySection from "./components/CategorySection";
import FeatureSection from "./components/FeatureSection";
import ProductCards from "./components/ProductCards";
import Electronics from "./components/Electronics";
import Cosmetics from "./components/Cosmetics";
import Footwear from "./components/Footwear";
import Foods from "./components/Foods";
import HealthCare from "./components/HealthCare";
import Footer from "./components/Footer";
import RealEstateBanner from "./components/RealEstateBanner";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ReturnPolicy from "./components/ReturnPolicy";
import DataPolicy from "./components/DataPolicy";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";
import FloatingButtons from "./components/FloatingButtons";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { products } from "./data/products";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <CartProvider>
        <div>
        <HeroTopSection />
        <HeroSection />
          <Routes>
            <Route
              path="/"
              element={
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
          <RealEstateBanner/>
          <FeatureSection />
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;