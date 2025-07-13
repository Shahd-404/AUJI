// 📁 src/pages/Community.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import CommunityHero from '../components/CommunityHero';
import VideoGridSection from '../components/VideoGridSection';
import LocalImpactSection from '../components/LocalImpactSection';
import ResourcesSection from '../components/ResourcesSection';
import AmbassadorsSection from '../components/AmbassadorsSection'; // 🆕
import Footer from '../components/Footer'; // 🆕

const Community = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <CommunityHero />
      <VideoGridSection />
      <LocalImpactSection />
      <ResourcesSection />
      <AmbassadorsSection /> {/* 🆕 قسم السفراء */}
      <Footer /> {/* 🆕 Footer */}

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Community;
