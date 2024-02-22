import React from "react";
import "./Network.css";

function Network() {
  return (
    <div id="network-container">
      <center id="network-header">
        <h2>Huge Global Network of Fast VPN</h2>
        <p>
          See <b>LaslesVPN </b> everywhere to make it easier for you when you
          move locations.
        </p>
      </center>
      <div className="network-image-section globe">
        <img src="../images/imgs/locations.svg" alt="locations_image"></img>
      </div>
      <div className="network-image-section sponsored">
        <img src="../images/imgs/Sponsored.png" alt="sponsors_image"></img>
      </div>
    </div>
  );
}

export default Network;
