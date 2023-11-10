import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Introbg from "../assets/intro-bg.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-bg" src={Introbg} />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>React Developer.</h1>

        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/content" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
