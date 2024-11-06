import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import FeatureSection from "./components/FeatureSection";
import ProductCards from "./components/ProductCards";
import Electronics from "./components/Electronics";
import Cosmetics from "./components/Cosmetics";
import Footwear from "./components/Footwear"; // Import Footwear component
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <CartProvider>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ImageSlider />
                  
                  <ProductCards />
                  <FeatureSection />
                </>
              }
            />
            {/* <Route path="/realEstate" element={<RealEstate />} /> */}
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/footwear" element={<Footwear />} />
            <Route path="/cosmetics" element={<Cosmetics />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} /> {/* New Cart Route */}
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;