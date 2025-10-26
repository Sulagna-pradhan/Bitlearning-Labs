import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import {
  Utensils,
  Coffee,
  ChefHat,
  Leaf,
  Star,
  type LucideIcon,
} from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  dietary: string[];
  rating: number;
  spicy: number;
  image?: string; // Optional image URL
}

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

export default function CompletMenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories: Category[] = [
    { id: 'all', name: 'All Items', icon: Utensils },
    { id: 'indian', name: 'Indian', icon: ChefHat },
    { id: 'chinese', name: 'Chinese', icon: Utensils },
    { id: 'continental', name: 'Continental', icon: Coffee },
    { id: 'italian', name: 'Italian', icon: Leaf },
  ];

  const menuItems: MenuItem[] = [
    // Indian
    {
      id: 1,
      name: 'Butter Chicken',
      category: 'indian',
      price: '₹450',
      description: 'Tender chicken in rich tomato-butter gravy',
      dietary: ['popular'],
      rating: 4.8,
      spicy: 2,
      image:
        'https://images.pexels.com/photos/20408432/pexels-photo-20408432.jpeg',
    },
    {
      id: 2,
      name: 'Paneer Tikka Masala',
      category: 'indian',
      price: '₹380',
      description: 'Grilled cottage cheese in aromatic spiced gravy',
      dietary: ['vegetarian', 'popular'],
      rating: 4.7,
      spicy: 2,
      image:
        'https://images.pexels.com/photos/29173105/pexels-photo-29173105.jpeg',
    },
    {
      id: 3,
      name: 'Biryani (Chicken)',
      category: 'indian',
      price: '₹420',
      description: 'Fragrant basmati rice with succulent chicken',
      dietary: ['popular'],
      rating: 4.9,
      spicy: 3,
      image:
        'https://cdn.pixabay.com/photo/2023/06/27/15/16/rice-8092512_1280.jpg',
    },
    {
      id: 4,
      name: 'Dal Makhani',
      category: 'indian',
      price: '₹320',
      description: 'Creamy black lentils slow-cooked overnight',
      dietary: ['vegetarian'],
      rating: 4.6,
      spicy: 1,
      image: '',
    },
    {
      id: 5,
      name: 'Rogan Josh',
      category: 'indian',
      price: '₹480',
      description: 'Kashmiri lamb curry with aromatic spices',
      dietary: [],
      rating: 4.7,
      spicy: 3,
      image: '',
    },
    {
      id: 6,
      name: 'Palak Paneer',
      category: 'indian',
      price: '₹360',
      description: 'Cottage cheese in creamy spinach gravy',
      dietary: ['vegetarian'],
      rating: 4.5,
      spicy: 1,
      image: '',
    },

    // Chinese
    {
      id: 7,
      name: 'Kung Pao Chicken',
      category: 'chinese',
      price: '₹420',
      description: 'Spicy stir-fried chicken with peanuts',
      dietary: ['popular'],
      rating: 4.7,
      spicy: 3,
      image: '',
    },
    {
      id: 8,
      name: 'Vegetable Hakka Noodles',
      category: 'chinese',
      price: '₹280',
      description: 'Wok-tossed noodles with fresh vegetables',
      dietary: ['vegetarian'],
      rating: 4.4,
      spicy: 1,
      image: '',
    },
    {
      id: 9,
      name: 'Manchurian (Dry)',
      category: 'chinese',
      price: '₹340',
      description: 'Crispy vegetable balls in tangy sauce',
      dietary: ['vegetarian', 'popular'],
      rating: 4.6,
      spicy: 2,
      image: '',
    },
    {
      id: 10,
      name: 'Sweet & Sour Fish',
      category: 'chinese',
      price: '₹520',
      description: 'Crispy fish in tangy sweet sauce',
      dietary: [],
      rating: 4.5,
      spicy: 1,
      image: '',
    },
    {
      id: 11,
      name: 'Szechuan Fried Rice',
      category: 'chinese',
      price: '₹320',
      description: 'Spicy fried rice with mixed vegetables',
      dietary: ['vegetarian'],
      rating: 4.4,
      spicy: 3,
      image: '',
    },
    {
      id: 12,
      name: 'Dim Sum Platter',
      category: 'chinese',
      price: '₹480',
      description: 'Assorted steamed dumplings (6 pieces)',
      dietary: ['popular'],
      rating: 4.8,
      spicy: 1,
      image: '',
    },

    // Continental
    {
      id: 13,
      name: 'Grilled Chicken Steak',
      category: 'continental',
      price: '₹580',
      description: 'Tender chicken with herb butter & vegetables',
      dietary: ['popular'],
      rating: 4.8,
      spicy: 0,
      image: '',
    },
    {
      id: 14,
      name: 'Fish & Chips',
      category: 'continental',
      price: '₹520',
      description: 'Beer-battered fish with crispy fries',
      dietary: [],
      rating: 4.6,
      spicy: 0,
      image: '',
    },
    {
      id: 15,
      name: 'Mushroom Risotto',
      category: 'continental',
      price: '₹450',
      description: 'Creamy arborio rice with wild mushrooms',
      dietary: ['vegetarian'],
      rating: 4.7,
      spicy: 0,
      image: '',
    },
    {
      id: 16,
      name: 'Lamb Chops',
      category: 'continental',
      price: '₹720',
      description: 'Herb-crusted lamb with mint jelly',
      dietary: ['popular'],
      rating: 4.9,
      spicy: 0,
      image: '',
    },
    {
      id: 17,
      name: 'Caesar Salad',
      category: 'continental',
      price: '₹350',
      description: 'Crisp romaine with parmesan & croutons',
      dietary: ['vegetarian'],
      rating: 4.4,
      spicy: 0,
      image: '',
    },
    {
      id: 18,
      name: 'Beef Stroganoff',
      category: 'continental',
      price: '₹650',
      description: 'Tender beef in rich sour cream sauce',
      dietary: [],
      rating: 4.7,
      spicy: 0,
      image: '',
    },

    // Italian
    {
      id: 19,
      name: 'Margherita Pizza',
      category: 'italian',
      price: '₹420',
      description: 'Fresh mozzarella, basil & tomato sauce',
      dietary: ['vegetarian', 'popular'],
      rating: 4.7,
      spicy: 0,
      image: '',
    },
    {
      id: 20,
      name: 'Spaghetti Carbonara',
      category: 'italian',
      price: '₹480',
      description: 'Creamy pasta with bacon & parmesan',
      dietary: [],
      rating: 4.8,
      spicy: 0,
      image: '',
    },
    {
      id: 21,
      name: 'Penne Arrabbiata',
      category: 'italian',
      price: '₹380',
      description: 'Spicy tomato sauce with garlic & chili',
      dietary: ['vegetarian'],
      rating: 4.5,
      spicy: 2,
      image: '',
    },
    {
      id: 22,
      name: 'Lasagna',
      category: 'italian',
      price: '₹520',
      description: 'Layered pasta with meat & cheese',
      dietary: ['popular'],
      rating: 4.8,
      spicy: 0,
      image: '',
    },
    {
      id: 23,
      name: 'Risotto Primavera',
      category: 'italian',
      price: '₹440',
      description: 'Creamy rice with spring vegetables',
      dietary: ['vegetarian'],
      rating: 4.6,
      spicy: 0,
      image: '',
    },
    {
      id: 24,
      name: 'Tiramisu',
      category: 'italian',
      price: '₹280',
      description: 'Classic coffee-flavored Italian dessert',
      dietary: ['vegetarian'],
      rating: 4.9,
      spicy: 0,
      image: '',
    },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    return matchesCategory;
  });

  const getSpicyIndicator = (level: number): string => {
    return '🌶️'.repeat(level);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e7e3c2] via-[#f0ead8] to-[#b5ccbf]/20 dark:from-[#45422a] dark:via-[#3a3625] dark:to-[#2a2818]">
      {/* SEO */}
      <Helmet>
        <title>Mivaan Caterers | Menu & Delicious Catering Options</title>
        <meta
          name="description"
          content="Discover the delicious menu offerings of Mivaan Caterers. Explore a variety of dishes for weddings, parties, and corporate events, crafted with quality ingredients and presentation."
        />
        <meta
          name="keywords"
          content="Mivaan Caterers menu, catering menu India, wedding catering menu, party food, corporate catering, Indian cuisine, event catering"
        />
        <meta name="author" content="Mivaan Caterers" />
        <link rel="canonical" href="https://www.mivaancaterers.com/menu" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mivaancaterers.com/menu" />
        <meta
          property="og:title"
          content="Mivaan Caterers | Menu & Delicious Catering Options"
        />
        <meta
          property="og:description"
          content="Explore Mivaan Caterers' catering menu featuring mouthwatering dishes for weddings, parties, and corporate events across India."
        />
        <meta
          property="og:image"
          content="https://www.mivaancaterers.com/og-menu.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.mivaancaterers.com/menu"
        />
        <meta
          name="twitter:title"
          content="Mivaan Caterers | Menu & Delicious Catering Options"
        />
        <meta
          name="twitter:description"
          content="Check out the menu of Mivaan Caterers — a variety of delicious dishes for weddings, parties, and corporate events."
        />
        <meta
          name="twitter:image"
          content="https://www.mivaancaterers.com/twitter-menu.jpg"
        />

        {/* Favicon & Theme */}
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta name="theme-color" content="#f5f2e8" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Menu',
            name: 'Mivaan Caterers Menu',
            url: 'https://www.mivaancaterers.com/menu',
            description:
              'Mivaan Caterers offers a diverse menu for weddings, parties, and corporate events, featuring delicious dishes prepared with fresh ingredients and elegant presentation.',
            hasMenuSection: [
              {
                '@type': 'MenuSection',
                name: 'Starters & Appetizers',
              },
              {
                '@type': 'MenuSection',
                name: 'Main Course',
              },
              {
                '@type': 'MenuSection',
                name: 'Desserts',
              },
              {
                '@type': 'MenuSection',
                name: 'Beverages',
              },
            ],
            publisher: {
              '@type': 'Organization',
              name: 'Mivaan Caterers',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.mivaancaterers.com/logo.png',
              },
            },
          })}
        </script>
      </Helmet>

      {/* Hero Header */}
      <section className="relative py-28 bg-gradient-to-br from-[#67908c] via-[#5a7f79] to-[#40584a] dark:from-[#40584a] dark:via-[#4a5c42] dark:to-[#45422a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30 animate-fade-in-up">
            <ChefHat size={18} />
            <span className="text-sm font-bold tracking-wide">
              EXPLORE OUR MENU
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-in-up">
            Discover Culinary
            <span className="block bg-gradient-to-r from-white via-[#b5ccbf] to-white bg-clip-text text-transparent">
              Excellence & Flavors
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Browse through our carefully curated menu featuring authentic dishes
            from Indian, Chinese, Continental, and Italian cuisines, crafted
            with passion.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#67908c] to-[#40584a] text-white shadow-xl'
                    : 'bg-white/70 dark:bg-[#45422a]/70 text-[#67908c] dark:text-[#b5ccbf] border border-[#b5ccbf]/30 hover:border-[#67908c]'
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <Icon size={18} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-2">
              No dishes found
            </h3>
            <p className="text-[#67908c] dark:text-[#b5ccbf]">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="group bg-white/70 dark:bg-[#45422a]/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#b5ccbf]/30 hover:border-[#67908c] shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-[#67908c]/20 to-[#40584a]/10 overflow-hidden">
                  {item.image && item.image.trim() !== '' ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          console.log('Image failed to load:', item.image);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                      {item.category === 'indian'
                        ? '🍛'
                        : item.category === 'chinese'
                          ? '🥢'
                          : item.category === 'continental'
                            ? '🍴'
                            : '🍝'}
                    </div>
                  )}
                  {item.dietary.includes('popular') && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[#67908c] to-[#40584a] text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1 z-10">
                      <Star size={12} fill="white" />
                      <span>Popular</span>
                    </div>
                  )}
                  {item.dietary.includes('vegetarian') && (
                    <div className="absolute top-4 left-4 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg z-10"></div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#45422a] dark:text-[#e7e3c2] group-hover:text-[#67908c] dark:group-hover:text-[#b5ccbf] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm font-bold text-[#67908c] dark:text-[#b5ccbf]">
                      <Star
                        size={14}
                        fill="#67908c"
                        className="dark:fill-[#b5ccbf]"
                      />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-[#67908c] dark:text-[#b5ccbf] text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {item.spicy > 0 && (
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-sm font-semibold text-[#45422a] dark:text-[#e7e3c2]">
                        Spice Level:
                      </span>
                      <span className="text-sm">
                        {getSpicyIndicator(item.spicy)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
