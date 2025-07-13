import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'المطابق الذكي جامد جدًا!\nرشّحلي فرص شغل عمري ما كنت هعرفها لوحدي.\nأنصح بيه لأي حد بيدوّر بجد',
    name: 'عمر',
    image: '/avatars/omar.jpg',
  },
  {
    quote:
      'كتابة الخطاب زمان كانت كابوس…\nمع أوجي الموضوع بقى سهل وشخصي،\nووفرلي وقت كبير جدًا',
    name: 'إيمان',
    image: '/avatars/lina.jpg',
  },
  {
    quote:
      'كنت مش لاقي أي مقابلات،\nدلوقتي جالي أكتر من عرض شغل بفضل أدوات أوجي.\nأحسن استثمار عملته في نفسي!',
    name: 'أحمد',
    image: '/avatars/ahmed.jpg',
  },
  {
    quote:
      'بفضل أوجي، بقيت بلحق الفرص أول بأول.\nالخدمة ممتازة ومخصصة فعلًا!',
    name: 'سارة',
    image: '/avatars/sara.jpg',
  },
];

const TestimonialsSection = () => {
  const containerRef = useRef();

  const scroll = (direction) => {
    const container = containerRef.current;
    const cardWidth = 320 + 24; // card width + gap
    const scrollAmount = cardWidth * 3;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20 font-montaser">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
        اسمع من اللي جرّبوا <span className="text-blue-600">AUJI</span>
      </h2>

      <div className="relative max-w-[1024px] mx-auto">
        {/* الأسهم */}
        <button
          onClick={() => scroll('left')}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* الكروت */}
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-6 transition-transform duration-500"
            style={{ scrollBehavior: 'smooth' }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="w-[320px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition text-right"
              >
                <div className="flex gap-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                  "{t.quote}"
                </p>
                <hr className="my-4" />
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-10 text-sm text-center text-gray-600">
        لف علشان تشوف باقي قصص النجاح من مجتمعنا!
      </p>
    </section>
  );
};

export default TestimonialsSection;
