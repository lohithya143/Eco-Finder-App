// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <img src="/logos/carrer.png" alt="Eco Finder Logo" className="dashboard-logo" />
      <h2>Welcome to Eco Finder!</h2>
      <p>Select an option to continue:</p>
      <div className="dashboard-options">
        <button className="dashboard-card" onClick={() => navigate('/jobs')}>Jobs</button>
        <button className="dashboard-card" onClick={() => navigate('/internships')}>Internships</button>
        <button className="dashboard-card" onClick={() => navigate('/guidance')}>Career Guidance</button>
      </div>
    </div>
  );
};

export default Dashboard;
