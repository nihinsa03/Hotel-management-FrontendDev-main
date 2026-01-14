import React from "react";
import { FaBell } from "react-icons/fa";
import "../styles/TopNavBar.css";

const TopNavBar = () => {
  return (
    <div className="top-nav">
      <div className="restaurant-selector">
        <button className="rest-name-btn">Rest Name</button>
        <div className="restaurant-name">Bambalapitiya 01</div>
      </div>

      <div className="notification-container">
        <FaBell className="notification-icon" />
        <span className="notification-badge">3</span>
      </div>
    </div>
  );
};

export default TopNavBar;
