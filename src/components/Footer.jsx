import React from 'react';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-6 md:px-20 font-montaser relative">
      {/* النص الرئيسي */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          مساعدك الذكي للتقديم على الشغل والتدريبات
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          اشترك في النشرة البريدية علشان توصلك أحدث الفرص
        </p>
      </div>

      {/* نموذج الاشتراك */}
      <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-10">
        <input
          type="email"
          placeholder="اكتب إيميلك هنا"
          className="w-full md:w-2/3 px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition text-sm md:text-base"
        >
          اشترك
        </button>
      </form>

      {/* خط الحقوق + أدوات أسفل الشاشة */}
      <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p className="text-center md:text-right w-full md:w-auto mb-4 md:mb-0">
          © 2025 منصة أوجي – جميع الحقوق محفوظة
        </p>

        <div className="flex items-center justify-between w-full md:w-auto">
          {/* زر تغيير اللغة */}
            <button className="text-xs text-gray-500 hover:text-blue-600 transition mr-6">
            English
            </button>
          {/* أيقونات السوشيال */}
          <div className="flex gap-4 ml-auto">
            <a href="#" className="hover:text-blue-600 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
