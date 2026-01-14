import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VerifyOTP.css";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (isNaN(value)) return; // Only allow numbers

    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if a digit is entered
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`OTP entered: ${otp.join("")}`);
    navigate("/reset-password"); // Redirect to Reset Password page
  };
  

  return (
    <div className="otp-container">
      <div className="logo-container">
      <h2><span className="vebusa">Vebusa</span> </h2>
        <img src="/Assets/adminlogo.png" alt="Vebusa Admin Logo" className="logo-b" />
      </div>

      <div className="otp-form">
        <h2>Verify your email?</h2>
        <p className="instruction-text">Enter the OTP received in your (4-digit)</p>

        <form onSubmit={handleSubmit}>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
          </div>

          <button type="submit" className="verify-btn">Verify email</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
