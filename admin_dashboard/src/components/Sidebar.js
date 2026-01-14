import React from "react";
import { FaTh, FaUtensils, FaChair, FaClipboardList, FaBoxes, FaUserTie, FaShieldAlt, FaChartBar, FaCog, FaLifeRing } from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
      <h2><span className="vebusa">Vebusa</span> </h2>
        <img src="/Assets/adminlogo.png" alt="Vebusa Logo" className="logo-f" />
      
       
      </div>

      <nav className="menu">
        <ul>
          <li className="active"><FaTh /> Dashboard</li>
          <li><FaUtensils /> Food Menu</li>
          <li><FaChair /> Tables & Rooms</li>
          <li><FaClipboardList /> Reservation</li>
          <li><FaBoxes /> Inventory</li>
          <li><FaUserTie /> Employees</li>
          <li><FaShieldAlt /> Security</li>
          <li><FaChartBar /> Reports</li>
          <li><FaCog /> Settings</li>
          <li><FaLifeRing /> Help</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
