import React from "react";
import "./Head.css";

function Header() {
  return (
    <div id="header-section">
      <div id="header-img-container">
        <img
          src="../images/imgs/main_head_1.svg"
          alt="illustration_img_1"
          className="header-img"
        ></img>
      </div>
      <div id="header-content">
        <div id="header-heading" className="header-item">
          <p>
            Want anything to be easy with <b>NextGenVPN.</b>
          </p>
        </div>
        <div id="header-paragraph" className="header-item">
          <p>
            Provide a network for all your needs with ease and fun using{" "}
            <b>NextGenVPN</b> discover interesting features from us.
          </p>
        </div>
        <div className="header-item">
          <button type="button" className="getstarted-button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
