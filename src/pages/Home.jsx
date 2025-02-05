import React from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MapAndProducts from "../components/MapAndProducts";
import Product from "../components/Product";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <MapAndProducts />
      <Product/>
      <Blog/>
      <Footer/>
    </main>
  );
}

export default Home;
