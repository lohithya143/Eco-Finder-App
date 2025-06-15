import React from 'react';
import './Auth.css'; // optional, if you're using extra styles
import { Link } from 'react-router-dom';

function LoginSignupPage() {
  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src="/carrer.png" alt="Career Guidance" />
      </div>
      <div className="auth-buttons">
        <h1>Welcome to Eco Finder</h1>
        <Link to="/login">
          <button className="auth-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="auth-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginSignupPage;
