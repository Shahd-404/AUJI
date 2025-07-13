// 📁 src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import CVAnalyzer from './components/CVAnalyzer';
import SimilarJobs from './components/SimilarJobs';
import SmartApply from './components/SmartApply';
import AUJIDashboard from './components/AUJIDashboard';
import Community from './components/Community';
import About from './components/About';
import JobApplicationResult from './components/JobApplicationResult';
import CommunityInnerPage from './components/CommunityInnerPage';

// ✅ استيراد صفحة الكورسات
import CoursesPage from './components/CoursesPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true
    });
  }, []);

  return (
    <div className="font-montaser bg-[#f8f9fc]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cv-analyzer" element={<CVAnalyzer />} />
          <Route path="/similar-jobs" element={<SimilarJobs />} />
          <Route path="/smart-apply" element={<SmartApply />} />
          <Route path="/dashboard" element={<AUJIDashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/job-result" element={<JobApplicationResult />} />
          <Route path="/community/topic" element={<CommunityInnerPage />} />

          {/* ✅ ربط صفحة كورسات أوجي */}
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
