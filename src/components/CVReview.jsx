// 📁 src/components/CVReview.jsx
import React from 'react';

const CVReview = () => {
  return (
    <section className="mt-12 bg-white font-montaser p-6 md:p-10 rounded-2xl shadow-md" dir="rtl">
      {/* العنوان الرئيسي */}
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
        معاينة التعديلات المقترحة من الذكاء الاصطناعي
      </h2>

      {/* الكارد الكامل */}
      <div className="bg-[#f7faff] rounded-2xl p-6 md:p-8 shadow-md">
        {/* القائمة المنسدلة في الأعلى */}
        <div className="flex justify-end mb-6">
          <select
            className="border border-blue-300 rounded-lg p-2 bg-white text-right w-64"
            defaultValue=""
          >
            <option value="" disabled>اقتراحات مخصصة</option>
            <option>ضبط الملخص حسب الوظيفة</option>
            <option>تعزيز الأفعال</option>
            <option>تحديد الإنجازات</option>
          </select>
        </div>

        {/* عمودين للمقارنة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* النسخة المحسنة */}
            <div className="bg-white border border-blue-300 rounded-xl p-5 text-left" dir="ltr">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">AI-Suggested Version</h3>
                <p><strong>Name:</strong> Mohamed Ahmed</p>
                <p><strong>Phone:</strong> 01012345678</p>
                <p><strong>Email:</strong> mohamed@email.com</p>
                <p><strong>LinkedIn:</strong> linkedin.com/in/mohamed</p>
                <p className="mt-4 text-gray-700">
                <strong>Summary:</strong> A <span className="text-blue-600 font-bold">driven</span> and <span className="text-blue-600 font-bold">motivated</span> student eager to <span className="text-blue-600 font-bold">leverage</span> academic knowledge and gain <span className="text-blue-600 font-bold">strong hands-on experience</span> in a dynamic environment.
                </p>
            </div>

        {/* السيرة الذاتية الأصلية */}
        <div className="bg-white border border-blue-200 rounded-xl p-5 text-left" dir="ltr">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Original CV</h3>
            <p><strong>Name:</strong> Mohamed Ahmed</p>
            <p><strong>Phone:</strong> 01012345678</p>
            <p><strong>Email:</strong> mohamed@email.com</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/mohamed</p>
            <p className="mt-4 text-gray-700">
            <strong>Summary:</strong> A hardworking student seeking an opportunity to gain practical experience in a growth-oriented environment.
            </p>
        </div>

        </div>

        {/* زر التأكيد */}
        <div className="text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-12 rounded-xl text-lg shadow">
            تأكيد وتحليل نهائي
          </button>
        </div>
      </div>
    </section>
  );
};

export default CVReview;
