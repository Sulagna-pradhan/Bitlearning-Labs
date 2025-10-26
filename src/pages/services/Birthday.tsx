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

export default function BirthdayServicesSection() {
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
              BIRTHDAY CATERING
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6 sm:mb-8 leading-tight">
            Make Every Year
            <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
              Extra Special
            </span>
          </h1>

          <p className="text-[#67908c] dark:text-[#b5ccbf] max-w-2xl sm:max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
            Bring joy to birthday celebrations with our vibrant Indian-inspired
            menus, perfect for kids' parties or adult milestones. From playful
            chaats to indulgent sweets, we create flavorful spreads that spark
            smiles and create lasting memories.
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
                src="/Birthday.webp"
                alt="Birthday Celebration Feast"
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
                      2000+
                    </div>
                    <div className="text-xs sm:text-sm text-[#67908c] dark:text-[#b5ccbf] font-semibold">
                      Smiles Delivered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6 sm:mb-8 leading-tight">
              Fun-Filled Feasts for
              <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
                All Ages
              </span>
            </h2>

            <p className="text-[#67908c] dark:text-[#b5ccbf] mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              Tailor your birthday bash with our diverse selection of
              kid-approved snacks, hearty mains, and show-stopping desserts.
              Drawing from rich Indian traditions, we offer everything from
              colorful chaat bars to festive thalis that keep the party going.
            </p>

            <p className="text-[#67908c] dark:text-[#b5ccbf] mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg">
              Our team handles the details, from age-appropriate portions to
              themed presentations, so you can celebrate without worry.
            </p>

            <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-12">
              {[
                'Kid-Friendly Finger Foods',
                'Themed Dessert Stations',
                'Allergen-Free Options',
                'Playful Presentation Styles',
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

        {/* Birthday Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {[
            {
              icon: Users,
              title: 'Kids Birthday Parties',
              description:
                'Whimsical buffets with mini chaats, veggie nuggets, and rainbow-colored sweets for little ones',
              highlight: 'Little Wonders',
            },
            {
              icon: ChefHat,
              title: 'Teen Celebrations',
              description:
                'Trendy fusion bites, loaded fries with Indian twists, and interactive mocktail bars',
              highlight: 'Teen Vibes',
            },
            {
              icon: Utensils,
              title: 'Adult Milestones',
              description:
                'Sophisticated spreads of gourmet curries, artisanal breads, and elegant mithai platters',
              highlight: 'Milestone Magic',
            },
            {
              icon: Calendar,
              title: 'Family Birthday Gatherings',
              description:
                'Hearty family-style thalis featuring regional favorites and customizable cake-cutting setups',
              highlight: 'Family Joy',
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
              Popular Birthday Menu
            </h3>
            <p className="text-[#67908c] dark:text-[#b5ccbf] max-w-sm sm:max-w-2xl mx-auto text-sm sm:text-base">
              Delightful dishes and treats designed to make birthdays sparkle
              with authentic Indian flair
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                category: 'Fun Starters',
                items: [
                  'Mini Paneer Tikka',
                  'Veg Spring Rolls',
                  'Cheese Balls',
                  'Crispy Bhajiyas',
                  'And many more',
                ],
              },
              {
                category: 'Party Mains',
                items: [
                  'Kid-Sized Biryani',
                  'Mild Butter Paneer',
                  'Veggie Korma',
                  'Masala Fries',
                  'And many more',
                ],
              },
              {
                category: 'Breads & Sides',
                items: [
                  'Mini Naan',
                  'Puri Bhaji',
                  'Yogurt Dip',
                  'Pickle Platter',
                  'And many more',
                ],
              },
              {
                category: 'Chaat Corner',
                items: [
                  'Pani Puri Shots',
                  'Dahi Puri',
                  'Sev Puri',
                  'Papdi Chaat',
                  'And many more',
                ],
              },
              {
                category: 'Live Fun',
                items: [
                  'Cotton Candy Machine',
                  'Popcorn Station',
                  'Fruit Chaat Bar',
                  'Ice Cream Scoops',
                  'And many more',
                ],
              },
              {
                category: 'Birthday Sweets',
                items: [
                  'Gulab Jamun Towers',
                  'Rasgulla Surprise',
                  'Chocolate Barfi',
                  'Birthday Kulfi',
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
