import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [restaurantBadgeId, setRestaurantBadgeId] = useState("");
  const [accessId, setAccessId] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!restaurantBadgeId || !accessId || !pin) {
      alert("Please fill in all fields!");
      return;
    }

    alert("Account created successfully!");
    navigate("/"); // Redirect to login page after successful sign-up
  };

  return (
    <div className="signup-container">
      <div className="logo-container">
      <h2><span className="vebusa">Vebusa</span> </h2>
        <img src="/Assets/adminlogo.png" alt="Vebusa Admin Logo" className="logo-e" />
      </div>

      <div className="signup-form">
        <h2>Create your KDS account</h2>
        <p className="instruction-text">Make your Kitchen more smarter</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="restaurantBadgeId">Restaurant Badge ID</label>
            <input
              type="text"
              id="restaurantBadgeId"
              placeholder="Enter your Restaurant Badge ID"
              value={restaurantBadgeId}
              onChange={(e) => setRestaurantBadgeId(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="accessId">Access ID</label>
            <input
              type="text"
              id="accessId"
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

          <button type="submit" className="signup-btn">Sign up</button>
        </form>

        <p className="signin-text">
          Already have an account? <button className="link-button" onClick={() => navigate("/")}>Sign in</button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
