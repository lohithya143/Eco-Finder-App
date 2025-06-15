// src/pages/InternshipsPage.js
import React, { useState } from 'react';
import JobCard from './JobCard';
import JobDetails from './JobDetails';

const InternshipsPage = () => {
  const [selectedIntern, setSelectedIntern] = useState(null);

  const internships = [
    {
      logo: '/logos/intern1.webp',
      title: 'Frontend Developer Intern',
      company: 'GreenTech Solutions',
      location: 'India (Remote)',
      salary: '₹10K–₹15K/month',
      time: '2 weeks ago',
      experience: '0-1 years',
      opportunityType: 'Remote',
      placementType: 'Internship',
      shift: 'Flexible',
      promoted: true
    },
    {
      logo: '/logos/intern2.webp',
      title: 'Content Writing Intern',
      company: 'EcoWriters',
      location: 'India (Remote)',
      salary: '₹5K–₹8K/month',
      time: '3 days ago',
      experience: 'Fresher',
      opportunityType: 'Remote',
      placementType: 'Internship',
      shift: 'Day',
      promoted: false
    },
    {
      logo: '/logos/intern3.webp',
      title: 'Marketing Intern',
      company: 'Sustainable Brands',
      location: 'India (Remote)',
      salary: '₹7K–₹12K/month',
      time: '1 week ago',
      experience: '0-1 years',
      opportunityType: 'Remote',
      placementType: 'Internship',
      shift: 'Day',
      promoted: true
    },
    {
      logo: '/logos/intern4.webp',
      title: 'UX Designer Intern',
      company: 'EcoDesign Labs',
      location: 'India (Remote)',
      salary: '₹12K–₹15K/month',
      time: '5 days ago',
      experience: 'Fresher',
      opportunityType: 'Remote',
      placementType: 'Internship',
      shift: 'Flexible',
      promoted: false
    }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#e3f2fd', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>Top Internship Picks for You</h2>
      {!selectedIntern ? (
        internships.map((intern, index) => (
          <div key={index} onClick={() => setSelectedIntern(intern)}>
            <JobCard {...intern} />
          </div>
        ))
      ) : (
        <JobDetails job={selectedIntern} goBack={() => setSelectedIntern(null)} />
      )}
    </div>
  );
};

export default InternshipsPage;
