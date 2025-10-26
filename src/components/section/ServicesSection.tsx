import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { JSX } from 'react';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
  price: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-28 bg-gradient-to-br from-[#e7e3c2] via-[#f0ead8] to-[#b5ccbf]/10 dark:from-[#45422a] dark:via-[#3a3625] dark:to-[#2a2818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#b5ccbf]/20 to-[#67908c]/20 dark:from-[#b5ccbf]/20 dark:to-[#67908c]/20 rounded-full text-[#67908c] dark:text-[#b5ccbf] mb-6 border border-[#b5ccbf]/30">
            <Star size={18} />
            <span className="text-sm font-bold tracking-wide">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-8 leading-tight">
            Catering Excellence for
            <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
              Every Occasion
            </span>
          </h2>
          <p className="text-[#67908c] dark:text-[#b5ccbf] max-w-3xl mx-auto text-xl leading-relaxed">
            Whatever the celebration, we have the perfect catering solution to
            make your event truly exceptional and memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const route = `/service/${service.title
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^a-z-]/g, '')}`;

            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#67908c]/25 transition-all duration-700 transform hover:-translate-y-4 animate-slide-in-up bg-white dark:bg-[#3a3625] border border-[#b5ccbf]/20"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-115 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* Service icon */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-[#67908c] to-[#40584a] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-3 group-hover:text-[#67908c] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#67908c] dark:text-[#b5ccbf] text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    to={route}
                    className="w-full flex items-center justify-center gap-3 text-[#67908c] dark:text-[#b5ccbf] font-bold group hover:text-white hover:bg-gradient-to-r hover:from-[#67908c] hover:to-[#40584a] py-4 rounded-2xl border-2 border-[#67908c]/30 hover:border-transparent transition-all duration-500 cursor-pointer"
                  >
                    Explore More
                    <ChevronRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
