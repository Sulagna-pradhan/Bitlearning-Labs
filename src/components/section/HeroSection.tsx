import { useState, useEffect } from 'react';
import { Crown, Phone } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

interface HeroSectionProps {
  slides: Slide[];
}

export default function HeroSection({ slides }: HeroSectionProps) {
  const [counts, setCounts] = useState({ clients: 0, events: 0, years: 0 });

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        clients: prev.clients < 1000 ? prev.clients + 100 : 1000,
        events: prev.events < 20 ? prev.events + 150 : 20,
        years: prev.years < 1 ? prev.years + 1 : 1,
      }));
    }, 50);

    setTimeout(() => clearInterval(interval), 2000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={slide.image}
            alt={slide.subtitle}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 dark:from-black/90 dark:via-black/70 dark:to-black/50"></div>
          {/* Animated overlay pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
      </div>

      {/* floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#67908c]/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#40584a]/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-[#b5ccbf]/25 rounded-full blur-2xl animate-float"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          {/* Company Branding */}
          <div className="mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-xl mb-6">
              <Crown className="text-[#b5ccbf] w-5 h-5" />
              <span className="text-white font-semibold text-sm lg:text-base tracking-wide">
                Premium Catering Excellence
              </span>
            </div>

            {/* Company Name */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 tracking-wide">
              <span className="bg-gradient-to-r from-white via-[#b5ccbf] to-white bg-clip-text text-transparent">
                Mivaan Caterers &
              </span>
              <br />
              <span className="text-[#b5ccbf] font-light">
                Event Management Services
              </span>
            </h2>
          </div>

          {/* hero text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="block animate-slide-in-right">{slide.title}</span>
            <span className="block bg-gradient-to-r from-[#67908c] via-[#b5ccbf] to-[#40584a] bg-clip-text text-transparent animate-slide-in-left delay-300">
              {slide.subtitle}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-500">
            {slide.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up delay-700">
            <a href="tel:+918617788181">
              <button className="group px-10 py-5 bg-gradient-to-r from-[#67908c] via-[#5a7f79] to-[#40584a] hover:from-[#40584a] hover:via-[#67908c] hover:to-[#45422a] text-white font-bold rounded-full shadow-2xl hover:shadow-[#67908c]/50 transition-all duration-500 transform hover:scale-110 flex items-center gap-3 text-lg cursor-pointer">
                <Phone
                  size={24}
                  className="group-hover:translate-x-1 transition-transform"
                />
                Call Now
              </button>
            </a>
            {/* <button className="group px-10 py-5 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white font-bold rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-500 flex items-center gap-3 text-lg">
              <Play
                size={24}
                className="group-hover:scale-110 transition-transform"
              />
              Watch Our Story
            </button> */}
          </div>

          {/* Stats*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { label: 'Happy Clients', value: counts.clients, suffix: '+' },
              { label: 'Events Catered', value: counts.events, suffix: '+' },
              { label: 'Years Experience', value: counts.years, suffix: '+' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center group animate-slide-in-up"
                style={{ animationDelay: `${800 + idx * 200}ms` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-gray-300 text-base md:text-lg font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
