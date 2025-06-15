import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OptionsPage.css';

const OptionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="options-container">
      <h1>Welcome to Eco Finder</h1>
      <img src="/carrer.png" alt="Career" className="career-image" />
      <div className="options-buttons">
        <button onClick={() => navigate('/guidance')}>Career Guidance</button>
        <button onClick={() => navigate('/internships')}>Internships</button>
        <button onClick={() => navigate('/jobs')}>Jobs</button>
      </div>
    </div>
  );
};

export default OptionsPage;
