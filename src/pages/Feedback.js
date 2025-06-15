// src/pages/Feedback.js
import React, { useState } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    alert("✅ Thanks for your feedback!");
    setFeedback("");
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Write your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        style={{ padding: '10px', borderRadius: '5px', fontSize: '16px', width: '100%', maxWidth: '500px' }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{ backgroundColor: '#1976d2', color: '#fff', padding: '10px 16px', border: 'none', borderRadius: '5px', marginTop: '10px' }}
      >
        Submit Feedback
      </button>
    </div>
  );
}

export default Feedback;