// 📁 src/components/LocalImpactSection.jsx
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X, Search, MapPin } from 'lucide-react';

const LocalImpactSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative text-white text-right" dir="rtl">
      {/* Background Map */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/egypt-map.png"
          alt="خريطة مصر - البحيرة"
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
      </div>

      <div className="relative z-10 py-20 px-6 md:px-20 bg-gradient-to-b from-blue-700/80 to-blue-500/80">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            AUJI في البحيرة: تأثيرنا المحلي
          </h2>
          <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed mb-16">
            اعرف أكتر عن الفعاليات اللي بنعملها، أماكن شركائنا، وقصص النجاح من منطقتك.
          </p>
        </div>

        {/* Floating Cards */}
        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="bg-white text-gray-800 w-full md:w-[280px] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-1">اكتشف الفرص القريبة منك</h3>
            <p className="text-sm mb-4">دور على الفعاليات والفرص المتاحة حوالين منطقتك.</p>
            <button className="text-sm font-semibold text-blue-600 hover:underline">ابدأ الاستكشاف</button>
          </div>

          <div className="bg-white text-gray-800 w-full md:w-[280px] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-1">مواقع شركائنا</h3>
            <p className="text-sm mb-4">اعرف أماكن المراكز اللي بتتعاون مع AUJI في البحيرة.</p>
            <button className="text-sm font-semibold text-blue-600 hover:underline">شوف التفاصيل</button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-lg font-bold mb-4">هل أنت من البحيرة؟ اشترك في شبكة AUJI وابدأ رحلتك من هنا</h3>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition text-sm md:text-base">
            سجّل معنا الآن
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-white text-blue-600 px-4 py-2 rounded-full shadow-lg hover:bg-blue-50 transition flex items-center gap-2"
      >
        <span>🗺️</span>
        <span className="font-medium text-sm">شوف الخريطة التفاعلية</span>
      </button>

      {/* Modal: خريطة تفاعلية */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl shadow-xl max-w-6xl w-full p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 left-3 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold text-blue-700 mb-4">الخريطة التفاعلية</h3>
            <div className="w-full h-[500px]">
              <iframe
                title="Interactive Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110551.00305029883!2d30.4519534!3d31.0340746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5cbafff6b7b4d%3A0xcedb28bd9a2562ef!2z2KfZhNiz2Kkg2YbYp9iv2YrYqQ!5e0!3m2!1sar!2seg!4v1717437864521!5m2!1sar!2seg"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg border"
              ></iframe>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default LocalImpactSection;
