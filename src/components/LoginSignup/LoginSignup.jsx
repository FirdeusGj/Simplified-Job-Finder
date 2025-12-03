import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./LoginSignup.css";

export default function LoginSignup() {
  const location = useLocation();
  const isLogin = location.pathname === "/signin";

  return (
    <div className="login-signup-container">
      <div className="auth-card">
        <h2>{isLogin ? "Login to Your Account" : "Create a New Account"}</h2>

        <form className="auth-form">
          {!isLogin && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="switch-link">
          {isLogin ? (
            <>
              Don’t have an account? <Link to="/signup">Sign up</Link>
            </>
          ) : (
            <>
              Already have an account? <Link to="/signin">Login</Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
