import { Helmet } from 'react-helmet-async';
import TestimonialsSection from '../components/section/TestimonialsSection';

const testimonials = [
  {
    name: 'Sohini Chatterjee',
    role: 'Bride',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&q=80',
    text: 'Everything was just perfect! The food tasted amazing and the decoration was so beautiful. Our guests were really happy with the whole arrangement.',
    rating: 5,
  },
  {
    name: 'Anirban Dey',
    role: 'Corporate Client',
    image:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=100&h=100&fit=crop&q=80',
    text: 'Very professional team and the food quality is top-notch. We booked them for our office annual event, and everyone appreciated their service.',
    rating: 5,
  },
  {
    name: 'Moumita Ghosh',
    role: 'Birthday Event',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80',
    text: 'They made my daughter’s birthday really special. The snacks were tasty, and the decoration was so lively. We will surely call them again!',
    rating: 5,
  },
  {
    name: 'Arijit Banerjee',
    role: 'Event Organizer',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop&q=80',
    text: 'The team managed everything very smoothly. From food to service, everything was handled with care and warmth. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Rupa Sen',
    role: 'Family Function',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80',
    text: 'We booked them for our anniversary celebration. The menu had a nice mix of Bengali and North Indian dishes, and everyone loved the taste!',
    rating: 5,
  },
];

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f2e8] to-[#e7e3c2] dark:from-[#2a2818] dark:to-[#45422a] overflow-x-hidden">
      {/* SEO */}
      <Helmet>
        <title>
          Testimonials | Mivaan Caterers — Trusted Catering & Event Reviews
        </title>
        <meta
          name="description"
          content="Read what our happy clients say about Mivaan Caterers. Discover reviews and testimonials from weddings, parties, and corporate events across India."
        />
        <meta
          name="keywords"
          content="Mivaan Caterers testimonials, catering reviews, client feedback, event management reviews, wedding catering testimonials, corporate event reviews"
        />
        <meta name="author" content="Mivaan Caterers" />
        <link
          rel="canonical"
          href="https://www.mivaancaterers.com/testimonials"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mivaancaterers.com/testimonials"
        />
        <meta
          property="og:title"
          content="Testimonials | Mivaan Caterers — Trusted Catering & Event Reviews"
        />
        <meta
          property="og:description"
          content="See what our clients say about Mivaan Caterers — delivering exceptional catering and event management services across India."
        />
        <meta
          property="og:image"
          content="https://www.mivaancaterers.com/og-testimonials.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.mivaancaterers.com/testimonials"
        />
        <meta
          name="twitter:title"
          content="Testimonials | Mivaan Caterers — Trusted Catering & Event Reviews"
        />
        <meta
          name="twitter:description"
          content="Discover customer reviews and testimonials about Mivaan Caterers' catering and event management services for weddings, parties, and corporate events."
        />
        <meta
          name="twitter:image"
          content="https://www.mivaancaterers.com/twitter-testimonials.jpg"
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
              'Mivaan Caterers is a professional catering and event management company offering exceptional service for weddings, parties, and corporate functions. Read testimonials from our satisfied clients.',
            foundingDate: '2025',
            founder: {
              '@type': 'Person',
              name: 'Mivaan Caterers Team',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '3',
            },
            review: [
              {
                '@type': 'Review',
                author: 'Priya Sharma',
                datePublished: '2025-01-15',
                reviewBody:
                  'The service was absolutely amazing! The food quality was exceptional and the presentation was stunning. Our wedding guests still talk about the incredible experience!',
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: '5',
                  bestRating: '5',
                },
              },
              {
                '@type': 'Review',
                author: 'Rajesh Kumar',
                datePublished: '2025-03-10',
                reviewBody:
                  'They are extremely professional and reliable. The food is consistently delicious. We have used their services for company events for 3 years. Highly recommend them!',
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: '5',
                  bestRating: '5',
                },
              },
              {
                '@type': 'Review',
                author: 'Aisha Khan',
                datePublished: '2025-04-05',
                reviewBody:
                  'Working with Gourmet Catering is seamless. They handle everything with precision and deliver on time every single time. True professionals in every sense.',
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: '5',
                  bestRating: '5',
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
}
