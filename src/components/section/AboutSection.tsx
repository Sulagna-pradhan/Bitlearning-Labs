import { Link } from 'react-router-dom';
import { Utensils, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-[#f8f5eb] via-[#f0ead8] to-[#b5ccbf]/20 dark:from-[#3a3625] dark:via-[#40584a]/40 dark:to-[#2a2818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group animate-slide-in-left">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#67908c]/30 to-[#b5ccbf]/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#40584a]/20 to-[#67908c]/30 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>

            <div className="relative">
              <img
                src="/About_section.webp"
                alt="About"
                loading="lazy"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating stats card */}
              <div className="absolute -bottom-8 -right-4 bg-gradient-to-br from-[#e7e3c2] to-[#f5f2e8] dark:from-[#45422a] dark:to-[#3a3625] rounded-3xl p-8 shadow-2xl max-w-xs group-hover:scale-105 transition-transform duration-500 border border-[#b5ccbf]/20">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#67908c] to-[#40584a] rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="text-white" size={32} />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-1">
                      99%
                    </div>
                    <div className="text-sm text-[#67908c] dark:text-[#b5ccbf] font-semibold">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#b5ccbf]/20 to-[#67908c]/20 dark:from-[#b5ccbf]/20 dark:to-[#67908c]/20 rounded-full text-[#67908c] dark:text-[#b5ccbf] mb-6 border border-[#b5ccbf]/30">
              <Utensils size={18} />
              <span className="text-sm font-bold tracking-wide">ABOUT US</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-8 leading-tight">
              We Create Extraordinary
              <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
                Culinary Moments
              </span>
            </h2>

            <p className="text-[#67908c] dark:text-[#b5ccbf] mb-8 text-lg leading-relaxed">
              For over 1 years, Mivaan Caterers has been the premier choice for
              exceptional events across India. We are passionate about culinary
              excellence and meticulous attention to every detail that makes
              your celebration perfect.
            </p>

            <p className="text-[#67908c] dark:text-[#b5ccbf] mb-10 leading-relaxed">
              From small gatherings to grand celebrations, we bring innovation,
              craftsmanship, and the finest ingredients to every event. Our team
              of award-winning chefs and event specialists is dedicated to
              exceeding your expectations.
            </p>

            <ul className="space-y-5 mb-12">
              {[
                'Premium Quality Ingredients',
                'Completely Customizable Menus',
                'Expert Professional Staff',
                'Tailored Event Solutions',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 group animate-fade-in"
                  style={{ animationDelay: `${200 + idx * 100}ms` }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#67908c] to-[#40584a] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="text-white" size={18} />
                  </div>
                  <span className="text-[#45422a] dark:text-[#e7e3c2] font-semibold text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link to="/story">
              <button className="group px-10 py-5 bg-gradient-to-r from-[#67908c] to-[#40584a] hover:from-[#40584a] hover:to-[#45422a] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-lg cursor-pointer">
                <span className="flex items-center gap-3">
                  Discover Our Story
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
