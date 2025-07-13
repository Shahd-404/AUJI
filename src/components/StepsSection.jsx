import React from 'react';

const steps = [
  {
    number: 1,
    title: "حلّل الـسي في بتاعك",
    description:
      "حمّل الـسي في بتاعك وخد تقرير فوري من الذكاء الصناعي فيه ملاحظات ذكية علشان تزبطه وتخلّيه أقوى",
  },
  {
    number: 2,
    title: "اكتشف الفرص المناسبة ليك",
    description:
      "أوجي يرشّحلك شغل متفصّل على مهاراتك واهتماماتك. كل ترشيح معمول على مقاسك",
  },
  {
    number: 3,
    title: "قدّم بذكاء",
    description:
      "خليك دايمًا سابق بخطوة. خلّي أوجي يجهّزلك إجاباتك وخطابك ويتابعلك التقديم",
  },
];

const StepsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20 font-montaser text-center">
      <h2
        dir="rtl"
        className="text-3xl md:text-4xl font-bold mb-14 text-gray-800"
      >
        في ٣ خطوات بسيطة، ابدأ رحلتك مع{" "}
        <span dir="ltr" className="text-blue-600 inline-block">AUJI</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-400 text-white text-lg font-bold mb-5">
              {step.number}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
