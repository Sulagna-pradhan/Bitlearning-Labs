import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import {
  Home,
  UtensilsCrossed,
  ChefHat,
  Search,
  ArrowLeft,
} from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5eb] via-[#f0ead8] to-[#b5ccbf]/20 dark:from-[#3a3625] dark:via-[#40584a]/40 dark:to-[#2a2818] flex items-center justify-center px-4 py-8">
      {/* SEO */}
      <Helmet>
        <title>404 Not Found | Mivaan Caterers</title>
        <meta
          name="description"
          content="Oops! The page you are looking for does not exist. Explore Mivaan Caterers for expert catering and event management services for weddings, parties, and corporate events."
        />
        <meta
          name="keywords"
          content="404 page, Mivaan Caterers, page not found, catering services, event management India"
        />
        <meta name="author" content="Mivaan Caterers" />
        <link rel="canonical" href="https://mivaancaterers.com/404" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mivaancaterers.com/404" />
        <meta property="og:title" content="404 Not Found | Mivaan Caterers" />
        <meta
          property="og:description"
          content="The page you are looking for cannot be found. Visit Mivaan Caterers for professional catering and event management services across India."
        />
        <meta
          property="og:image"
          content="https://mivaancaterers.com/og-404.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mivaancaterers.com/404" />
        <meta name="twitter:title" content="404 Not Found | Mivaan Caterers" />
        <meta
          name="twitter:description"
          content="Oops! The page you are looking for does not exist. Explore Mivaan Caterers for expert catering and event management services."
        />
        <meta
          name="twitter:image"
          content="https://mivaancaterers.com/twitter-404.jpg"
        />

        {/* Favicon & Theme */}
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta name="theme-color" content="#f5f2e8" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Mivaan Caterers',
            url: 'https://mivaancaterers.com',
            logo: 'https://mivaancaterers.com/logo.png',
            sameAs: [
              'https://www.facebook.com/mivaancaterers',
              'https://www.instagram.com/mivaancaterers',
            ],
            description:
              'Mivaan Caterers provides expert catering and event management services for weddings, parties, and corporate events across India.',
            foundingDate: '2025',
            founder: {
              '@type': 'Person',
              name: 'Mivaan Caterers Team',
            },
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl w-full">
        <div className="text-center">
          {/* Animated Food Icon */}
          <div className="relative inline-block mb-8 mt-16">
            <div className="absolute inset-0 bg-gradient-to-br from-[#67908c]/30 to-[#b5ccbf]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-[#e7e3c2] to-[#f5f2e8] dark:from-[#45422a] dark:to-[#3a3625] rounded-full flex items-center justify-center shadow-2xl border-4 border-[#b5ccbf]/30">
              <UtensilsCrossed className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#67908c] dark:text-[#b5ccbf]" />
            </div>
          </div>

          {/* 404 Text */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold mb-2 sm:mb-4">
              <span className="bg-gradient-to-r from-[#67908c] via-[#40584a] to-[#67908c] bg-clip-text text-transparent">
                4
              </span>
              <span className="relative inline-block mx-2 sm:mx-4">
                <ChefHat className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#67908c] dark:text-[#b5ccbf] animate-bounce" />
              </span>
              <span className="bg-gradient-to-r from-[#67908c] via-[#40584a] to-[#67908c] bg-clip-text text-transparent">
                4
              </span>
            </h1>
          </div>

          {/* Main Message */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-4 sm:mb-6 leading-tight">
              Oops! Recipe Not Found
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#67908c] dark:text-[#b5ccbf] max-w-2xl mx-auto leading-relaxed mb-4">
              Looks like this dish isn't on our menu! The page you're looking
              for seems to have been eaten by our hungry chefs.
            </p>
            <p className="text-sm sm:text-base text-[#67908c] dark:text-[#b5ccbf] max-w-xl mx-auto">
              Don't worry, we have plenty of delicious options waiting for you
              on our main menu!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <Link
              to="/"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#67908c] to-[#40584a] hover:from-[#40584a] hover:to-[#45422a] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#e7e3c2] dark:bg-[#45422a] hover:bg-[#b5ccbf]/50 dark:hover:bg-[#b5ccbf]/20 text-[#45422a] dark:text-[#e7e3c2] font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 border-2 border-[#b5ccbf]/30"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Popular Links */}
          <div className="bg-gradient-to-r from-[#e7e3c2]/50 to-[#f5f2e8]/50 dark:from-[#45422a]/50 dark:to-[#3a3625]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#b5ccbf]/20 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Search className="w-5 h-5 text-[#67908c] dark:text-[#b5ccbf]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#45422a] dark:text-[#e7e3c2]">
                Popular Destinations
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
              {[
                { name: 'Home', path: '/', icon: '🏠' },
                { name: 'About Us', path: '/about', icon: '👥' },
                {
                  name: 'Services',
                  path: '/service/wedding-catering',
                  icon: '💒',
                },
                { name: 'Menu', path: '/menu', icon: '📋' },
                { name: 'Gallery', path: '/gallery', icon: '📸' },
                { name: 'Contact', path: '/contact', icon: '📞' },
                {
                  name: 'Corporate',
                  path: '/service/corporate-events',
                  icon: '🏢',
                },
                {
                  name: 'Birthdays',
                  path: '/service/birthday-celebrations',
                  icon: '🎂',
                },
                {
                  name: 'Parties',
                  path: '/service/private-parties',
                  icon: '🎉',
                },
                {
                  name: 'Holidays',
                  path: '/service/holiday-catering',
                  icon: '🎄',
                },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="group bg-white/60 dark:bg-[#45422a]/40 hover:bg-[#b5ccbf]/30 dark:hover:bg-[#b5ccbf]/20 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border border-[#b5ccbf]/20"
                >
                  <div className="text-2xl sm:text-3xl mb-2">{link.icon}</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#45422a] dark:text-[#e7e3c2] group-hover:text-[#67908c] dark:group-hover:text-[#b5ccbf] transition-colors">
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Fun Message */}
          <div className="mt-8 sm:mt-12">
            <p className="text-sm sm:text-base text-[#67908c] dark:text-[#b5ccbf] italic">
              "Every great meal starts with finding the right place. Let's get
              you back on track!" 🍽️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
