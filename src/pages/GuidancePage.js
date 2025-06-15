
// src/pages/GuidancePage.js
import React, { useState } from 'react';
import JobCard from './JobCard';
import JobDetails from './JobDetails';

const GuidancePage = () => {
  const [selectedTip, setSelectedTip] = useState(null);

  const guidanceTips = [
    {
      logo: '/logos/guidance1.webp',
      title: 'Resume Building',
      company: 'EcoFinder Tips',
      location: 'India (Remote)',
      salary: 'N/A',
      experience: 'All Levels',
      opportunityType: 'Guidance',
      placementType: 'Tip',
      shift: 'Flexible',
      promoted: true
    },
    {
      logo: '/logos/guidance2.webp',
      title: 'Interview Preparation',
      company: 'EcoFinder Tips',
      location: 'India (Remote)',
      salary: 'N/A',
      experience: 'All Levels',
      opportunityType: 'Guidance',
      placementType: 'Tip',
      shift: 'Flexible',
      promoted: true
    },
    {
      logo: '/logos/guidance3.webp',
      title: 'LinkedIn Optimization',
      company: 'EcoFinder Tips',
      location: 'India (Remote)',
      salary: 'N/A',
      experience: 'All Levels',
      opportunityType: 'Guidance',
      placementType: 'Tip',
      shift: 'Flexible',
      promoted: true
    },
    {
      logo: '/logos/guidance4.webp',
      title: 'Choosing the Right Career Path',
      company: 'EcoFinder Tips',
      location: 'India (Remote)',
      salary: 'N/A',
      experience: 'All Levels',
      opportunityType: 'Guidance',
      placementType: 'Tip',
      shift: 'Flexible',
      promoted: true
    }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#e3f2fd', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>Career Guidance</h2>
      {!selectedTip ? (
        guidanceTips.map((tip, index) => (
          <div key={index} onClick={() => setSelectedTip(tip)}>
            <JobCard {...tip} />
          </div>
        ))
      ) : (
        <JobDetails job={selectedTip} goBack={() => setSelectedTip(null)} />
      )}
    </div>
  );
};

export default GuidancePage;
