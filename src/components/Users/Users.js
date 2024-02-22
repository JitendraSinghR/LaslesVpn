import React from "react";
import "./Users.css";

function Users() {
  return (
    <div id="statistics-section">
      <div className="statistic-item">
        <div className="location-icon statistics">
          <img src="../images/logo/location.png"></img>
        </div>
        <div className="statistic-info">
          <b>30+</b>
          <p>Locations</p>
        </div>
      </div>

      <div className="statistic-item">
        <div className="services-icon statistics">
          <img src="../images/logo/Server.png"></img>
        </div>
        <div className="statistic-info">
          <b>50+</b>
          <p>Services</p>
        </div>
      </div>

      <div className="statistic-item">
        <div className="user-icon statistics">
          <img src="../images/logo/user.png"></img>
        </div>
        <div className="statistic-info">
          <b>90+</b>
          <p>Users</p>
        </div>
      </div>
    </div>
  );
}

export default Users;
