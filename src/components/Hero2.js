import React from "react";
import "./Hero2.css";
import Introbg2 from "../assets/hero2.jpg";

function Hero2(props) {
  return (
    <div className="hero-img2">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Hero2;
