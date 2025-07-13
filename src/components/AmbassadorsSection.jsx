// 📁 src/components/AmbassadorsSection.jsx
import React, { useState } from 'react';
import { X, Linkedin, Youtube, Twitter, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ambassadors = [
  {
    name: 'أحمد رامي',
    title: 'مسؤول مجتمع',
    desc: 'معاك خطوة بخطوة لغاية ما توصل لشغلك اللي بتحلم بيه.',
    avatar: '/avatars/ambassador1.jpg',
    socials: { linkedin: '#', twitter: '#', youtube: '#', website: '#' },
  },
  {
    name: 'أحمد شاهين ',
    title: 'مرشد مهني',
    desc: 'بساعدك تجهز للانترفيو وتدخل واثق من نفسك.',
    avatar: '/avatars/ambassador2.jpg',
    socials: { linkedin: '#', twitter: '#', youtube: '#', website: '#' },
  },
  {
    name: 'محمد عادل',
    title: 'خبير LinkedIn',
    desc: 'بعلمك إزاي تستغل LinkedIn صح وتفتح لنفسك فرص حقيقية.',
    avatar: '/avatars/ambassador3.jpg',
    socials: { linkedin: '#', twitter: '#', youtube: '#', website: '#' },
  },
  {
    name: 'أحمد خالد',
    title: 'متخصص سي ڤي',
    desc: 'هخلي السي ڤي بتاعك يلمع ويبان قوي بين كل المنافسين.',
    avatar: '/avatars/ambassador4.jpg',
    socials: { linkedin: '#', twitter: '#', youtube: '#', website: '#' },
  },
  {
    name: 'عمرو وليد',
    title: 'مدرب مقابلات',
    desc: 'مقابلتك هتبقى سهلة مع التدريب الصح.',
    avatar: '/avatars/ambassador5.jpg',
    socials: { linkedin: '#', twitter: '#', youtube: '#', website: '#' },
  },
  {
    name: 'كريم اسماعيل',
    title: 'مدرب',
    desc: 'هشارك معاك قصتي وإزاي نجحت، وإزاي تقدر تنجح إنت كمان.',
    avatar: '/avatars/ambassador6.jpg',
    socials: { linkedin: '#', twitter: '#', youtube: '#', website: '#' },
  },
];

const AmbassadorsSection = () => {
  const [selectedAmb, setSelectedAmb] = useState(null);

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-right" dir="rtl">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">
        قابل سفراء AUJI الملهمين
      </h2>
      <p className="text-sm md:text-base text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
        سفراء أوجي موجودين علشان يدعموك ويوجهوك في كل خطوة. اعرف أكتر عن الأشخاص اللي ورا نجاح مجتمع AUJI.
      </p>

      {/* Ambassador cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ambassadors.map((amb, index) => (
          <div
            key={index}
            onClick={() => setSelectedAmb(amb)}
            className="bg-gray-50 cursor-pointer rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
          >
            <img
              src={amb.avatar}
              alt={amb.name}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{amb.name}</h3>
            <p className="text-sm text-blue-600 mb-2">{amb.title}</p>
            <p className="text-sm text-gray-700">{amb.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedAmb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-xl p-6 w-[90%] max-w-md relative shadow-lg text-center"
            >
              <button onClick={() => setSelectedAmb(null)} className="absolute top-3 left-3 text-gray-500 hover:text-red-500">
                <X />
              </button>
              <img
                src={selectedAmb.avatar}
                alt={selectedAmb.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">{selectedAmb.name}</h3>
              <p className="text-sm text-blue-600 mb-4">{selectedAmb.title}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href={selectedAmb.socials.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:scale-110">
                  <Linkedin />
                </a>
                <a href={selectedAmb.socials.youtube} target="_blank" rel="noreferrer" className="text-red-500 hover:scale-110">
                  <Youtube />
                </a>
                <a href={selectedAmb.socials.twitter} target="_blank" rel="noreferrer" className="text-blue-400 hover:scale-110">
                  <Twitter />
                </a>
                <a href={selectedAmb.socials.website} target="_blank" rel="noreferrer" className="text-gray-600 hover:scale-110">
                  <Globe />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <div className="mt-16 bg-blue-50 rounded-2xl py-10 px-6 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          جاهز ترفع شغلك وتوصل لهدفك؟
        </h3>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
          انضم لمجتمع أوجي دلوقتي وخد فرص حصرية وإرشاد من خبراء وسفراء حقيقيين.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition">
          ابدأ رحلتك معانا دلوقتي
        </button>
      </div>
    </section>
  );
};

export default AmbassadorsSection;