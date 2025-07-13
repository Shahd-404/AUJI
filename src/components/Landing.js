import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import handshakeImg from '../assets/Auji.png';

import CoreServices from './CoreServices';
import TestimonialsSection from './TestimonialsSection';
import WhyAUJISection from './WhyAUJISection';
import StepsSection from './StepsSection';
import TrustedBySection from './TrustedBySection';
import CTASection from './CTASection';
import Footer from '../components/Footer';

const Landing = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="font-montaser flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 bg-[#f7faff] min-h-screen">
        {/* Image */}
        <div className="w-full md:w-1/2 text-center md:pl-6">
          <img
            src={handshakeImg}
            alt="AUJI"
            className="max-w-5xl mx-auto"  // تكبير الصورة أكثر
            style={{ transform: 'translateY(-20px)' }}
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-end text-right space-y-6 md:pr-12">
          {/* جملة "احنا ندور وانت اتطور" */}
          <h1 className="text-7xl md:text-8xl font-bold leading-tight text-gray-800 mt-8">
            احنا ندور وانت{' '}
            <span className="relative text-blue-600">
              اتطور
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-300 rounded"></span>
            </span>
          </h1>

          {/* جملة "افتح أبواب مستقبلك مع أوجي" في سطر واحد */}
          <p className="text-3xl md:text-4xl text-gray-700 leading-relaxed w-full">
            افتح أبواب مستقبلك مع أوجي – مساعدك الذكي للوظايف والتدريبات في الوطن العربي
          </p>

          {/* المسافة بين الجمل والأزرار */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end mt-12">
            {/* زر رفع السيرة الذاتية */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-md shadow transition text-xl">
              ارفع السيرة الذاتيه الآن
            </button>

            {/* زر إنشاء السيرة الذاتية */}
            <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 px-10 py-4 rounded-md shadow transition text-xl">
              أنشئ سيرتك الذاتية الآن
            </button>

            {/* زر التسجيل */}
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-10 py-4 rounded-md shadow transition text-xl">
              سجل مجانًا
            </button>
          </div>
        </div>
      </section>

      {/* باقي الأقسام */}
      <CoreServices />
      <TestimonialsSection />
      <WhyAUJISection />
      <StepsSection />
      <TrustedBySection />
      <CTASection />
      <Footer />

      {/* زر الرجوع لأعلى */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Landing;
