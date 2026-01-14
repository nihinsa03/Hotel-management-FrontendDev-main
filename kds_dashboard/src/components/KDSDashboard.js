import React from 'react';
import './KDSDashboard.css';

const KDSDashboard = () => {
    return (
        <div className="dashboard-container">
        <header className="dashboard-header">
            <div className="header-actions">
                <button className="icon-button zoom-in">
                    <img src="/assets/zoom-in.png" alt="Zoom In" />
                </button>
                <button className="icon-button zoom-out">
                    <img src="/assets/zoom-out.png" alt="Zoom Out" />
                </button>
                <button className="logout-btn">Log out</button>
            </div>
        </header>
    </div>
    );
  };
  

export default KDSDashboard;
