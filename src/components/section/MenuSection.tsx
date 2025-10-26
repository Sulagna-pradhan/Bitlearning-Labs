import { Utensils, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Highlight {
  name: string;
  price: string;
  popular: boolean;
}

export default function MenuSection() {
  const highlights: Highlight[] = [
    { name: 'Indian', price: '', popular: true },
    { name: 'Chinese', price: '', popular: true },
    { name: 'Continental', price: '', popular: true },
    { name: 'Italian', price: '', popular: false },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-[#e7e3c2] via-[#f0ead8] to-[#b5ccbf]/20 dark:from-[#45422a] dark:via-[#3a3625] dark:to-[#2a2818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#b5ccbf]/20 to-[#67908c]/20 dark:from-[#b5ccbf]/20 dark:to-[#67908c]/20 rounded-full text-[#67908c] dark:text-[#b5ccbf] mb-6 border border-[#b5ccbf]/30">
              <Utensils size={18} />
              <span className="text-sm font-bold tracking-wide">OUR MENU</span>
            </div>

            <h2 className="text-5xl md:text-5xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-8 leading-tight">
              Culinary Excellence in
              <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
                Every Single Bite &
              </span>
              <span className="block bg-gradient-to-r from-[#78a69f] to-[#4f6d57] bg-clip-text text-transparent">
                We Cover Everything
              </span>
            </h2>

            <p className="text-[#67908c] dark:text-[#b5ccbf] mb-10 text-lg leading-relaxed">
              Our expertly crafted menu features locally sourced fresh
              ingredients and innovative culinary concepts from around the
              world, prepared by our chefs.
            </p>

            <div className="space-y-6 mb-12">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center justify-between p-6 bg-gradient-to-r from-[#b5ccbf]/10 to-[#67908c]/5 dark:from-[#b5ccbf]/10 dark:to-[#67908c]/5 rounded-2xl hover:shadow-xl hover:from-[#b5ccbf]/20 hover:to-[#67908c]/10 transition-all duration-500 border border-[#b5ccbf]/20 animate-fade-in"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#67908c] to-[#40584a] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-[#45422a] dark:text-[#e7e3c2] mb-1">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                  {item.popular && (
                    <span className="px-4 py-2 bg-gradient-to-r from-[#b5ccbf]/30 to-[#67908c]/20 dark:from-[#b5ccbf]/20 dark:to-[#67908c]/20 text-[#67908c] dark:text-[#b5ccbf] text-sm font-bold rounded-full border border-[#b5ccbf]/40">
                      Most Popular
                    </span>
                  )}
                </div>
              ))}
            </div>

            <Link to="/menu">
              <button className="group px-10 py-5 bg-gradient-to-r from-[#67908c] to-[#40584a] hover:from-[#40584a] hover:to-[#45422a] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-lg cursor-pointer">
                <span className="flex items-center gap-3">
                  View Complete Menu
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {[
              'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg',
              'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&q=80',
              'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&q=80',
              'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop&q=80',
            ].map((img, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  idx % 2 === 1 ? '' : ''
                }`}
              >
                <img
                  src={img}
                  alt={`Menu ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">Signature Dish</h3>
                    <p className="text-sm opacity-90">Crafted with passion</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
