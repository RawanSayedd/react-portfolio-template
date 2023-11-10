import React from "react";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

function Project() {
  return (
    <div>
      <Hero2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <PricingCard />
    </div>
  );
}

export default Project;
