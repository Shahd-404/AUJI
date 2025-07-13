// 📁 src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/auji_logo.png';
import { Search, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [lang, setLang] = useState('AR');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'AR' ? 'EN' : 'AR'));
  };

  return (
    <nav className="flex flex-col px-6 py-4 shadow-sm bg-white sticky top-0 z-50 font-[montaser]" dir="rtl">
      {/* ✅ سطر موحد لكل العناصر */}
      <div className="flex justify-between items-center w-full gap-6">
        {/* الشعار */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="AUJI Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-blue-600">AUJI</span>
        </div>

        {/* الروابط + البحث */}
        <div className="flex-1 flex justify-center gap-6 items-center max-w-6xl">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition'}>
            الرئيسية
          </NavLink>
          <NavLink to="/cv-analyzer" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition'}>
            تحليل السيرة الذاتية
          </NavLink>
          <NavLink to="/similar-jobs" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition'}>
            الفرص المناسبة
          </NavLink>
          <NavLink to="/smart-apply" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition'}>
            التقديم الذكي
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition'}>
            لوحة التحكم
          </NavLink>
          <NavLink to="/community" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition'}>
            أصدقائنا
          </NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition'}>
            مجتمع أوجي
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition'}>
            عن أوجي
          </NavLink>

          {/* البحث */}
          <div className="relative w-64">
            <input
              type="text"
              placeholder="ابحث..."
              className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* اللغة + التسجيل */}
        <div className="flex items-center gap-3">
          <button onClick={toggleLanguage} className="text-sm font-semibold text-blue-600 border border-blue-600 px-3 py-1 rounded-full hover:bg-blue-50 transition">
            {lang}
          </button>

          {!isLoggedIn && (
            <>
              <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline px-2 py-1">
                <UserPlus className="w-4 h-4" />
                <span className="text-base font-medium">سجل الآن</span>
              </button>
              <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline px-2 py-1">
                <LogIn className="w-4 h-4" />
                <span className="text-base font-medium">تسجيل الدخول</span>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;