import React, { useEffect, useState } from 'react';
import './BranchInfo.css';

const BranchInfo = () => {
    const [orderStatus, setOrderStatus] = useState({
        new: 0,
        preparing: 0,
        completed: 0,
        delay: 0
    });

    // Simulate data fetching
    const fetchOrderStatus = () => {
        // Here you'd typically fetch from an API.
        // We're using dummy values for this example.
        setOrderStatus({
            new: Math.floor(Math.random() * 10),
            preparing: Math.floor(Math.random() * 5),
            completed: Math.floor(Math.random() * 10),
            delay: Math.floor(Math.random() * 5),
        });
    };

    // Auto-refresh every 5 seconds
    useEffect(() => {
        fetchOrderStatus(); // Initial fetch
        const interval = setInterval(fetchOrderStatus, 5000);

        // Cleanup on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="branch-info-container">
            <div className="branch-details">
                <img src="/assets/food-1.png" alt="Branch" className="branch-image" />
                <div className="branch-info">
                    <div className="branch-code">
                        <p>Branch Code</p>
                        <span>001</span>
                    </div>
                    <div className="department">
                        <p>Department</p>
                        <span>Beverage</span>
                    </div>
                </div>
            </div>
            <div className="order-status">
                <div className="status-box new">
                    <span className="status-count">{orderStatus.new}</span>
                    <span className="status-text">New</span>
                </div>
                <div className="status-box preparing">
                    <span className="status-count">{orderStatus.preparing}</span>
                    <span className="status-text">Preparing</span>
                </div>
                <div className="status-box completed">
                    <span className="status-count">{orderStatus.completed}</span>
                    <span className="status-text">Completed</span>
                </div>
                <div className="status-box delay">
                    <span className="status-count">{orderStatus.delay}</span>
                    <span className="status-text">Delay</span>
                </div>
            </div>
        </div>
    );
};

export default BranchInfo;
