import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo-section">
                    <h2 className="company-name">Vebusa</h2>
                    <img src="/assets/logo.png" alt="Vebusa V|KDS" className="logo" />
                </div>
                <div className="login-form">
                    <h2 class="login-title">Log in to your account</h2>
                    <p class="login-title-1">Welcome back! Please enter your details.</p>
                    <form>
                        <label>Kitchen department</label>
                        <select className="input-field">
                            <option value="">Enter your Kitchen Department</option>
                        </select>

                        <label>Access ID</label>
                        <input type="text" className="input-field" placeholder="Enter KDS access ID" />

                        <label>Pin</label>
                        <input type="password" className="input-field" placeholder="Enter KDS Pin" />

                        <div className="forgot-section">
                            <button type="button" className="forgot-pin-btn" onClick={() => navigate('/forgot-password')}>Forgot pin</button>
                        </div>

                        <button type="submit" className="login-btn">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;