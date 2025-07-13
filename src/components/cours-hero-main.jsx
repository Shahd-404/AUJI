import { useNavigate } from 'react-router-dom';
import { Calendar, Users, BadgeCheck, Flame } from 'lucide-react';

export default function CoursesHero() {
  const navigate = useNavigate();

  return (
    <div dir="rtl" className="bg-gradient-to-br from-blue-50 to-purple-100 py-16 px-6 md:px-24">
      {/* Courses count bar */}
      <div className="text-base text-gray-700 mb-6 text-center md:text-right font-medium">
        <BadgeCheck className="inline-block w-5 h-5 text-purple-600 ml-1" />
        ١٢٨ كورس متاح لك الآن
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-right">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            أهلاً، <span className="text-purple-600">شاددو</span>
            <span className="ml-2"></span> جاهز تطوّر مستقبلك؟
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            ابدأ رحلة التعلّم واختر كورس يناسبك من ترشيحات أوجي الذكية
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-7 rounded-2xl shadow-lg transition">
              رشّحلي كورس <Flame className="inline w-5 h-5 ml-1" />
            </button>
            <button className="bg-white border border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold py-4 px-7 rounded-2xl shadow-md transition">
              استعرض كل الكورسات <Users className="inline w-5 h-5 ml-1" />
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="absolute top-0 right-0 bg-yellow-400 text-white text-sm font-bold px-4 py-1 rounded-bl-2xl shadow-md">
            XP
          </div>

          <img
            src="/images/student-illustration.jpg"
            alt="طالب يتعلم"
            className="w-full max-w-sm mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* Section: Continue Learning */}
      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-right">
          رجعنا لك اللي بدأت فيه
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-purple-700">مقدمة في التصميم</h3>
                  <p className="text-sm text-gray-600">المستوى: مبتدئ</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  <BadgeCheck className="inline w-4 h-4 ml-1" /> شارة عند الإكمال
                </span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-4">
                <div className="bg-purple-500 h-4 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>XP: 120</span>
                <span>4 / 10 دروس</span>
                <span><Users className="inline w-4 h-4 ml-1" /> 350 بيدرسوه الآن</span>
              </div>

              <div className="flex gap-4 mt-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold">
                  استكمل
                </button>
                <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-xl text-sm font-semibold">
                  تمرّن
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Upcoming Events */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-5">
              <Calendar className="inline w-5 h-5 ml-2 text-purple-600" /> الأحداث القادمة
            </h3>
            <div className="flex flex-col gap-6">
              <div className="border border-purple-200 rounded-xl p-5">
                <p className="text-sm text-gray-500 mb-1">15 يوليو – 7 مساءً</p>
                <h4 className="text-lg font-semibold text-purple-700">الذكاء الاصطناعي في العالم العربي</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <Users className="inline w-4 h-4 ml-1" /> 320 سجلوا
                </p>
                <button
                  onClick={() => navigate("/community/topic")}
                  className="mt-3 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl text-sm font-semibold"
                >
                  سجل الآن
                </button>
              </div>
            </div>
          </div>

          {/* Trending Topics */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-5">
              <Flame className="inline w-5 h-5 ml-2 text-blue-600" /> المواضيع الشائعة في المجتمع
            </h3>
            <div className="flex flex-col gap-6">
              <div className="border border-blue-200 rounded-xl p-5">
                <h4 className="text-lg font-semibold text-blue-700">النساء في التقنية</h4>
                <p className="text-sm text-gray-500 mt-1">
                  📄 42 منشور – 💬 108 تعليق – ❤️ 230 إعجاب
                </p>
                <button
                  onClick={() => navigate('/community/topic')}
                  className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-semibold"
                >
                  انضم الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}