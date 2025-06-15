import React, { useState } from 'react';
import Feedback from './Feedback';

const JobDetails = ({ job, goBack }) => {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div style={styles.container}>
      {!showFeedback ? (
        <>
          <button onClick={goBack} style={styles.backButton}>⬅ Back</button>
          <img src={job.logo} alt={`${job.company} logo`} style={styles.logo} />
          <h2>{job.title}</h2>
          <h3>{job.company}</h3>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Experience:</strong> {job.experience}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Shift:</strong> {job.shift}</p>
          <p><strong>Opportunity Type:</strong> {job.opportunityType}</p>
          <p><strong>Placement Type:</strong> {job.placementType}</p>
          <br />
          <button onClick={() => setShowFeedback(true)} style={styles.feedbackButton}>
            ✅ Continue to Feedback
          </button>
        </>
      ) : (
        <>
          <h2>🎉 Thank You for Exploring!</h2>
          <p>We value your opinion. Please leave your feedback below.</p>
          <Feedback />
          <button onClick={goBack} style={styles.backButton}>⬅ Go Back</button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#e3f2fd',
    padding: '40px 20px',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '60px auto',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)',
  },
  logo: {
    width: '150px',
    height: '150px',
    objectFit: 'contain',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  backButton: {
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  feedbackButton: {
    backgroundColor: '#43a047',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
  }
};

export default JobDetails;