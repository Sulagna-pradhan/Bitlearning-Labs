import { Helmet } from 'react-helmet-async';
import GallerySection from '../components/section/GallerySection';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f2e8] to-[#e7e3c2] dark:from-[#2a2818] dark:to-[#45422a] overflow-x-hidden">
      {/* SEO */}
      <Helmet>
        <title>Mivaan Caterers | Event Gallery & Food Showcase</title>
        <meta
          name="description"
          content="Explore Mivaan Caterers' stunning gallery featuring event setups, elegant decorations, and delicious cuisines served at weddings, parties, and corporate events across India."
        />
        <meta
          name="keywords"
          content="Mivaan Caterers gallery, catering photos, event gallery, food showcase, wedding catering, party decorations, corporate event setups"
        />
        <meta name="author" content="Mivaan Caterers" />
        <link rel="canonical" href="https://www.mivaancaterers.com/gallery" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mivaancaterers.com/gallery"
        />
        <meta
          property="og:title"
          content="Mivaan Caterers | Event Gallery & Food Showcase"
        />
        <meta
          property="og:description"
          content="Take a look at our event gallery — beautifully arranged catering setups, elegant decor, and mouthwatering dishes prepared by Mivaan Caterers."
        />
        <meta
          property="og:image"
          content="https://www.mivaancaterers.com/og-gallery.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.mivaancaterers.com/gallery"
        />
        <meta
          name="twitter:title"
          content="Mivaan Caterers | Gallery of Events & Catering Excellence"
        />
        <meta
          name="twitter:description"
          content="View Mivaan Caterers’ gallery — featuring elegant decor, creative food presentation, and event highlights across India."
        />
        <meta
          name="twitter:image"
          content="https://www.mivaancaterers.com/twitter-gallery.jpg"
        />

        {/* Favicon & Theme */}
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta name="theme-color" content="#f5f2e8" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'Mivaan Caterers',
            url: 'https://www.mivaancaterers.com/gallery',
            description:
              'Mivaan Caterers showcases its portfolio of catering setups, event decor, and food presentations through an image-rich gallery.',
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

      <GallerySection />
    </div>
  );
}
