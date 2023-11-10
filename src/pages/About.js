import React from "react";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";

function About() {
  return (
    <div>
      <Navbar />
      <Hero2 heading="ABOUT." text="I'm a friendly Front-End Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
