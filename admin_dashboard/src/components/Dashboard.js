import React from "react";
import Sidebar from "./Sidebar";
import TopNavBar from "./TopNavBar";
import KitchenSummary from "./KitchenSummary";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <TopNavBar />
        <KitchenSummary />
      </div>
    </div>
  );
};

export default Dashboard;
