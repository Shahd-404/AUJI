import React from 'react';
import { ShieldCheck, GraduationCap, BrainCog } from 'lucide-react';

const features = [
  {
    title: "ذكاء صناعي بيفهمك",
    icon: <BrainCog />,
    description:
      "أوجي بيستخدم الذكاء الصناعي علشان يديك نصايح شخصية تساعدك تختار طريقك الصح في الشغل والتقديم",
  },
  {
    title: "معمول مخصوص للطلبة والخريجين",
    icon: <GraduationCap />,
    description:
      "كل حاجة جوه أوجي مصممة على مقاسك كطالب أو خريج جديد ",
  },
  {
    title: "بياناتك في أمان",
    icon: <ShieldCheck />,
    description:
      "خصوصيتك عندنا خط أحمر! بنستخدم تشفير وتقنيات حماية عالمية عشان بياناتك تفضل في أمان",
  },
];

const WhyAUJISection = () => {
  return (
    <section
      className="bg-gray-50 py-24 px-6 md:px-20 font-montaser text-center"
      id="why-auji"
    >
      {/* العنوان */}
      <h2 dir="rtl" className="text-3xl md:text-4xl font-bold mb-14 text-gray-800">
        ليه تختار{" "}
        <span dir="ltr" className="text-blue-600 inline-block">AUJI</span>
      </h2>

      {/* البطاقات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              {React.cloneElement(feature.icon, {
                className: 'w-6 h-6 text-blue-600',
              })}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAUJISection;
