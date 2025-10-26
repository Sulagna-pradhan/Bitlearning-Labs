import { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-28 bg-gradient-to-br from-[#67908c] via-[#5a7f79] to-[#40584a] dark:from-[#40584a] dark:via-[#4a5c42] dark:to-[#45422a] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white mb-6 border border-white/30">
            <Quote size={18} />
            <span className="text-sm font-bold tracking-wide">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            What Our Valued
            <span className="block">Clients Say About Us</span>
          </h2>
          <p className="text-white/90 text-xl">
            Discover why thousands choose us for their most important
            celebrations.
          </p>
        </div>

        <div className="relative">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${
                idx === activeTestimonial
                  ? 'opacity-100 scale-100 relative z-10'
                  : 'opacity-0 scale-95 absolute inset-0 z-0'
              } animate-slide-in-up`}
            >
              <div className="bg-gradient-to-br from-[#e7e3c2] to-[#f5f2e8] dark:from-[#45422a] dark:to-[#3a3625] rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
                {/* Quote icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#67908c] to-[#40584a] rounded-2xl flex items-center justify-center shadow-lg">
                    <Quote className="text-white" size={40} />
                  </div>
                </div>

                {/* Stars rating */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#67908c] fill-current"
                      size={24}
                    />
                  ))}
                </div>

                <p className="text-2xl md:text-3xl text-[#45422a] dark:text-[#e7e3c2] mb-10 leading-relaxed text-center font-medium">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-center gap-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#67908c] shadow-lg"
                  />
                  <div className="text-center">
                    <h4 className="font-bold text-[#45422a] dark:text-[#e7e3c2] text-xl mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#67908c] dark:text-[#b5ccbf] font-semibold">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Enhanced indicators */}
          <div className="flex justify-center gap-4 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`transition-all duration-500 ${
                  idx === activeTestimonial
                    ? 'bg-white w-12 h-3 shadow-lg'
                    : 'bg-white/50 w-3 h-3 hover:bg-white/70'
                } rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
