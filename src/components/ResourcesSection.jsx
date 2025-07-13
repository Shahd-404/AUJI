// 📁 src/components/ResourcesSection.jsx
import React from 'react';
import { DownloadCloud } from 'lucide-react';

const resources = [
  {
    title: 'أفضل منصات البحث عن وظائف',
    size: 'PDF - 1.5MB',
  },
  {
    title: 'دليل كتابة السي في باحتراف',
    size: 'PDF - 2.1MB',
  },
  {
    title: 'قائمة تحضير للمقابلة الشخصية',
    size: 'PDF - 1.3MB',
  },
  {
    title: 'دليل البداية السريعة مع AUJI',
    size: 'PDF - 900KB',
  },
];

const ResourcesSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-right" dir="rtl">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">
        كل الموارد اللي محتاجها بين إيديك
      </h2>
      <p className="text-sm md:text-base text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
        حمّل الأدلة الشاملة، قوائم التحقق، وأهم الملفات اللي هتساعدك في رحلة البحث عن شغل.
      </p>

      {/* بطاقات الموارد */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col items-center"
          >
            <div className="text-blue-600 bg-blue-50 p-3 rounded-full mb-4">
              <DownloadCloud size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{resource.title}</h3>
            <p className="text-sm text-gray-500">{resource.size}</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition">
              تحميل
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;
