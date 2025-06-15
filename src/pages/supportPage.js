import React, { useEffect, useState } from 'react';

function GuidancePage() {
  const [guidance, setGuidance] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/guidance')
      .then((res) => res.json())
      .then((data) => setGuidance(data))
      .catch((err) => console.error('Error fetching guidance:', err));
  }, []);

  return (
    <div>
      <h2>Career Guidance</h2>
      {guidance.length > 0 ? (
        <ul>
          {guidance.map((item, index) => (
            <li key={index}>{item.tip}</li>
          ))}
        </ul>
      ) : (
        <p>No guidance tips available. Please check your backend or try again later.</p>
      )}
    </div>
  );
}

export default GuidancePage;
