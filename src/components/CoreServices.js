import React from 'react';
import { FileText, Search, Rocket } from 'lucide-react';

const CoreServices = () => {
  const services = [
    {
      icon: <FileText size={32} className="text-blue-600" />,
      title: 'محلل السيرة الذاتية',
      description:
        'خد تقييم فوري واقتراحات ذكية تزبطلك الـ CV وتخليه يلمع في عين الشركات.',
    },
    {
      icon: <Search size={32} className="text-blue-600" />,
      title: 'المطابق الذكي',
      description:
        'نرشّحلك فرص شغل مناسبة لمهاراتك وخبرتك واهتماماتك.. من غير ما تتعب في التدوير.',
    },
    {
      icon: <Rocket size={32} className="text-blue-600" />,
      title: 'التقديم الذكي',
      description:
        'خطاب التقديم؟ الأسئلة؟ الفورمات؟ AUJI يملالك كل ده تلقائي ويوفّر وقتك.',
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16 px-4 text-center font-montaser">
      <h2
        className="text-3xl font-bold text-gray-800 mb-12"
        data-aos="fade-up"
      >
        خدماتنا الأساسية
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center hover:shadow-md hover:scale-105 transition duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            <button className="flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md transition text-sm">
              اعرف أكتر
              <span className="rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreServices;
