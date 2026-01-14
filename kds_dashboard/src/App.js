import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import KDSDashboard from './components/KDSDashboard';
import BranchInfo from './components/BranchInfo';
import OrdersSection from './components/OrdersSection';

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                {/* Dashboard Routes */}
                <Route path="/*" element={<DashboardLayout />} />
            </Routes>
        </Router>
    );
}

// Separate Dashboard Layout
function DashboardLayout() {
    return (
        <div className="kds-dashboard">
            <KDSDashboard />
            <BranchInfo />
            <OrdersSection />
        </div>
    );
}

export default App;
