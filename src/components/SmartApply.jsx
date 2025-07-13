// 📁 src/pages/SmartApplyDashboard.jsx
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { Dialog } from '@headlessui/react';
import {
  ExternalLink,
  MapPin,
  CalendarDays,
  Clock,
  FileText,
  Globe,
  Paperclip,
  UserPlus,
  LayoutTemplate,
  ArrowUp
} from 'lucide-react';

const acceptedApplicants = [
  "أحمد حسن", "فاطمة الزهراء", "عمر محمود", "نور عبد الرحمن", "مريم خالد",
  "كريم مصطفى", "آية سمير", "حسن إبراهيم", "سلمى أحمد", "ياسر علي"
];

const jobStatusContent = {
  'مقابلة شخصية': {
    color: 'bg-purple-100 border-purple-200 text-purple-800',
    title: '📞 تم اختيارك لمقابلة شخصية!',
    message: 'هيتم التواصل معاك قريبًا لتحديد معاد المقابلة',
  },
  'تم الإرسال': {
    color: 'bg-yellow-100 border-yellow-200 text--800',
    title: '⏳ جاري مراجعة طلبك',
    message: 'طلبك لسه بيتراجع ضمن باقي المتقدّمين',
  },
  'عرض وظيفي': {
    color: 'bg-orange-100 border-orange-200 text-orange-800',
    title: '🎉 مبروك! تم اختيارك للحصول على عرض وظيفي',
    message: 'راجع بريدك الإلكتروني لتفاصيل العرض',
  },
  'مسودة': {
    color: 'bg-blue-100 border-blue-200 text-blue-800',
    title: '📝 لسه ما خلصتش التقديم',
    message: 'كمل بياناتك واضغط إرسال لما تكون جاهز',
  },
  'مرفوض': {
    color: 'bg-red-50 border-red-200 text-red-600',
    title: '❌ للأسف، ما تمش اختيارك للمقابلة',
    message: 'إنت و 237 متقدّم تانيين ما تمش اختياركم في المرحلة دي',
  },
};

const requirements = [
  {
    title: "CV",
    icon: FileText,
    status: "uploaded",
    action: () => alert("تم رفع السيرة الذاتية")
  },
  {
    title: "Recommendation Letter",
    icon: UserPlus,
    status: "missing",
    action: () => alert("يرجى رفع خطاب الترشيح")
  },
  {
    title: "Behance Link",
    icon: ExternalLink,
    status: "uploaded",
    action: () => window.open("https://behance.net/your-profile", "_blank")
  },
  {
    title: "Cover Letter",
    icon: LayoutTemplate,
    status: "missing",
    action: () => alert("يرجى رفع خطاب التغطية")
  },
];

const statusStyles = {
  uploaded: {
    label: "✅ تم الرفع",
    color: "text-green-700",
    bg: "bg-green-100",
  },
  missing: {
    label: "⚠️ غير مرفوع",
    color: "text-red-700",
    bg: "bg-red-100",
  },
  optional: {
    label: "🟦 اختياري",
    color: "text-blue-700",
    bg: "bg-blue-100",
  },
};

const applicationStatusOptions = [
  { key: 'all', label: 'الكل', color: 'bg-gray-200 text-gray-800' },
  { key: 'تم الإرسال', label: 'تم الإرسال', color: 'bg-green-100 text-green-800' },
  { key: 'مقابلة شخصية', label: 'مقابلة شخصية', color: 'bg-purple-100 text-purple-800' },
  { key: 'عرض وظيفي', label: 'عرض وظيفي', color: 'bg-orange-100 text-orange-800' },
  { key: 'مسودة', label: 'مسودة', color: 'bg-blue-100 text-blue-800' },
  { key: 'مرفوض', label: 'مرفوض', color: 'bg-red-100 text-red-700' },
];

const allApplications = [
  {
    title: "عالم البيانات المبتدئ",
    company: "DataCraft Solutions",
    date: "15/6/2025",
    status: "مقابلة شخصية",
    color: "bg-purple-200 text-purple-800"
  },
  {
    title: "أخصائي تسويق",
    company: "BrandBoost Agency",
    date: "15/7/2025",
    status: "تم الإرسال",
    color: "bg-green-200 text-green-800"
  },
  {
    title: "متدرب مهندس برمجيات",
    company: "Innovate Tech",
    date: "15/6/2025",
    status: "عرض وظيفي",
    color: "bg-orange-200 text-orange-800"
  },
  {
    title: "مصمم UI/UX",
    company: "Creative Hub",
    date: "15/6/2025",
    status: "مسودة",
    color: "bg-blue-200 text-blue-800"
  }
];

const SmartApplyDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const selectedStatus = 'مسودة';
  const { color, title, message } = jobStatusContent[selectedStatus];

  const handleViewDetails = () => {
    setIsOpen(true);
  };

  const filteredApplications = filterStatus === 'all'
    ? allApplications
    : allApplications.filter(app => app.status === filterStatus);

  // Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-montaser bg-white p-6 md:p-10 space-y-10 relative" dir="rtl">

      {/* ✅ متطلبات التقديم */}
      <section className="bg-[#f7faff] border border-blue-100 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold text-blue-800 mb-2"> متطلبات التقديم</h2>
        <p className="text-sm text-gray-600 mb-6">يرجى استكمال المستندات المطلوبة للتقديم على وظيفة UI Designer</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requirements.map((req, index) => {
            const Status = statusStyles[req.status];
            const Icon = req.icon;
            return (
              <div key={index} className="bg-white border rounded-xl p-4 shadow-sm flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-full ${Status.bg} flex items-center justify-center mb-3`}>
                  <Icon className={`w-6 h-6 ${Status.color}`} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{req.title}</h3>
                <p className={`text-sm mb-3 ${Status.color}`}>{Status.label}</p>
                <button
                  onClick={req.action}
                  className="text-sm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  {req.status === "uploaded" ? "تعديل" : "ارفع الملف"}
                </button>
              </div>
            );
          })}
        </div>
      </section>


      {/* ✅ شريط فلترة سجل التقديمات */}
      <section>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
          {applicationStatusOptions.map(({ key, label, color }) => (
            <button
              key={key}
              onClick={() => setFilterStatus(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                filterStatus === key ? 'border-blue-600 font-bold' : 'border-gray-300'
              } ${color}`}
            >
              {label}
            </button>
          ))}
        </div>

        <section className="bg-[#f7faff] border border-blue-100 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-blue-800 mb-4"> سجل التقديمات</h2>
          <p className="text-gray-600 mb-4 text-sm">قائمة شاملة بكل الوظايف اللي قدمت فيها وحالتها الحالية.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredApplications.map((job, idx) => (
              <div key={idx} className="bg-white border p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800 text-sm">{job.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${job.color}`}>{job.status}</span>
                </div>
                <p className="text-xs text-gray-600">{job.company}</p>
                <p className="text-xs text-gray-500 mb-2">تاريخ التقديم: {job.date}</p>
                <button onClick={handleViewDetails} className="text-sm text-blue-600 hover:underline">عرض التفاصيل</button>
              </div>
            ))}
          </div>
        </section>
      </section>
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        aria-label="رجوع لأعلى"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div dir="ltr">
        <Footer />
      </div>
    </div>
  );
};

export default SmartApplyDashboard;
