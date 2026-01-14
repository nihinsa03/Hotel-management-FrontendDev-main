import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    alert("Password reset successfully!");
    navigate("/password-reset-success"); // Redirect to success page
  };
  

  return (
    <div className="reset-container">
      <div className="logo-container">
      <h2><span className="vebusa">Vebusa</span> </h2>
        <img src="/Assets/adminlogo.png" alt="Vebusa Admin Logo" className="logo-c" />
      </div>

      <div className="reset-form">
        <h2>Reset your password</h2>
        <p className="instruction-text">Change your password safely</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="newPassword">New password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your given password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="reset-btn">Reset password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
