import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();alert(`Password reset OTP sent to ${email}`);
    navigate("/verify-otp"); // Redirect to OTP pagealert(`Password reset OTP sent to ${email}`);
  };

  return (
    <div className="forgot-container">
      <div className="logo-container">
      <h2><span className="vebusa">Vebusa</span></h2>
        <img src="../assets/adminlogo.png" alt="Vebusa Admin Logo" className="logo-a" />
      </div>

      <div className="forgot-form">
        <h2>Forget Something?</h2>
        <p className="instruction-text">Enter your email below to receive password reset OTP</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
