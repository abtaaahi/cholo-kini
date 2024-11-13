import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroTopSection from './components/HeroTopSection';
import HeroSection from "./components/HeroSection";
import BannerSection from "./components/BannerSection";
import ScrollText from "./components/ScrollText";
import ImageSlider from "./components/ImageSlider";
import FeatureSection from "./components/FeatureSection";
import ProductCards from "./components/ProductCards";
import Electronics from "./components/Electronics";
import Cosmetics from "./components/Cosmetics";
import Footwear from "./components/Footwear";
import Footer from "./components/Footer";
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
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <FloatingButtons />
          <FeatureSection />
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;