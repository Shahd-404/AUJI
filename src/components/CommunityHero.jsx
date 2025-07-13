// 📁 src/components/CommunityHero.jsx
import React from 'react';
import VideoGridSection from '../components/VideoGridSection';

const CommunityHero = () => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('/avatars/community-bg.png')`,
      }}
      dir="rtl"
    >
      {/* Overlay تغطية شفافة لتوضيح النص */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-snug">
          أهلاً بيك في مجتمع <span className="text-blue-400">AUJI</span>
        </h1>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          اتعرف، واتعلّم، وكبّر علاقاتك مع ناس زيك بيدوروا على شغل أو مهتمين بمستقبلهم المهني.
          <br />
          رحلتك للنجاح بتبدأ من هنا
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-full text-base font-medium">
          انضم للمجتمع
        </button>
      </div>
    </section>
  );
};

export default CommunityHero;
