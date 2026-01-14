import React from 'react';
import './ForgotPassword.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement password reset logic here
        alert('Password reset instructions sent to your email!');
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-box">
                <div className="logo-section">
                    <h2 className="company-name-b">Vebusa</h2>
                    <img src="/assets/logo.png" alt="Vebusa V|KDS" className="logo-b" />
                </div>
                <div className="forgot-password-form">
                    <h2 class="login-title">Forget Something?</h2>
                    <p class="login-title-2">Enter your valid email below to receive password reset instructions</p>
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input type="email" className="input-field" placeholder="Enter your Email" required />
                        <button type="submit" className="submit-btn" onClick={() => navigate('/kds-dashboard')}>Submit now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
