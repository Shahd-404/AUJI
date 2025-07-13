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
  Tag
} from 'lucide-react';

export default function CourseLearningTracks() {
  const tracks = [
    {
      id: 1,
      title: 'مسار تطوير الويب',
      description: 'ابدأ من HTML وانطلق حتى React واصنع تطبيقات حقيقية',
      coursesCount: 6,
      progress: 42,
      badge: 'الأكثر طلبًا'
    },
    {
      id: 2,
      title: 'مسار التسويق الرقمي',
      description: 'تعلم استراتيجيات المحتوى، الإعلانات، وتحليل البيانات',
      coursesCount: 5,
      progress: 0,
      badge: 'مناسب للمبتدئين'
    },
    {
      id: 3,
      title: 'مسار تطوير الذات',
      description: 'طور مهاراتك الشخصية، التفكير النقدي، وإدارة الوقت',
      coursesCount: 4,
      progress: 75,
      badge: ''
    }
  ];

  return (
    <div dir="rtl" className="mt-20 px-6 md:px-20 text-lg">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-10 flex items-center gap-4">
        <Compass className="w-10 h-10 text-purple-600" /> أكمل مسارك التعليمي
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col gap-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-purple-700">
                {track.title}
              </h3>
              {track.badge && (
                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag className="w-4 h-4" /> {track.badge}
                </span>
              )}
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              {track.description}
            </p>
            <p className="text-base text-gray-500">عدد الكورسات: {track.coursesCount}</p>

            {track.progress > 0 && (
              <>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div
                    className="bg-purple-500 h-3 rounded-full"
                    style={{ width: `${track.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">تقدّمك: {track.progress}%</p>
              </>
            )}

            <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white py-2.5 px-5 rounded-xl text-base font-semibold">
              ادخل المسار
            </button>

            <p className="text-base text-green-700 mt-2 flex items-center gap-2">
              <Award className="w-5 h-5" /> عند الإكمال: شهادة + Badge "{track.title.includes('الويب') ? 'مطور واجهات' : 'متميز'}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}