import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-section">
          <div className="location">
            <i className="fa-solid fa-house-chimney"></i>
            <p>Giza, Egypt</p>
          </div>
          <div className="phone">
            <i className="fa-solid fa-phone"></i>
            <p>20-111-792-9376</p>
          </div>
          <div className="mail">
            <i className="fa-solid fa-envelope"></i>
            <a href="#mailto:rawansayed143@gmail.com">
              rawansayed143@gmail.com
            </a>
          </div>
        </div>
        <div className="right-section">
          <h4>About the company</h4>
          <p>
            This is my Portfolio. I enjoy building websites from scratch. Feel
            free to contact me!
          </p>
          <div className="right-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
