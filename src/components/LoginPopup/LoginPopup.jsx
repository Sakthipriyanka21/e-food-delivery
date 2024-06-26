import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <>
              <label>Name : </label>
              <input type="text" placeholder="Enter your name" required />
            </>
          )}
          <br></br>

          <label>Email : </label>
          <input type="email" placeholder="Enter your email address" required />
          <br></br>

          <label>Password : </label>
          <input type="password" placeholder="Enter your password" required />
          <br></br>
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create an account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree the terms and conditions and privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p onClick={() => setCurrState("Sign Up")}>
            Create a new account<span> Click here</span>
          </p>
        ) : (
          <p onClick={() => setCurrState("Login")}>
            Already have an account? <span>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
