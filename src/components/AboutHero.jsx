// 📁 src/components/AboutHero.jsx
import React from 'react';

const AboutHero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center bg-gray-50" dir="rtl">
      {/* الصورة (يمين) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen">
        <img
          src="/images/about-office.jpg"
          alt="مكتب AUJI"
          className="object-cover w-full h-full"
        />
      </div>

      {/* المحتوى النصي (يسار) */}
      <div className="w-full md:w-1/2 px-8 md:px-16 py-12 md:py-0 flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-snug">
          بنقوي الجيل الجاي من المواهب!
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          أوجي هو أول منصة بتعتمد على الذكاء الاصطناعي مخصوص عشان تساعد طلاب وخريجين الجامعات في الوطن العربي يبنوا مستقبلهم المهني. هدفنا نسهل عملية التقديم على الوظايف والتدريبات، ونخليها أسرع وأسهل وأوضح للجميع — من غير دوشة أو تعقيد. عايزين كل شاب/ة يلاقي فرصته بسهولة، ويتعلم إزاي يطور نفسه، ويحقق طموحه.
        </p>

        {/* توقيع المديرة التنفيذية */}
        <div className="mt-10 flex items-center gap-3">
          <div className="w-1 h-12 bg-blue-600"></div>
          <div>
            <p className="text-md font-semibold text-gray-800">م. شهد علاء</p>
            <p className="text-sm text-gray-500">المؤسسة والمديرة التنفيذية</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
