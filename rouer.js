// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import JobsPage from './pages/JobsPage';
import InternshipsPage from './pages/InternshipsPage';
import GuidancePage from './pages/GuidancePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/guidance" element={<GuidancePage />} />
      </Routes>
    </Router>
  );
}

export default App;
