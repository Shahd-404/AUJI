import React, { useState, useEffect } from 'react';
import ProfileManager from './ProfileManager';
import Footer from './Footer';

import {
  CalendarDays,
  FileText,
  Send,
  Users,
  Lightbulb,
  CalendarCheck,
  TrendingUp,
  Clock,
  Star,
  CheckCircle,
  PenLine,
  ArrowUp
} from 'lucide-react';

const AUJIDashboard = () => {
  const [showProfileManager, setShowProfileManager] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cards = [
    {
      title: 'نسبة المقابلات المحجوزة',
      value: '١٥',
      desc: '٣ من ٢٠ تقديم',
      change: '⬆️ زيادة ٥٪ عن الشهر اللي فات',
      icon: <CalendarDays size={28} className="text-blue-600" />,
      color: 'text-blue-600',
    },
    {
      title: 'متوسط تقييم السيرة الذاتية',
      value: '٨٨',
      desc: 'بناءً على ٥ ملفات',
      change: '⬆️ زيادة ٢٪ عن الشهر اللي فات',
      icon: <FileText size={28} className="text-yellow-500" />,
      color: 'text-yellow-500',
    },
    {
      title: 'عدد التقديمات اللي اتبعتت',
      value: '١٠٠',
      desc: '٢٥ تقديم بعتهم الشهر ده',
      change: '⬆️ زيادة ١٠٪ عن الشهر اللي فات',
      icon: <Send size={28} className="text-purple-500" />,
      color: 'text-purple-500',
    },
    {
      title: 'نمو الشبكة المهنية',
      value: '٢٠',
      desc: '٥٠ كونكشن جديد',
      change: '⬆️ زيادة ٧٪ عن الشهر اللي فات',
      icon: <Users size={28} className="text-blue-400" />,
      color: 'text-blue-400',
    },
  ];

  const skillBars = [
    { label: 'التواصل', value: 70, color: 'bg-blue-400' },
    { label: 'حل المشكلات', value: 55, color: 'bg-indigo-400' },
    { label: 'القيادة', value: 45, color: 'bg-violet-500' },
    { label: 'المهارات التقنية', value: 60, color: 'bg-purple-500' },
    { label: 'الشغل الجماعي', value: 50, color: 'bg-fuchsia-500' },
  ];

  const interviews = [
    { company: 'شركة نمو', role: 'مسؤول تسويق', date: 'الأحد ١٠ أغسطس - ١٠:٠٠ صباحًا' },
    { company: 'تقانة', role: 'مصمم واجهات', date: 'الثلاثاء ١٢ أغسطس - ٢:٠٠ مساءً' },
  ];

  const activities = [
    { icon: <PenLine size={18} />, text: 'تم تحديث السيرة الذاتية', time: 'من ٥ دقايق' },
    { icon: <Send size={18} />, text: 'تم إرسال طلب التقديم', time: 'من ساعة' },
    { icon: <Star size={18} />, text: 'حصلت على بادج جديد', time: 'من يوم' },
    { icon: <Clock size={18} />, text: 'تم تحديد متابعة لاحقة', time: 'من يومين' },
  ];

  const aiNotes = [
    { label: 'Resume Keywords', note: 'الكلمات المفتاحية مش كفاية' },
    { label: 'Cover Letter Tone', note: 'اللهجة رسمية بزيادة' },
    { label: 'Skill Match', note: 'فيه عدم تطابق في المهارات' },
  ];

  const achievements = [
    { icon: <CheckCircle size={24} />, title: 'أول تقديم ناجح', desc: 'تم إرسال أول تقديم من خلال أوجي', date: '١ يونيو' },
    { icon: <Star size={24} />, title: 'بادج مميز', desc: 'حصلت على أول بادج إنجاز', date: '٥ يونيو' },
    { icon: <TrendingUp size={24} />, title: 'تحسين السيرة', desc: 'وصلت تقييم ٨٠٪ للسيرة', date: '١٠ يونيو' },
    { icon: <Users size={24} />, title: 'أصدقاء جدد', desc: 'أضفت ٢٠ كونكشن مهني', date: '١٢ يونيو' },
    { icon: <FileText size={24} />, title: 'تحميل سيرة جديدة', desc: 'رفعت سيرة ذاتية محدّثة', date: '١٥ يونيو' },
    { icon: <CalendarCheck size={24} />, title: 'أول مقابلة', desc: 'حددت أول مقابلة عمل', date: '٢٠ يونيو' },
  ];

  return (
    <div dir="rtl" className="bg-gradient-to-b from-blue-50 to-white min-h-screen p-6 md:p-10 font-[montaser]">
      {/* لو المستخدم عايز يعدل بياناته */}
      {showProfileManager ? (
        <ProfileManager onBack={() => setShowProfileManager(false)} />
      ) : (
        <>
          {/* Header */}
          <div className="mb-10 text-right">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">أهلاً بيك، أحمد 👋</h1>
            <p className="text-gray-600 text-sm md:text-base">
              اتابع مشوارك في التقديمات، اكتشف فرص جديدة، وطور سيرتك الذاتية.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-start mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm hover:bg-blue-700 w-full md:w-auto">
                ابدأ تقديم جديد
              </button>
              <button
                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-xl text-sm hover:bg-gray-200 w-full md:w-auto"
                onClick={() => setShowProfileManager(true)}
              >
                حدّث بياناتك
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100 flex flex-col justify-between hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className={`text-sm font-semibold ${card.color}`}>{card.title}</h2>
                  {React.cloneElement(card.icon, { className: `${card.color}`, size: 28 })}
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-blue-800">{card.value}</span>
                  <span className="text-lg text-blue-800">٪</span>
                </div>
                <p className="text-sm text-gray-500">{card.desc}</p>
                <p className="text-xs text-green-600 mt-2">{card.change}</p>
              </div>
            ))}
          </div>

          {/* Additional Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* المقابلات الجاية */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-blue-800">المقابلات الجاية</h2>
                <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
                  <CalendarCheck size={16} /> ضيف مقابلة جديدة
                </button>
              </div>
              <ul className="space-y-4 text-sm">
                {interviews.map((item, idx) => (
                  <li key={idx} className="border rounded-xl p-4 bg-blue-50">
                    <div className="font-semibold text-gray-900">{item.company}</div>
                    <div className="text-gray-700">{item.role}</div>
                    <div className="text-xs text-gray-500 text-left">{item.date}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* درجة السيرة الذاتية */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 flex flex-col justify-between">
              <h2 className="text-lg font-bold text-blue-800 mb-4">درجة السيرة الذاتية</h2>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-blue-600">٨٢٪</div>
                <p className="text-sm text-gray-600 mt-2">
                  لسه فاضلك شوية عشان توصل للـ ٩٠٪ وتخلي سيرتك تبان قدّام الشركات
                </p>
              </div>
              <button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-xl hover:bg-blue-700 self-center">
                طوّر سيرتك دلوقتي
              </button>
            </div>
          </div>

          {/* نظرة عامة + تطوير المهارات */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* نظرة عامة على التقديمات */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 relative">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-blue-800">نظرة عامة على التقديمات</h2>
                <button className="text-sm text-blue-600 hover:underline">عرض الكل</button>
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-700 mb-2">٢٥ / ٥٠ تقديم</div>
                <div className="w-full bg-blue-100 h-3 rounded-full">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                <div>اتقدمت: <span className="font-bold text-gray-900">٢٥</span></div>
                <div>مقابلات: <span className="font-bold text-blue-600">٣</span></div>
                <div>اتقبلت: <span className="font-bold text-green-600">١</span></div>
                <div>اترفضت: <span className="font-bold text-red-500">٥</span></div>
              </div>
            </div>

            {/* تطوير المهارات */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-blue-800">تطوير المهارات</h2>
                <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
                  <Lightbulb size={16} /> قيّم مهاراتك
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-6">اعرف إيه المهارات اللي محتاج تشتغل عليها</p>
              <div className="space-y-4">
                {skillBars.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1 text-sm text-gray-700">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="w-full bg-blue-100 h-3 rounded-full">
  <div className={`${skill.color} h-3 rounded-full`} style={{ width: `${skill.value}%` }}></div>
</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* آخر النشاطات + ملاحظات الذكاء الاصطناعي */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* آخر النشاطات */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-blue-800">آخر النشاطات</h2>
                <button className="text-sm text-blue-600 hover:underline">عرض الكل</button>
              </div>
              <ul className="space-y-4 text-sm">
                {activities.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-500">{item.icon}</span>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ملاحظات الذكاء الاصطناعي */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <h2 className="text-lg font-bold text-blue-800 mb-4">ملاحظات أوجي </h2>
              <ul className="space-y-4 text-sm">
                {aiNotes.map((note, idx) => (
                  <li key={idx} className="flex flex-col">
                    <span className="font-semibold text-gray-800">{note.label}</span>
                    <span className="text-xs text-gray-500">{note.note}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-4 text-sm text-blue-600 hover:underline">تقرير كامل</button>
            </div>
          </div>

          {/* إنجازاتك */}
          <div className="mt-10">
            <h2 className="text-lg font-bold text-blue-800 mb-4">إنجازاتك</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((ach, idx) => (
                <div key={idx} className="bg-white border border-blue-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-600">{React.cloneElement(ach.icon, { className: 'text-blue-600' })}</span>
                    <span className="font-semibold text-blue-600">{ach.title}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{ach.desc}</p>
                  <p className="text-xs text-gray-400">{ach.date}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div dir="ltr">
        <Footer />
      </div>
      {showGoTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
          title="ارجع للأعلى"
        >
          <ArrowUp size={20} />
        </button>
      )}


    </div>
  );
};

export default AUJIDashboard;
