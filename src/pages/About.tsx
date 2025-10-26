import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/section/AboutSection';
import WhyChooseUsSection from '../components/section/WhyChooseUsSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f2e8] to-[#e7e3c2] dark:from-[#2a2818] dark:to-[#45422a] overflow-x-hidden">
      {/* SEO */}
      <Helmet>
        <title>About Mivaan Caterer | Trusted Catering & Event Experts</title>
        <meta
          name="description"
          content="Learn more about Mivaan Caterers — India’s trusted catering and event management company delivering memorable experiences for weddings, corporate events, and celebrations."
        />
        <meta
          name="keywords"
          content="About Mivaan Caterers, catering company, event management team, wedding catering, corporate event organizers, catering services India"
        />
        <meta name="author" content="Mivaan Caterers" />
        <link rel="canonical" href="https://www.mivaancaterers.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mivaancaterers.com/about"
        />
        <meta
          property="og:title"
          content="About Mivaan Caterers | Catering & Event Experts"
        />
        <meta
          property="og:description"
          content="Discover the story behind Mivaan Caterers — excellence in catering and event management, delivering quality, taste, and reliability."
        />
        <meta
          property="og:image"
          content="https://www.mivaancaterers.com/og-about.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.mivaancaterers.com/about"
        />
        <meta
          name="twitter:title"
          content="About Mivaan Caterers | Premium Catering & Events"
        />
        <meta
          name="twitter:description"
          content="Get to know Mivaan Caterers — a professional team providing outstanding catering and event solutions across India."
        />
        <meta
          name="twitter:image"
          content="https://www.mivaancaterers.com/twitter-about.jpg"
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
            url: 'https://www.mivaancaterers.com/',
            logo: 'https://www.mivaancaterers.com/logo.png',
            sameAs: [
              'https://www.facebook.com/mivaancaterers',
              'https://www.instagram.com/mivaancaterers',
            ],
            description:
              'Mivaan Caterers is a professional catering and event management company offering exceptional service for weddings, parties, and corporate functions.',
            foundingDate: '2025',
            founder: {
              '@type': 'Person',
              name: 'Mivaan Caterers Team',
            },
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <AboutSection />
      <WhyChooseUsSection />
    </div>
  );
}
