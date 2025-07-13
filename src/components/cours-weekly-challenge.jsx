import { useState } from 'react';
import {
  User,
  Star,
  Flame,
  Clock,
  Medal,
  ArrowUpRight,
  Search,
  Trophy,
  Zap,
  MessageCircle,
  BadgeCheck,
  FileText,
  Download,
  Lock,
  Award,
  Compass,
  Tag,
  RefreshCw,
  Eye,
  BookOpen,
  CalendarDays,
  ThumbsUp,
  Target,
  Group,
  ScrollText,
  Rocket
} from 'lucide-react';

export default function CourseRecommendations() {
  const [filter, setFilter] = useState('popular');

  const challenge = {
    title: 'خلّص كورس "مبادئ التصميم" في 3 أيام',
    timeLeft: 'باقي 1 يوم و7 ساعات',
    participants: 1280,
    reward: '+500 XP + Badge "بطل التحدي"'
  };

  const userTeam = {
    name: 'Team Phoenix',
    points: 3300,
    rank: 3
  };

  const pastChallenges = [
    { title: 'تحدي تطوير الذات', winners: 'فريق DreamCode', xp: 400 },
    { title: 'تعلم CSS في يومين', winners: 'فريق FlexBoxers', xp: 500 },
    { title: 'مهارات التواصل', winners: 'Aya, Omar, Lina', xp: 300 }
  ];

  return (
    <div dir="rtl" className="mt-20 px-6 md:px-20 text-lg">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-10 flex items-center gap-3">
        <Zap className="w-8 h-8 text-purple-600" /> تحدي أوجي الأسبوعي
      </h2>

      {/* Current Challenge */}
      <div className="bg-white border border-purple-200 rounded-2xl shadow-md p-6 mb-10">
        <h3 className="text-xl font-semibold text-purple-700 mb-2 flex items-center gap-2">
          <Target className="w-5 h-5 text-purple-600" /> التحدي: {challenge.title}
        </h3>
        <p className="text-base text-gray-600 flex items-center gap-1"><Clock className="w-4 h-4" /> {challenge.timeLeft}</p>
        <p className="text-base text-gray-600 flex items-center gap-2">
          <User className="w-4 h-4" /> {challenge.participants} مشارك
          <Trophy className="w-4 h-4 text-yellow-600" /> الجائزة: {challenge.reward}
        </p>
        <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-base font-semibold">
          اشترك دلوقتي
        </button>
      </div>

      {/* User Squad */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl shadow-md p-6 mb-10">
        <h3 className="text-xl font-bold text-blue-800 mb-1 flex items-center gap-2">
          <Group className="w-5 h-5 text-blue-600" /> فريقك: {userTeam.name}
        </h3>
        <p className="text-base text-gray-600">نقاطكم: {userTeam.points} | الترتيب: المركز {userTeam.rank}</p>
        <button className="mt-2 text-base text-blue-600 underline">تابع تقدم الفريق</button>
      </div>

      {/* Past Challenges */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-purple-800 mb-5 flex items-center gap-2">
          <ScrollText className="w-5 h-5 text-purple-600" /> التحديات السابقة
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastChallenges.map((ch, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <p className="text-lg font-semibold text-blue-900 mb-1">{ch.title}</p>
              <p className="text-base text-gray-600">الفائز: {ch.winners}</p>
              <p className="text-base text-green-600 font-semibold">+{ch.xp} XP</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Creation */}
      <div className="mt-12 text-center">
        <p className="text-xl text-gray-700 font-medium mb-4 flex justify-center items-center gap-2">
          <Rocket className="w-5 h-5 text-blue-500" /> عايز تتعلم مع صحابك؟
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full text-base font-semibold">
            أنشئ فريقك الآن
          </button>
          <button className="bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 px-5 py-3 rounded-full text-base font-semibold">
            انضم لفريق موجود
          </button>
        </div>
      </div>
    </div>
  );
}