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
  Award
} from 'lucide-react';

export default function CourseCertificatesAndBadges() {
  const certificates = [
    {
      id: 1,
      course: 'تحليل البيانات للمبتدئين',
      date: '20 يونيو 2025',
      certId: '#OUJI-CERT-9021'
    },
    {
      id: 2,
      course: 'إدارة الوقت الفعال',
      date: '4 يوليو 2025',
      certId: '#OUJI-CERT-9277'
    }
  ];

  const badges = [
    { id: 'active-learner', name: 'متعلم نشط', earned: true, reason: 'أنهيت 5 كورسات بنجاح' },
    { id: 'community-helper', name: 'مساعد المجتمع', earned: true, reason: 'شاركت في 10 مواضيع في المنتدى' },
    { id: 'challenge-winner', name: 'بطل التحديات', earned: true, reason: 'فزت بتحديين أسبوعيين' },
    { id: 'full-track', name: 'مسار مكتمل', earned: false, reason: 'أنهِ مسار تعليمي كامل للحصول عليها' },
    { id: 'legend-ouji', name: 'Legend of Ouji', earned: false, reason: 'احصل على 10000 XP لتفعيل هذه الشارة النادرة' }
  ];

  return (
    <div dir="rtl" className="mt-20 px-6 md:px-20 text-lg">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-10 flex items-center gap-4">
        <BadgeCheck className="w-10 h-10 text-purple-600" /> شهاداتك وشاراتك في أوجي
      </h2>

      {/* Certificates Section */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold text-purple-700 mb-6 flex items-center gap-2">
          <FileText className="w-6 h-6 text-purple-500" /> شهاداتك
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" /> شهادة: {cert.course}
              </h4>
              <p className="text-base text-gray-600 mb-1">تم الحصول عليها في {cert.date}</p>
              <p className="text-sm text-gray-400 mb-4">{cert.certId} | ختم أوجي</p>
              <div className="flex gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full text-base font-semibold flex items-center gap-2">
                  <Download className="w-4 h-4" /> تحميل الشهادة
                </button>
                <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-full text-base font-semibold">
                  شاركها على LinkedIn
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="text-base text-blue-600 hover:underline flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> تحميل كل الشهادات
          </button>
        </div>
      </div>

      {/* Badges Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-purple-700 mb-6 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-500" /> شاراتك
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`text-center border rounded-xl p-5 shadow-sm text-base font-medium transition flex flex-col items-center gap-2 ${
                badge.earned
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-gray-100 border-gray-200 text-gray-400'
              }`}
              title={badge.reason}
            >
              {badge.earned ? <Award className="w-6 h-6 text-blue-600" /> : <Lock className="w-6 h-6" />} {badge.name}
            </div>
          ))}
        </div>
      </div>

      {/* Suggest Combined Certificate */}
      <div className="mt-14 bg-purple-50 border border-purple-200 text-purple-700 text-center p-6 rounded-2xl flex items-center justify-center gap-3 text-lg">
        <Flame className="w-6 h-6" /> أنهيت 3 كورسات في نفس المجال؟ اقترحلي شهادة مجمّعة
      </div>
    </div>
  );
}