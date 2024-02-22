import React from "react";
import "./Features.css";

function Features() {
  return (
    <div id="features-section">
      <div className="features-img">
        <img src="../images/imgs/illustration_2.png" alt="image_2"></img>
      </div>
      <div className="features-info">
        <div className="info-heading">
          <h2>We Provide Many Features You Can Use</h2>
        </div>
        <div className="info-description">
          <p>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
        </div>
        <ul>
          <li>
            <img src="../images/logo/right_tick_logo.png" alt="tick"></img>
            <p>Powerful online protection.</p>
          </li>
          <li>
            <img src="../images/logo/right_tick_logo.png" alt="tick"></img>
            <p>Internet without borders.</p>
          </li>
          <li>
            <img src="../images/logo/right_tick_logo.png" alt="tick"></img>
            <p>Supercharged VPN</p>
          </li>
          <li>
            <img src="../images/logo/right_tick_logo.png" alt="tick"></img>
            <p>No specific time limits.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
