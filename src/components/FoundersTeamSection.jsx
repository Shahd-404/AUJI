// 📁 src/components/FoundersTeamSection.jsx
import React from 'react';

const FoundersTeamSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-blue-600 text-white" dir="rtl">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          فريق أوچي المؤسس
        </h2>

        {/* صورة الفريق */}
        <div className="relative">
            <img
            src="/images/founders-team.jpeg"
            alt="فريق أوچي المؤسس"
            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            style={{ objectPosition: 'center 30%' }}            />

          {/* مستطيل أسماء الأعضاء */}
          <div className="absolute -bottom-16 right-0 left-0 mx-auto bg-white shadow-lg rounded-xl py-4 px-6 w-11/12 md:w-3/4">
            <div className="flex flex-col md:flex-row justify-around text-center">
              <div className="mb-2 md:mb-0">
                <p className="text-lg font-bold text-gray-800">شهد علاء</p>
                <p className="text-sm text-blue-600">الشريك المؤسس والرئيس التنفيذي</p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-800"> ايمان صبحي</p>
                <p className="text-sm text-blue-600">الشريك المؤسس ومدير العمليات</p>
              </div>
            </div>
          </div>
        </div>

        {/* النص الوصفي */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <p className="text-xl leading-relaxed">
            إحنا تيم أوجي , بدأنا منصة أوچي علشان نسهّل على الطلاب والخريجين في مصر والعالم العربي طريقهم لسوق العمل. مؤمنين إن كل شاب وبنت يستحق فرصة عادلة لبداية قوية في الكارير. مهمتنا نوفر لك أدوات ذكية ودعم حقيقي يسهّل عليك رحلة البحث عن شغل أو تدريب.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundersTeamSection;
