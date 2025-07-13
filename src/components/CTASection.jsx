import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-blue-600 py-20 px-6 text-center text-white font-montaser">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
          جاهز تبدأ أول خطوة في شغل أحلامك؟
        </h2>

        <p className="text-lg md:text-xl font-light mb-8">
          انضم لآلاف الطلبة والخريجين اللي <span className="font-bold text-white">أوجي</span> ساعدهم ينجحوا
        </p>

        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
          ابدأ رحلتك دلوقتي
        </button>
      </div>
    </section>
  );
};

export default CTASection;
