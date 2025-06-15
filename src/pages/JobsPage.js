// src/pages/JobsPage.js
import React, { useState } from 'react';
import JobCard from './JobCard';
import JobDetails from './JobDetails';

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      logo: '/logos/th.webp',
      title: 'Web Development Internship',
      company: 'Webriy',
      location: 'India (Remote)',
      salary: '₹30K–₹40K/month',
      time: '1 month ago',
      experience: '0-1 years',
      opportunityType: 'Remote',
      placementType: 'Internship',
      shift: 'Flexible',
      promoted: false
    },
    {
      logo: '/logos/the.jpg',
      title: 'Data Entry Executive',
      company: 'Cheezecake AI',
      location: 'India (Remote)',
      salary: 'Confidential',
      experience: '1-2 years',
      opportunityType: 'Remote',
      placementType: 'Full-time',
      shift: 'Day',
      promoted: true
    },
    {
      logo: '/logos/OSK.jpg',
      title: 'Social Media Intern',
      company: 'PINKVILLA',
      location: 'India (Remote)',
      salary: '₹10K/month',
      experience: 'Fresher',
      opportunityType: 'Remote',
      placementType: 'Internship',
      shift: 'Day',
      promoted: true
    },
    {
      logo: '/logos/th.jpg',
      title: 'Data Science Intern',
      company: 'SkillFied Mentor',
      location: 'India (Remote)',
      salary: '₹15K/month',
      experience: '0-1 years',
      opportunityType: 'Remote',
      placementType: 'Internship',
      shift: 'Flexible',
      promoted: true
    }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#e3f2fd', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>Top Job Picks for You</h2>
      {!selectedJob ? (
        jobs.map((job, index) => (
          <div key={index} onClick={() => setSelectedJob(job)}>
            <JobCard {...job} />
          </div>
        ))
      ) : (
        <JobDetails job={selectedJob} goBack={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default JobsPage;
