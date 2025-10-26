import { Users, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  return (
    <section className="py-28 bg-gradient-to-br from-[#f5f2e8] via-[#b5ccbf]/15 to-[#e7e3c2] dark:from-[#2a2818] dark:via-[#40584a]/30 dark:to-[#45422a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#b5ccbf]/20 to-[#67908c]/20 dark:from-[#b5ccbf]/20 dark:to-[#67908c]/20 rounded-full text-[#67908c] dark:text-[#b5ccbf] mb-6 border border-[#b5ccbf]/30">
            <Users size={18} />
            <span className="text-sm font-bold tracking-wide">
              EVENT GALLERY
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-8 leading-tight">
            Memorable Moments We've
            <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
              Helped Create
            </span>
          </h2>
          <p className="text-[#67908c] dark:text-[#b5ccbf] max-w-3xl mx-auto text-xl leading-relaxed">
            Take a glimpse at some of the extraordinary celebrations we've had
            the privilege to be part of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: '/gallery1.webp',
              title: 'Royal Wedding Reception',
              subtitle: 'Luxury catering for 500 guests',
            },
            {
              img: '/gallery2.webp',
              title: 'Corporate Gala Dinner',
              subtitle: 'Premium business event catering',
            },
            {
              img: '/gallery3.webp',
              title: 'Birthday Celebration',
              subtitle: 'Custom themed party setup',
            },
            {
              img: '/gallery4.webp',
              title: 'Anniversary Party',
              subtitle: 'Intimate celebration catering',
            },
            {
              img: '/gallery5.webp',
              title: 'Festival Celebration',
              subtitle: 'Traditional cuisine showcase',
            },
            {
              img: '/gallery6.webp',
              title: 'Garden Party',
              subtitle: 'Outdoor catering excellence',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#67908c]/25 transition-all duration-700 transform hover:-translate-y-2 animate-slide-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-80 object-cover group-hover:scale-115 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-bold text-2xl mb-2">{item.title}</h3>
                <p className="text-sm opacity-90 mb-4">{item.subtitle}</p>
                <button className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 cursor-pointer">
                  View Details
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
