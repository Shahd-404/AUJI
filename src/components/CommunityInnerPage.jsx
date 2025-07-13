// 📁 src/pages/CommunityInnerPage.jsx
export default function CommunityInnerPage() {
  return (
    <div dir="rtl" className="px-6 py-10">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">🌐 موضوع: النساء في التقنية</h1>

      {/* بوستات المجتمع هنا */}
      <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
        <div className="flex items-center gap-3 mb-2">
          <img src="/avatars/user1.png" className="w-10 h-10 rounded-full" alt="user" />
          <h3 className="font-bold text-blue-700">سارة يوسف</h3>
        </div>
        <p className="text-gray-700 mb-2">
          استفدت جدًا من حدث الأمس! حابة أشارك مصادر إضافية عن النساء في الذكاء الاصطناعي.
        </p>
        <div className="flex gap-3 text-sm text-gray-500">
          <button>❤️ إعجاب</button>
          <button>💬 تعليق</button>
          <button>🔁 مشاركة</button>
        </div>
      </div>
    </div>
  );
}
