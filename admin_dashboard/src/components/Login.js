import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [accessId, setAccessId] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!accessId || !pin) {
      alert("Please enter Access ID and Pin!");
      return;
    }

    alert("Login successful!");
    navigate("/dashboard"); // Redirect to Dashboard Page
  };

  return (
    <div className="login-container">
      <div className="logo-container">
      <h2><span className="vebusa">Vebusa</span> </h2>
        <img src="/Assets/adminlogo.png" alt="Vebusa Admin Logo" className="logo" />
        
      </div>

      <div className="login-form">
        <h2>Log in to your account</h2>
        <p className="welcome-text">Welcome back! Please enter your details.</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="accessID">Access ID</label>
            <input
              type="text"
              id="accessID"
              placeholder="Enter your access ID"
              value={accessId}
              onChange={(e) => setAccessId(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="pin">Pin</label>
            <input
              type="password"
              id="pin"
              placeholder="Enter your pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </div>

          <div className="forgot-password">
            <button
              type="button"
              className="link-button"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className="sign-in-btn">Sign in</button>
        </form>

        <p className="signup-text">
          Don’t have an account?{" "}
          <button className="link-button" onClick={() => navigate("/sign-up")}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
