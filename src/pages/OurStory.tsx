import { Helmet } from 'react-helmet-async';
import { Heart, Sparkles, Clock, Target } from 'lucide-react';

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5eb] via-[#f0ead8] to-[#b5ccbf]/20 dark:from-[#3a3625] dark:via-[#40584a]/40 dark:to-[#2a2818]">
      {/* SEO */}
      <Helmet>
        <title>
          Our Story | Mivaan Caterers Journey of Excellence in Catering & Events
        </title>
        <meta
          name="description"
          content="Learn the story of Mivaan Caterers — from our humble beginnings to becoming a trusted catering and event management company delivering memorable experiences across India."
        />
        <meta
          name="keywords"
          content="Mivaan Caterers story, our journey, catering company history, event management story, Mivaan founders, catering excellence India"
        />
        <meta name="author" content="Mivaan Caterers" />
        <link rel="canonical" href="https://www.mivaancaterers.com/story" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mivaancaterers.com/story"
        />
        <meta
          property="og:title"
          content="Our Story | Mivaan Caterers — Excellence in Catering & Events"
        />
        <meta
          property="og:description"
          content="Discover the journey of Mivaan Caterers, a trusted catering and event management company delivering exceptional service and unforgettable experiences."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.mivaancaterers.com/story"
        />
        <meta
          name="twitter:title"
          content="Our Story | Mivaan Caterers — Catering & Event Experts"
        />
        <meta
          name="twitter:description"
          content="Explore the story behind Mivaan Caterers — how passion and dedication created a leading catering and event management company in India."
        />

        {/* Favicon & Theme */}
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta name="theme-color" content="#f5f2e8" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'webSite',
            name: 'Mivaan Caterers',
            url: 'https://www.mivaancaterers.com/',
            logo: 'https://www.mivaancaterers.com/logo.png',
            sameAs: [
              'https://www.facebook.com/mivaancaterers',
              'https://www.instagram.com/mivaancaterers',
            ],
            description:
              'Mivaan Caterers is a professional catering and event management company offering exceptional service for weddings, parties, and corporate functions across India. Learn about our journey and commitment to excellence.',
            foundingDate: '2025',
            founder: {
              '@type': 'Person',
              name: 'Mivaan Caterers Team',
            },
            brand: {
              '@type': 'Brand',
              name: 'Mivaan Caterers',
              description:
                'A trusted catering and event management brand delivering memorable experiences through quality service and exceptional food.',
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#67908c]/20 to-[#b5ccbf]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-[#40584a]/20 to-[#67908c]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#b5ccbf]/20 to-[#67908c]/20 rounded-full text-[#67908c] dark:text-[#b5ccbf] mb-6 border border-[#b5ccbf]/30">
              <Heart size={18} />
              <span className="text-sm font-bold tracking-wide">
                OUR JOURNEY
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6 leading-tight">
              A Legacy of
              <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
                Flavour & Passion
              </span>
            </h1>

            <p className="text-xl text-[#67908c] dark:text-[#b5ccbf] max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming India's most trusted name in
              catering, our story is seasoned with dedication, love, and
              countless celebrations.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#67908c]/30 to-[#40584a]/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            <img
              src="/Our_story.webp"
              alt="Our Kitchen"
              loading="lazy"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#b5ccbf]/20 to-[#67908c]/20 rounded-full text-[#67908c] dark:text-[#b5ccbf] mb-6 border border-[#b5ccbf]/30">
                <Clock size={16} />
                <span className="text-sm font-bold">2025</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6 leading-tight">
                Where It All
                <span className="block text-[#67908c] dark:text-[#b5ccbf]">
                  Began
                </span>
              </h2>

              <p className="text-[#67908c] dark:text-[#b5ccbf] mb-6 text-lg leading-relaxed">
                It started with a simple dream in a small kitchen in Kolkata.
                Our founder believed that every celebration deserved food that
                was not just delicious, but memorable. Armed with his
                grandmother's recipes and a passion for hospitality, he catered
                his first event.
              </p>

              <p className="text-[#67908c] dark:text-[#b5ccbf] leading-relaxed">
                That event turned into word-of-mouth magic. Families started
                calling us for their special occasions - from birthday parties
                to corporate events. What set us apart wasn't just the taste,
                but the warmth and care we poured into every dish, treating each
                event like our own family's celebration.
              </p>
            </div>

            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#67908c]/20 to-[#b5ccbf]/10 rounded-3xl blur-2xl"></div>
              <img
                src="/Our_beginning.webp"
                alt="Our Beginning"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#40584a]/20 to-[#67908c]/20 rounded-3xl blur-2xl"></div>
              <img
                src="/Our_philosophy.jpeg"
                alt="Our Philosophy"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#b5ccbf]/20 to-[#67908c]/20 rounded-full text-[#67908c] dark:text-[#b5ccbf] mb-6 border border-[#b5ccbf]/30">
                <Target size={16} />
                <span className="text-sm font-bold">OUR PHILOSOPHY</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6 leading-tight">
                Food Is More Than
                <span className="block text-[#67908c] dark:text-[#b5ccbf]">
                  Just Nourishment
                </span>
              </h2>

              <p className="text-[#67908c] dark:text-[#b5ccbf] mb-6 text-lg leading-relaxed">
                In Indian culture, food is love served on a plate. It's the
                heart of every celebration, the thread that binds families, and
                the memory that lingers long after the last guest leaves. This
                is what drives us every single day.
              </p>

              <p className="text-[#67908c] dark:text-[#b5ccbf] mb-8 leading-relaxed">
                We source ingredients from local farmers and trusted suppliers
                across India, ensuring freshness and supporting our communities.
                Our chefs blend traditional recipes with contemporary
                techniques, creating dishes that honour our heritage while
                delighting modern palates.
              </p>

              <div className="space-y-4">
                {[
                  'Authentic flavours rooted in Indian traditions',
                  'Sustainability and ethical sourcing practices',
                  'Innovation while respecting culinary heritage',
                  'Creating memories that last a lifetime',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#67908c] to-[#40584a] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Sparkles className="text-white" size={14} />
                    </div>
                    <span className="text-[#45422a] dark:text-[#e7e3c2] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today & Future */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#e7e3c2] to-[#f5f2e8] dark:from-[#45422a] dark:to-[#3a3625] rounded-3xl p-12 md:p-16 shadow-2xl border border-[#b5ccbf]/20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6 leading-tight">
                Today & Tomorrow
              </h2>

              <p className="text-[#67908c] dark:text-[#b5ccbf] mb-6 text-lg leading-relaxed">
                Today, Mivaan Caterers has grown into a family of some dedicated
                professionals, serving clients across major cities in India
                specially in kolkata. We've catered everything from intimate
                home gatherings to grand destination weddings, corporate galas
                to cultural festivals.
              </p>

              <p className="text-[#67908c] dark:text-[#b5ccbf] mb-8 leading-relaxed">
                But our mission remains unchanged - to make every event special,
                every meal memorable, and every client feel like family. As we
                look to the future, we're excited to bring our passion for
                exceptional catering to even more celebrations, one joyous
                occasion at a time.
              </p>

              <div className="inline-flex items-center gap-3 text-[#45422a] dark:text-[#e7e3c2] font-semibold text-lg">
                <Heart
                  className="text-[#67908c] dark:text-[#b5ccbf]"
                  size={24}
                />
                <span>Thank you for being part of our story</span>
                <Heart
                  className="text-[#67908c] dark:text-[#b5ccbf]"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
