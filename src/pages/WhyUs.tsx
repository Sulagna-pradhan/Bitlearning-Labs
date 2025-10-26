import { Helmet } from 'react-helmet-async';
import WhyChooseUsSection from '../components/section/WhyChooseUsSection';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f2e8] to-[#e7e3c2] dark:from-[#2a2818] dark:to-[#45422a] overflow-x-hidden">
      {/* SEO */}
      <Helmet>
        <title>
          Why Choose Mivaan Caterers | Trusted Catering & Event Experts
        </title>
        <meta
          name="description"
          content="Discover why Mivaan Caterers is the preferred choice for weddings, parties, and corporate events. Learn about our quality, reliability, and exceptional catering services."
        />
        <meta
          name="keywords"
          content="Why Mivaan Caterers, best catering services India, event management, wedding catering, corporate catering, trusted catering company, catering excellence"
        />
        <meta name="author" content="Mivaan Caterers" />
        <link rel="canonical" href="https://www.mivaancaterers.com/whyus" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mivaancaterers.com/whyus"
        />
        <meta
          property="og:title"
          content="Why Choose Mivaan Caterers | Trusted Catering & Event Experts"
        />
        <meta
          property="og:description"
          content="Learn why Mivaan Caterers is the top choice for catering and event management, delivering exceptional quality, reliability, and memorable experiences."
        />
        <meta
          property="og:image"
          content="https://www.mivaancaterers.com/og-whyus.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.mivaancaterers.com/whyus"
        />
        <meta
          name="twitter:title"
          content="Why Choose Mivaan Caterers | Trusted Catering & Event Experts"
        />
        <meta
          name="twitter:description"
          content="Discover why clients trust Mivaan Caterers for weddings, corporate events, and parties — quality, reliability, and unmatched catering services."
        />
        <meta
          name="twitter:image"
          content="https://www.mivaancaterers.com/twitter-whyus.jpg"
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
              'Mivaan Caterers is a trusted catering and event management company providing exceptional services for weddings, parties, and corporate events across India. Learn why clients choose us for quality and reliability.',
            foundingDate: '2025',
            founder: {
              '@type': 'Person',
              name: 'Mivaan Caterers Team',
            },
            brand: {
              '@type': 'Brand',
              name: 'Mivaan Caterers',
              description:
                'A leading catering and event management brand delivering memorable experiences through quality, service, and expertise.',
            },
          })}
        </script>
      </Helmet>

      <WhyChooseUsSection />
    </div>
  );
}
