import React from 'react';

const logos = [
  { name: 'جامعة القاهرة', color: 'bg-purple-100', text: 'text-purple-600' },
  { name: 'مبادرة الشباب', color: 'bg-pink-100', text: 'text-pink-600' },
  { name: 'Tech4Youth', color: 'bg-blue-100', text: 'text-blue-600' },
  { name: 'Edulab', color: 'bg-green-100', text: 'text-green-600' },
  { name: 'وظفني', color: 'bg-yellow-100', text: 'text-yellow-600' },
  { name: 'NextGen', color: 'bg-indigo-100', text: 'text-indigo-600' },
];

const TrustedBySection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 text-center font-montaser">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
        <span className="text-blue-600">AUJI</span> موثوق فيه من مؤسسات رائدة
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 justify-items-center items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`w-24 h-24 flex items-center justify-center rounded-xl shadow-sm ${logo.color} animate-float`}
          >
            <span className={`text-sm font-semibold ${logo.text}`}>{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBySection;
