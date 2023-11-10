import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Work from "../components/Work";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <Footer />
    </div>
  );
}

export default Home;
