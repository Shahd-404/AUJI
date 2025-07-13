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
  ThumbsUp
} from 'lucide-react';

export default function CourseRecommendations() {
  const [filter, setFilter] = useState('popular');

  const courses = [
    {
      id: 1,
      title: 'أساسيات التسويق الرقمي',
      img: '/images/course-cover1.jpg',
      joined: 1200,
      rating: 4.8,
      badge: 'تريند #1'
    },
    {
      id: 2,
      title: 'البرمجة بلغة Python',
      img: '/images/course-cover2.jpg',
      joined: 980,
      rating: 4.7,
      badge: 'مفضل الطلاب'
    },
    {
      id: 3,
      title: 'تحسين محركات البحث (SEO)',
      img: '/images/course-cover3.jpg',
      joined: 1120,
      rating: 4.6,
      badge: ''
    },
    {
      id: 4,
      title: 'تصميم تجربة المستخدم (UX)',
      img: '/images/course-cover4.jpg',
      joined: 1040,
      rating: 4.9,
      badge: 'مفضل الطلاب'
    }
  ];

  const filters = [
    { id: 'popular', label: 'الأكثر تسجيلًا' },
    { id: 'rating', label: 'الأعلى تقييمًا' },
    { id: 'shortest', label: 'المدة الأقصر' }
  ];

  return (
    <div dir="rtl" className="mt-20 px-6 md:px-20 text-lg">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 flex items-center gap-3">
          <Flame className="w-8 h-8 text-red-500" /> الأكتر شهرة وتفاعلًا هذا الأسبوع
        </h2>

        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`text-base rounded-full px-4 py-2 border transition font-semibold ${
                filter === f.id
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-purple-300 text-purple-600 hover:bg-purple-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-5 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-blue-800 line-clamp-2">
                  {course.title}
                </h3>
                {course.badge && (
                  <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" /> {course.badge}
                  </span>
                )}
              </div>
              <p className="text-base text-gray-500">انضم {course.joined} طالب هذا الأسبوع</p>
              <div className="text-base text-yellow-500 flex items-center gap-1">
                <Star className="w-4 h-4" /> {course.rating.toFixed(1)}
              </div>
              <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white py-2.5 px-5 rounded-xl text-base font-semibold">
                ابدأ الكورس
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}