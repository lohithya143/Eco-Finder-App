// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample Career Guidance Data
// backend/index.js or wherever your Express route is
app.get('/guidance', (req, res) => {
  res.json([
    {
      title: "Prepare for Interviews",
      location: "Online Resources",
      tip: "Use mock interviews and platforms like Pramp or Interviewing.io."
    },
    {
      title: "Build a Strong LinkedIn Profile",
      location: "LinkedIn",
      tip: "Highlight your projects and achievements with measurable results."
    },
    {
      title: "Contribute to Open Source",
      location: "GitHub",
      tip: "Start with beginner-friendly issues and document your journey."
    },
    {
      title: "Take Free Courses",
      location: "Coursera, edX, NPTEL",
      tip: "Learn in-demand skills like cloud computing, AI, and web dev."
    },
    {
      title: "Network with Industry Experts",
      location: "Conferences, LinkedIn",
      tip: "Follow professionals and attend virtual meetups."
    }
  ]);
});


// Sample Jobs Data
app.get("/jobs", (req, res) => {
  res.json([
    { company: "Google", title: "Software Engineer", location: "Remote" },
    { company: "Amazon", title: "Cloud Engineer", location: "Bangalore" },
    { company: "TCS", title: "Systems Analyst", location: "Hyderabad" },
    { company: "Microsoft", title: "Data Scientist", location: "Noida" },
    { company: "Infosys", title: "DevOps Engineer", location: "Pune" },
    { company: "Accenture", title: "Backend Developer", location: "Chennai" },
    { company: "Cognizant", title: "Full Stack Developer", location: "Kolkata" },
    { company: "Wipro", title: "Network Engineer", location: "Mumbai" },
    { company: "Zoho", title: "QA Analyst", location: "Coimbatore" },
    { company: "HCL", title: "Frontend Developer", location: "Delhi" }
  ]);
});

// Sample Internships Data
app.get("/internships", (req, res) => {
  res.json([
    { company: "Internshala", title: "Web Development Intern", location: "Remote" },
    { company: "Google Summer of Code", title: "Open Source Contributor", location: "Remote" },
    { company: "TCS", title: "Java Intern", location: "Bangalore" },
    { company: "Amazon", title: "Machine Learning Intern", location: "Hyderabad" },
    { company: "Infosys", title: "Cybersecurity Intern", location: "Chennai" },
    { company: "Wipro", title: "Cloud Computing Intern", location: "Pune" },
    { company: "Zoho", title: "Mobile App Development Intern", location: "Tirunelveli" },
    { company: "Accenture", title: "Business Analyst Intern", location: "Noida" },
    { company: "IBM", title: "AI Intern", location: "Kolkata" },
    { company: "Cognizant", title: "Data Analyst Intern", location: "Delhi" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
