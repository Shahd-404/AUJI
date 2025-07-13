import { useState } from 'react';
import { User, Star, Flame, Clock, Medal, ArrowUpRight, Search, Trophy, Zap, MessageCircle } from 'lucide-react';

export default function CourseLeaderboard() {
  const [period, setPeriod] = useState('week');
  const [category, setCategory] = useState('all');

  const leaderboard = [
    {
      id: 1,
      name: 'شهد خالد',
      avatar: <User className="w-6 h-6 text-purple-600" />, 
      xp: 12300,
      badges: [<Star key={1} className="w-4 h-4 text-yellow-500" />, <Star key={2} className="w-4 h-4 text-yellow-500" />, <Flame key={3} className="w-4 h-4 text-red-500" />],
      lastActive: 'نشطة منذ 3 ساعات'
    },
    {
      id: 2,
      name: 'أحمد ياسر',
      avatar: <User className="w-6 h-6 text-purple-600" />, 
      xp: 11870,
      badges: [<Star key={1} className="w-4 h-4 text-yellow-500" />, <MessageCircle key={2} className="w-4 h-4 text-blue-500" />],
      lastActive: 'نشط منذ يوم'
    },
    {
      id: 3,
      name: 'ملك مجدي',
      avatar: <User className="w-6 h-6 text-purple-600" />, 
      xp: 11100,
      badges: [<Star key={1} className="w-4 h-4 text-yellow-500" />, <Flame key={2} className="w-4 h-4 text-red-500" />],
      lastActive: 'نشطة الآن'
    }
  ];

  return (
    <div dir="rtl" className="mt-20 px-6 md:px-20 text-lg">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-10 flex items-center gap-4">
        <Medal className="w-10 h-10 text-purple-600" /> لوحة الشرف – مين متصدّر هذا الأسبوع؟
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-10 items-center">
        <div className="flex gap-2">
          {['week', 'month', 'all'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`text-base px-5 py-2 rounded-full font-semibold transition ${
                period === p
                  ? 'bg-purple-600 text-white'
                  : 'border border-purple-300 text-purple-600 hover:bg-purple-50'
              }`}
            >
              {p === 'week' ? 'هذا الأسبوع' : p === 'month' ? 'هذا الشهر' : 'كل الوقت'}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-500" />
          <label htmlFor="category" className="text-base text-gray-700">
            المجال:
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-base border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-purple-500"
          >
            <option value="all">الكل</option>
            <option value="programming">برمجة</option>
            <option value="design">تصميم</option>
            <option value="self">تطوير ذاتي</option>
            <option value="marketing">تسويق</option>
          </select>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="w-full text-lg text-right border border-gray-200">
          <thead className="bg-blue-50 text-blue-800">
            <tr>
              <th className="px-5 py-4">#</th>
              <th className="px-5 py-4">الاسم</th>
              <th className="px-5 py-4">الصورة</th>
              <th className="px-5 py-4">XP</th>
              <th className="px-5 py-4">الشارات</th>
              <th className="px-5 py-4">آخر نشاط</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user) => (
              <tr key={user.id} className="text-gray-700 border-t bg-white hover:bg-gray-50 transition">
                <td className="px-5 py-4 font-bold text-purple-600">{user.id}</td>
                <td className="px-5 py-4">{user.name}</td>
                <td className="px-5 py-4">{user.avatar}</td>
                <td className="px-5 py-4 font-semibold text-blue-700">{user.xp.toLocaleString()}</td>
                <td className="px-5 py-4 flex gap-1">{user.badges}</td>
                <td className="px-5 py-4 text-gray-500">{user.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Your Rank Section */}
      <div className="mt-10 bg-white border border-purple-200 rounded-2xl shadow-md p-6 text-lg text-blue-800">
        <div className="flex items-center gap-2 mb-2">
          <User className="w-6 h-6 text-purple-600" />
          ترتيبك الحالي: <span className="font-bold">#8</span> | XP: 9,200
        </div>
        <div className="text-green-600 flex items-center gap-2">
          <ArrowUpRight className="w-5 h-5" /> باقي 500 XP وتدخل التوب 5!
        </div>
        <button className="mt-3 text-base text-purple-600 underline hover:text-purple-800">اعرف إزاي تزود XP</button>
      </div>

      {/* Highlights */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 flex items-center gap-3">
          <Trophy className="w-5 h-5 text-purple-600" /> أبطال التحدي: <span className="font-semibold">شهد، ياسر، سارة</span>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-center gap-3">
          <Zap className="w-5 h-5 text-blue-600" /> أسرع متعلم: <span className="font-semibold">أدهم</span> خلص كورس في أقل من 6 ساعات
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-center gap-3">
          <MessageCircle className="w-5 h-5 text-green-600" /> مساعد المجتمع: <span className="font-semibold">فرح</span> جاوبت على 24 سؤال
        </div>
      </div>
    </div>
  );
}