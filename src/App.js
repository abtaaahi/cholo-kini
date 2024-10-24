import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import ProductCards from "./components/ProductCards";
import Electronics from "./components/Electronics";
import Cosmetics from "./components/Cosmetics";
import RealEstate from "./components/RealEstate";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

function App() {
  return (
    <Router basename="/cholo-kini"> {/* Add basename here */}
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ImageSlider />
                <ProductCards />
              </>
            }
          />
          {/* Section-specific routes */}
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/realEstate" element={<RealEstate />} />

          {/* Product details page */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;