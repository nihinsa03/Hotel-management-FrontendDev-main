import React from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordResetSuccess.css";

const PasswordResetSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="logo-container">
      <h2><span className="vebusa">Vebusa</span> </h2>
        <img src="/Assets/adminlogo.png" alt="Vebusa Admin Logo" className="logo-d" />
      </div>

      <div className="success-message">
        <h2>Password reset successfully!</h2>
        <button className="signin-btn" onClick={() => navigate("/")}>Sign in</button>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;
