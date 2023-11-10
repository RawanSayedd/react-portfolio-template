import React from "react";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
function Contact() {
  return (
    <div>
      <Hero2 heading="CONTACT US." text="Lets have a chat!" />
      <Form />
    </div>
  );
}

export default Contact;
