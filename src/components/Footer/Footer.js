import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="main-section">
      <div id="subscribe-section">
        <div className="subscribe">
        <div className="subscribe-head">
          <h2>
            Subscribe Now for <br /> Get Special Features!
          </h2>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <div className="button">
          <button> Subscribe Now</button>
        </div>
      </div>
      </div>
      <div id="footer-section">
        <div id="footer-aside">
          <div className="brand-logo">
            <img src="../images/logo/logo_vpn.svg" alt="brand_logo"></img>
          </div>
          <div className="brand-para">
            <p>
              <b>LaslesVPN</b> is a private virtual network that has unique
              features and has high security.
            </p>
          </div>
          <div className="footer-medias">
            <div className="media-img">
              <img src="../images/imgs/Facebook.png" alt="fb_logo"></img>
            </div>
            <div className="media-img">
              <img src="../images/imgs/Twitter.png" alt="twitter_logo"></img>
            </div>
            <div className="media-img">
              <img src="../images/imgs/Instagram.png" alt="insta_logo"></img>
            </div>
          </div>
          <div className="footer-copyrights">
            <p>©2020LaslesVPN</p>
          </div>
        </div>
        <div id="footer-details-main">
          <div className="footer-list-div">
            <h3>Product</h3>
            <div className="footer-list">
              <p>Download </p>
              <p>Pricing</p>
              <p>Locations </p>
              <p>Server</p>
              <p>Countries </p>
              <p>Blog</p>
            </div>
          </div>
          <div className="footer-list-div">
            <h3>Engage</h3>
            <div className="footer-list">
              <p>LaslesVPN ? </p>
              <p>FAQ</p>
              <p>Tutorials</p>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Terms of service</p>
            </div>
          </div>
          <div className="footer-list-div">
            <h3>Earn Money</h3>
            <div className="footer-list">
              <p>Affiliate</p>
              <p>Become Partner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
