// src/pages/JobCard.js
import React from 'react';

const JobCard = ({ logo, title, company, location, salary, time, promoted }) => {
  return (
    <div style={styles.card}>
      <img src={logo} alt={company} style={styles.logo} />
      <div>
        <h3>{title}</h3>
        <p><strong>{company}</strong> | {location}</p>
        {salary && <p>Salary: {salary}</p>}
        {time && <p>Posted: {time}</p>}
        {promoted && <span style={styles.promoted}>Promoted</span>}
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    gap: '16px',
    padding: '12px',
    marginBottom: '12px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#fff'
  },
  logo: {
    width: '60px',
    height: '60px',
    borderRadius: '8px'
  },
  promoted: {
    backgroundColor: '#c0f2c0',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '0.8rem',
    marginTop: '5px',
    display: 'inline-block'
  }
};

export default JobCard;