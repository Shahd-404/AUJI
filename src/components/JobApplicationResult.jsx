// 📁 src/pages/JobApplicationResult.jsx
import React from "react";
import {
  Users,
  CheckCircle,
  XCircle,
  ExternalLink,
  MapPin,
  CalendarDays,
  Clock,
  FileText,
  Github,
  Linkedin
} from 'lucide-react';

const MatchProgressBar = ({ matchPercentage }) => {
  const getColor = (value) => {
    if (value < 40) return 'bg-red-500';
    if (value <= 70) return 'bg-orange-400';
    return 'bg-green-500';
  };

  const requiredSkills = ['React', 'JavaScript', 'Tailwind', 'Figma'];
  const userSkills = ['React', 'JavaScript', 'CSS'];

  return (
    <div className="bg-white border rounded-xl p-5 shadow mb-6">
      <p className="text-right text-sm mb-2 font-medium text-gray-800">
        توافقك مع الوظيفة: {matchPercentage}%
      </p>

      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className={`h-4 rounded-full ${getColor(matchPercentage)}`}
          style={{ width: `${matchPercentage}%` }}
        ></div>
      </div>

      <div className="text-right">
        <p className="font-semibold mb-2">المهارات المطلوبة للوظيفة:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {requiredSkills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="font-semibold mb-2">المهارات المتوفرة عندك:</p>
        <div className="flex flex-wrap gap-2">
          {requiredSkills.map((skill, i) => {
            const hasSkill = userSkills.includes(skill);
            return (
              <span
                key={i}
                className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 ${
                  hasSkill
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {skill} {hasSkill ? '✅' : '❌'}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const applicantsStats = [
  {
    icon: <Users className="w-5 h-5 text-blue-600" />,
    label: "إجمالي المتقدّمين",
    value: "248"
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-green-600" />,
    label: "اللي اتبعتلهم مقابلة",
    value: "10"
  },
  {
    icon: <XCircle className="w-5 h-5 text-red-600" />,
    label: "نسبة القبول",
    value: "4.0%"
  }
];

const interviewees = [
  {
    name: "أحمد حسن",
    role: "Frontend Developer في Orange Egypt",
    location: "القاهرة، مصر",
    experience: "سنتين خبرة",
    skills: ["React", "JavaScript", "CSS"],
  },
  {
    name: "فاطمة الزهراء",
    role: "Web Developer في Etisalat Egypt",
    location: "الإسكندرية، مصر",
    experience: "سنة ونص خبرة",
    skills: ["React", "Vue.js", "JavaScript"],
  },
  {
    name: "عمر محمود",
    role: "Junior Developer في Fawry",
    location: "القاهرة، مصر",
    experience: "سنة واحدة",
    skills: ["React", "Node.js", "JavaScript"]
  },
  {
    name: "نور عبد الرحمن",
    role: "Frontend Developer في Paymob",
    location: "القاهرة، مصر",
    experience: "سنتين خبرة",
    skills: ["React", "TypeScript", "Tailwind"]
  },
  {
    name: "مريم خالد",
    role: "Junior Frontend Developer في Instabug",
    location: "القاهرة، مصر",
    experience: "سنة خبرة",
    skills: ["React", "JavaScript", "CSS3"]
  },
  {
    name: "كريم مصطفى",
    role: "Frontend Developer في Vezeeta",
    location: "القاهرة، مصر",
    experience: "سنتين خبرة",
    skills: ["React", "Next.js", "JavaScript"]
  },
  {
    name: "آية سمير",
    role: "Web Developer في Jumia Egypt",
    location: "القاهرة، مصر",
    experience: "سنة ونص خبرة",
    skills: ["React", "Angular", "JavaScript"]
  },
  {
    name: "حسن إبراهيم",
    role: "Junior Developer في Careem",
    location: "القاهرة، مصر",
    experience: "سنة خبرة",
    skills: ["React", "Express.js", "JavaScript"]
  },
  {
    name: "سلمى أحمد",
    role: "Web Developer في Swvl",
    location: "القاهرة، مصر",
    experience: "سنة ونص خبرة",
    skills: ["React", "Vue.js", "JavaScript"]
  },
  {
    name: "ياسر علي",
    role: "Frontend Intern في Noon Egypt",
    location: "القاهرة، مصر",
    experience: "حديث التخرج",
    skills: ["React", "HTML", "CSS"]
  },
];

const JobApplicationResult = () => {
  return (
    <div className="p-6 bg-white font-montaser text-right" dir="rtl">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">لوحة متابعة التقديم</h1>
      <p className="text-gray-600 mb-6">أهلاً بيك يا محمد ناجي 👋، هنا هتقدر تتابع حالة تقديمك وتشوف المنافسة</p>

      {/* Job Details */}
      <div className="bg-gray-50 border rounded-xl p-5 shadow mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold">مطور واجهات أمامية - جونيور</h2>
          <div className="flex gap-2">
            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">دوام كامل</span>
            <a href="#" className="text-sm bg-white border px-3 py-1 rounded-md flex items-center gap-1">
              <ExternalLink className="w-4 h-4" /> عرض الإعلان الأصلي
            </a>
          </div>
        </div>
        <div className="text-sm text-gray-600 flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> القاهرة، مصر</span>
          <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> نُشر: 15 ديسمبر 2024</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> آخر موعد: 30 ديسمبر 2024</span>
        </div>
        <p className="text-gray-700 text-sm">انضم لفريق Vodafone Egypt واشتغل على تطبيقات ويب حديثة باستخدام React وJavaScript.</p>
      </div>

      <MatchProgressBar matchPercentage={68} />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {applicantsStats.map((stat, index) => (
          <div key={index} className="bg-white border shadow rounded-xl p-4 flex items-center gap-3">
            {stat.icon}
            <div>
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Interview Invitees */}
      <div>
        <h3 className="text-xl font-bold text-green-700 mb-4">✅ المقبولين في المقابلة (10)</h3>
        <div className="space-y-4">
          {interviewees.map((person, idx) => (
            <div key={idx} className="bg-gray-50 border p-4 rounded-lg shadow flex flex-col md:flex-row justify-between md:items-center">
              <div>
                <h4 className="text-md font-semibold text-blue-800">{person.name}</h4>
                <p className="text-sm text-gray-600">{person.role}</p>
                <p className="text-xs text-gray-500">{person.location} - {person.experience}</p>
              </div>
              <div className="flex flex-col md:items-end gap-2 mt-3 md:mt-0">
                <div className="flex flex-wrap gap-2">
                  {person.skills.map((skill, i) => (
                    <span key={i} className="bg-white border text-sm px-2 py-1 rounded-full text-gray-700">{skill}</span>
                  ))}
                  <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">+1</span>
                </div>
                <div className="flex gap-3 text-gray-600">
                  <Linkedin className="w-4 h-4 hover:text-blue-600 cursor-pointer" />
                  <Github className="w-4 h-4 hover:text-black cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobApplicationResult;