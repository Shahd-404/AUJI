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
  Eye
} from 'lucide-react';

export default function CourseRecommendations() {
  const courses = [
    {
      id: 1,
      title: 'مهارات التواصل الفعال',
      level: 'متوسط',
      reason: 'لأنك مهتم بالمهارات الشخصية',
      learners: 540,
      duration: '3 ساعات – 6 دروس',
      badge: 'شائع هذا الأسبوع'
    },
    {
      id: 2,
      title: 'تعلّم JavaScript من الصفر',
      level: 'مبتدئ',
      reason: 'لأنك خلّصت كورس HTML',
      learners: 890,
      duration: '5 ساعات – 10 دروس',
      badge: 'الأكتر تفاعلًا'
    },
    {
      id: 3,
      title: 'أساسيات التفكير النقدي',
      level: 'مبتدئ',
      reason: 'لأنك بدأت كورسات تطوير الذات',
      learners: 270,
      duration: '2.5 ساعة – 5 دروس',
      badge: ''
    }
  ];

  return (
    <div dir="rtl" className="mt-20 px-6 md:px-20 text-lg">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 flex items-center gap-3">
          <Eye className="w-8 h-8 text-purple-600" /> أوجي شايف إن الكورسات دي هتناسبك
        </h2>
        <button className="text-base text-purple-600 hover:underline flex items-center gap-1">
          <RefreshCw className="w-4 h-4" /> أعد الترشيح
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-blue-800">{course.title}</h3>
              {course.badge && (
                <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">
                  {course.badge}
                </span>
              )}
            </div>
            <p className="text-base text-gray-500">{course.reason}</p>
            <p className="text-base text-gray-600">المستوى: {course.level}</p>
            <div className="flex justify-between text-base text-gray-500">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {course.learners} يدرسوه الآن</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
            </div>
            <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white py-2.5 px-5 rounded-xl text-base font-semibold">
              ابدأ الآن
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="text-base text-blue-600 hover:underline flex items-center justify-center gap-2">
          <Zap className="w-5 h-5" /> جرب كورس عشوائي من ترشيحات أوجي
        </button>
      </div>
    </div>
  );
}