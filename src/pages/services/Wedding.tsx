import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Heart,
  Star,
  Crown,
  Users,
  Calendar,
  ChefHat,
  Utensils,
} from 'lucide-react';

export default function WeddingCateringSection() {
  const location = useLocation();

  useEffect(() => {
    // Force unlock body scroll
    document.body.style.overflow = 'unset';
    document.body.style.position = 'unset';

    // Instant scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-[#f8f5eb] via-[#f0ead8] to-[#b5ccbf]/20 dark:from-[#3a3625] dark:via-[#40584a]/40 dark:to-[#2a2818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mt-16 sm:mt-0 mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#b5ccbf]/20 to-[#67908c]/20 dark:from-[#b5ccbf]/20 dark:to-[#67908c]/20 rounded-full text-[#67908c] dark:text-[#b5ccbf] mb-4 sm:mb-6 border border-[#b5ccbf]/30">
            <Heart className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              WEDDING CATERING
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6 sm:mb-8 leading-tight">
            Your Dream Wedding
            <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
              Royal Wedding Feast
            </span>
          </h1>

          <p className="text-[#67908c] dark:text-[#b5ccbf] max-w-2xl sm:max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
            Our perfect blend of traditional and contemporary Indian cuisine
            makes your wedding celebration truly unforgettable. From authentic
            regional thalis to modern fusion delicacies, we bring the authentic
            taste of India to your special day.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          <div className="relative group">
            <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-[#67908c]/30 to-[#b5ccbf]/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-[#40584a]/20 to-[#67908c]/30 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>

            <div className="relative">
              {/* Optimized Image with lazy loading and blur placeholder */}
              <img
                src="/Wedding.webp"
                alt="Indian Wedding Feast"
                loading="lazy"
                decoding="async"
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-80 sm:h-[500px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                style={{
                  contentVisibility: 'auto',
                }}
              />

              {/* Floating achievement card */}
              <div className="absolute -bottom-4 sm:-bottom-8 -right-2 sm:-right-4 bg-gradient-to-br from-[#e7e3c2] to-[#f5f2e8] dark:from-[#45422a] dark:to-[#3a3625] rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl max-w-xs group-hover:scale-105 transition-transform duration-500 border border-[#b5ccbf]/20">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#67908c] to-[#40584a] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <Crown className="text-white w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-1">
                      1500+
                    </div>
                    <div className="text-xs sm:text-sm text-[#67908c] dark:text-[#b5ccbf] font-semibold">
                      Happy Couples
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6 sm:mb-8 leading-tight">
              Every Ceremony Deserves
              <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
                Perfect Menu Planning
              </span>
            </h2>

            <p className="text-[#67908c] dark:text-[#b5ccbf] mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              From Haldi ceremony breakfast to grand reception dinner, we curate
              authentic regional cuisines that honor traditions while delighting
              modern palates.
            </p>

            <p className="text-[#67908c] dark:text-[#b5ccbf] mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg">
              Our dedicated team understands your family traditions and guest
              preferences to create a personalized menu that makes your wedding
              celebration truly memorable and reflects your cultural heritage.
            </p>

            <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-12">
              {[
                'Traditional Thali & Live Counters',
                'Regional Specialty Cuisines',
                'Customized Jain & Vegan Options',
                'Professional Service Staff',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#67908c] to-[#40584a] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Star className="text-white w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className="text-[#45422a] dark:text-[#e7e3c2] font-semibold text-base sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Wedding Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {[
            {
              icon: Users,
              title: 'Pre-Wedding Functions',
              description:
                'Engagement, Haldi, Mehndi ceremony catering with authentic Indian snacks and traditional sweets',
              highlight: 'Ring Ceremony',
            },
            {
              icon: ChefHat,
              title: 'Wedding Day Feast',
              description:
                'Grand buffet with live cooking stations, regional specialties and traditional thali service',
              highlight: 'Main Wedding',
            },
            {
              icon: Utensils,
              title: 'Reception Dinner',
              description:
                'Elegant sit-down dining or lavish buffet with contemporary and classic Indian dishes',
              highlight: 'Reception',
            },
            {
              icon: Calendar,
              title: 'Post-Wedding Events',
              description:
                'Griha Pravesh, first feast at new home with personalized family favorite recipes',
              highlight: 'Homecoming',
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-[#e7e3c2]/50 to-[#f5f2e8]/80 dark:from-[#45422a]/50 dark:to-[#3a3625]/80 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-[#b5ccbf]/20"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#67908c] to-[#40584a] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <service.icon className="text-white w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]" />
              </div>

              <div className="text-xs sm:text-sm text-[#67908c] dark:text-[#b5ccbf] font-bold mb-2 tracking-wide">
                {service.highlight}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-3 sm:mb-4">
                {service.title}
              </h3>

              <p className="text-[#67908c] dark:text-[#b5ccbf] leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Popular Menu Items */}
        <div className="bg-gradient-to-r from-[#e7e3c2]/30 to-[#f5f2e8]/30 dark:from-[#45422a]/30 dark:to-[#3a3625]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-[#b5ccbf]/20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-3 sm:mb-4">
              Popular Wedding Menu
            </h3>
            <p className="text-[#67908c] dark:text-[#b5ccbf] max-w-sm sm:max-w-2xl mx-auto text-sm sm:text-base">
              Our signature dishes that make every wedding celebration truly
              memorable and delicious
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                category: 'Starters',
                items: [
                  'Paneer Tikka',
                  'Dahi Ke Kebab',
                  'Aloo Tikki Chaat',
                  'Papdi Chaat',
                  'And many more',
                ],
              },
              {
                category: 'Main Course',
                items: [
                  'Dal Makhani',
                  'Shahi Paneer',
                  'Rajma Masala',
                  'Jeera Rice',
                  'And many more',
                ],
              },
              {
                category: 'Breads',
                items: [
                  'Butter Naan',
                  'Lachha Paratha',
                  'Missi Roti',
                  'Kulcha',
                  'And many more',
                ],
              },
              {
                category: 'Regional Specials',
                items: [
                  'Gatte Ki Sabzi',
                  'Undhiyu',
                  'Bisi Bele Bath',
                  'Litti Chokha',
                  'And many more',
                ],
              },
              {
                category: 'Live Counters',
                items: [
                  'Dosa Counter',
                  'Chaat Station',
                  'Kulfi Corner',
                  'Paan Counter',
                  'And many more',
                ],
              },
              {
                category: 'Desserts',
                items: [
                  'Gulab Jamun',
                  'Ras Malai',
                  'Gajar Halwa',
                  'Kesar Kulfi',
                  'And many more',
                ],
              },
            ].map((menu, idx) => (
              <div
                key={idx}
                className="bg-white/50 dark:bg-[#45422a]/20 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#b5ccbf]/10"
              >
                <h4 className="text-base sm:text-lg font-bold text-[#45422a] dark:text-[#e7e3c2] mb-3 sm:mb-4 border-b border-[#b5ccbf]/30 pb-2">
                  {menu.category}
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {menu.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-[#67908c] dark:text-[#b5ccbf] flex items-center gap-2 text-sm sm:text-base"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#67908c] to-[#40584a] rounded-full flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
