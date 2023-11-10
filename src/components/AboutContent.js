import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import Top from "../assets/contact 1.jpg";
import Bottom from "../assets/hero2.jpg";
function AboutContent() {
  return (
    <div className="about-content">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a react front-end developer. I create responsive secure websites
          for my clients
        </p>
        <Link to="/contact">
          <button className="btn">Contact Here!</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Top} className="img" alt="first img" />
          </div>
          <div className="img-stack bottom">
            <img src={Bottom} className="img" alt="first img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
