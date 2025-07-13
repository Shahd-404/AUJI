// 📁 src/pages/ProfileManager.jsx
import React, { useState } from "react";
import { Plus, Edit } from "lucide-react";

const initialProfiles = [
  {
    id: 1,
    name: "مطور ويب",
    field: "برمجة",
    desc: "بحب أطور مواقع واشتغل على مشاريع جديدة.",
    skills: ["React", "Node.js", "CSS"],
    active: true,
  },
  {
    id: 2,
    name: "مسوق رقمي",
    field: "تسويق",
    desc: "خبير في الحملات الرقمية والإعلانات.",
    skills: ["SEO", "Facebook Ads", "Copywriting"],
    active: false,
  },
];

export default function ProfileManager({ onBack }) {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [selected, setSelected] = useState(profiles[0]);
  const [editing, setEditing] = useState(false);
  const [img, setImg] = useState(null);

  // الأزرق الأساسي الصريح
  const mainBlue = "#2563eb";
  const darkBlue = "#1d4ed8";
  const lightBlue = "#eff6ff";

  // رفع الصورة
  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) setImg(URL.createObjectURL(file));
  };

  // تفعيل/تعطيل البروفايل
  const handleSwitch = () => {
    setSelected({ ...selected, active: !selected.active });
  };

  // تغيير القيم في الفورم
  const handleChange = (e) => {
    setSelected({ ...selected, [e.target.name]: e.target.value });
  };
  const handleSkills = (e) => {
    setSelected({ ...selected, skills: e.target.value.split(",") });
  };

  // حفظ التعديلات
  const handleSave = () => {
    setProfiles(
      profiles.map((p) => (p.id === selected.id ? selected : p))
    );
    setEditing(false);
  };

  return (
    <div className="flex flex-col gap-6 p-6 font-montasr bg-[#f7faff] min-h-screen" dir="rtl">
      {/* زر رجوع للداشبورد */}
      {onBack && (
        <button
          className="mb-4 w-fit text-[#2563eb] font-bold hover:underline flex items-center gap-1"
          onClick={onBack}
        >
          <span style={{ fontSize: 18 }}>←</span> رجوع للداشبورد
        </button>
      )}

      {/* سكشن البروفايل الرئيسي */}
      <section className="flex flex-col md:flex-row gap-8 w-full">
        {/* شمال: كارت البيانات */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-1/2 flex flex-col gap-4 relative">
          <span className="absolute top-4 left-4 text-sm font-bold text-gray-400 flex items-center gap-1">
            <Edit className="w-4 h-4" /> تعديل
          </span>
          <div className="flex flex-col items-center gap-2">
            {/* صورة المستخدم */}
            <div className="relative mb-2">
              <img
                src={img || "/avatars/default-user.jpg"}
                alt="صورة البروفايل"
                className="w-28 h-28 rounded-full object-cover border-4"
                style={{ borderColor: mainBlue }}
              />
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
                title="غيّر الصورة"
                onChange={handleImg}
              />
              <button
                className="absolute bottom-0 right-0 text-white text-xs rounded-full px-3 py-1 shadow"
                style={{
                  fontSize: "13px",
                  background: mainBlue,
                  border: `1.5px solid white`,
                }}
                tabIndex={-1}
                type="button"
              >
                رفع/تغيير الصورة
              </button>
            </div>
            <form className="w-full flex flex-col gap-3">
              <label className="text-right">اسم البروفايل</label>
              <input
                name="name"
                value={selected.name}
                onChange={handleChange}
                className="border rounded-xl p-2 w-full text-right focus:ring focus:ring-blue-200"
                disabled={!editing}
                placeholder="اكتب اسم البروفايل"
              />
              <label className="text-right">مجال التخصص</label>
              <input
                name="field"
                value={selected.field}
                onChange={handleChange}
                className="border rounded-xl p-2 w-full text-right focus:ring focus:ring-blue-200"
                disabled={!editing}
                placeholder="مثال: برمجة، تسويق، تصميم..."
              />
              <label className="text-right">وصف مختصر</label>
              <textarea
                name="desc"
                value={selected.desc}
                onChange={handleChange}
                className="border rounded-xl p-2 w-full text-right focus:ring focus:ring-blue-200"
                disabled={!editing}
                rows={2}
                placeholder="اكتب وصف مختصر عن نفسك"
              />
              <label className="text-right">المهارات (افصل بينهم بفاصلة)</label>
              <input
                name="skills"
                value={selected.skills.join(",")}
                onChange={handleSkills}
                className="border rounded-xl p-2 w-full text-right focus:ring focus:ring-blue-200"
                disabled={!editing}
                placeholder="مثال: React, تصميم, تسويق"
              />
              {/* السويتش الأزرق */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600">تفعيل البروفايل</span>
                <button
                  type="button"
                  className={`w-14 h-7 rounded-full flex items-center transition-colors relative ${selected.active ? "bg-[#2563eb]" : "bg-gray-300"}`}
                  onClick={editing ? handleSwitch : null}
                  style={{ border: `2px solid ${selected.active ? mainBlue : "#bbb"}` }}
                >
                  <span
                    className="inline-block h-6 w-6 rounded-full bg-white shadow transition-transform absolute"
                    style={{
                      right: selected.active ? '4px' : undefined,
                      left: !selected.active ? '4px' : undefined,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
                    }}
                  />
                </button>
              </div>
            </form>
            <div className="flex gap-4 justify-end w-full mt-2">
              <button
                className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl px-4 py-2"
                onClick={() => setEditing(false)}
                disabled={!editing}
              >
                إلغاء
              </button>
              <button
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-xl px-4 py-2"
                onClick={handleSave}
                disabled={!editing}
              >
                حفظ التغييرات
              </button>
            </div>
            {!editing && (
              <button
                className="mt-3 bg-[#2563eb] text-white px-4 py-2 rounded-xl hover:bg-[#1d4ed8] w-full"
                onClick={() => setEditing(true)}
              >
                عدّل البيانات
              </button>
            )}
          </div>
        </div>

        {/* يمين: كروت البروفايلات */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2 text-[#2563eb] text-right">بروفايلاتك</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className={`bg-white rounded-2xl shadow p-4 flex flex-col gap-2 border-r-4 ${profile.active ? "border-[#2563eb]" : "border-gray-300"}`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{profile.name}</span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${profile.active
                        ? "bg-[#eff6ff] text-[#2563eb]"
                        : "bg-gray-200 text-gray-500"
                      }`}
                  >
                    {profile.active ? "نشط" : "غير نشط"}
                  </span>
                </div>
                <span className="text-[#2563eb] font-medium">{profile.field}</span>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.slice(0, 3).map((s, i) => (
                    <span key={i} className="bg-[#eff6ff] text-[#2563eb] rounded-xl px-2 py-1 text-xs">{s}</span>
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    className="bg-[#2563eb] text-white px-3 py-1 rounded-lg text-xs"
                    onClick={() => { setSelected(profile); setEditing(false); }}
                  >
                    عرض/تعديل
                  </button>
                  <button
                    className={`px-3 py-1 rounded-lg text-xs border ${profile.active ? "border-[#2563eb] text-[#2563eb]" : "border-gray-400 text-gray-500"
                      }`}
                    onClick={() =>
                      setProfiles(
                        profiles.map((p) =>
                          p.id === profile.id ? { ...p, active: !p.active } : p
                        )
                      )
                    }
                  >
                    {profile.active ? "تعطيل" : "تفعيل"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* كارت إنشاء بروفايل جديد */}
          <div className="w-full flex flex-col items-center mt-6">
            <button className="flex flex-col items-center justify-center border-2 border-dashed border-[#2563eb] bg-[#f7faff] hover:bg-[#eff6ff] rounded-2xl py-8 px-6 w-full transition">
              <span className="text-xl font-bold mb-2 text-[#2563eb]">أنشئ بروفايل جديد</span>
              <span className="bg-[#2563eb] text-white rounded-full p-2 text-2xl flex items-center justify-center">
                <Plus className="w-6 h-6" />
              </span>
            </button>
            <div className="mt-2 text-gray-600 text-sm">
              تقدر تضيف لحد <span className="font-bold text-[#2563eb]">6 بروفايلات</span> بعد الترقية للبريموم.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
