import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/section/HeroSection';
import FeaturesSection from '../components/section/FeaturesSection';
import AboutSection from '../components/section/AboutSection';
import ServicesSection from '../components/section/ServicesSection';
import WhyChooseUsSection from '../components/section/WhyChooseUsSection';
import MenuSection from '../components/section/MenuSection';
import GallerySection from '../components/section/GallerySection';
import TestimonialsSection from '../components/section/TestimonialsSection';
import {
  Users,
  Calendar,
  Award,
  Clock,
  Heart,
  Shield,
  Sparkles,
} from 'lucide-react';

const heroSlides = [
  {
    image: '/Hero_section.webp',
    title: 'Exquisite Culinary Experiences',
    subtitle: 'For Your Events',
    description:
      'Transform your special day with our world-class catering services',
  },
];

const services = [
  {
    icon: <Users size={32} />,
    title: 'Wedding Catering',
    description:
      'Make your special day unforgettable with our exquisite wedding catering services and elegant presentation.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop&q=80',
    price: 'Starting from ₹800/person',
  },
  {
    icon: <Calendar size={32} />,
    title: 'Corporate Events',
    description:
      'Impress your clients and colleagues with professional catering for business events and conferences.',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop&q=80',
    price: 'Starting from ₹600/person',
  },
  {
    icon: <Heart size={32} />,
    title: 'Private Parties',
    description:
      "Celebrate life's moments with customized menus for intimate gatherings and special occasions.",
    image:
      'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=400&h=300&fit=crop&q=80',
    price: 'Starting from ₹500/person',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Birthday Celebrations',
    description:
      'Create magical memories with our themed birthday catering packages and custom cake designs.',
    image:
      'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=300&fit=crop&q=80',
    price: 'Starting from ₹400/person',
  },
];

const features = [
  { icon: <Award />, title: 'Award Winning', text: 'win industry awards' },
  {
    icon: <Shield />,
    title: 'Licensed & Insured',
    text: 'Fully certified catering',
  },
  { icon: <Clock />, title: 'On-Time Service', text: '99% punctuality rate' },
  {
    icon: <Heart />,
    title: 'Fresh Ingredients',
    text: '100% organic options',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
    text: 'The service was absolutely amazing! The food quality was exceptional and the presentation was stunning. Our wedding guests still talk about the incredible experience!',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Corporate Client',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
    text: 'They are extremely professional and reliable. The food is consistently delicious. We have used their services for company events for 3 years. Highly recommend them!',
    rating: 5,
  },
  {
    name: 'Ajay Khan',
    role: 'Event Planner',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
    text: 'Working with Mivaan Caterers is seamless. They handle everything with precision and deliver on time every single time. True professionals in every sense.',
    rating: 5,
  },
];

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f2e8] to-[#e7e3c2] dark:from-[#2a2818] dark:to-[#45422a] overflow-x-hidden">
      {/* SEO */}
      <Helmet>
        <title>
          Mivaan Caterers | Best Catering & Event Management Service
        </title>
        <meta
          name="description"
          content="Welcome to Mivaan Caterers — offering premium catering and event management services for weddings, parties, and corporate functions across India. Experience taste, elegance, and excellence with every event."
        />
        <meta
          name="keywords"
          content="Mivaan Caterers, best caterers in India, wedding catering, event management, corporate catering, party catering, professional catering services"
        />
        <meta name="author" content="Mivaan Caterers" />
        <link rel="canonical" href="https://www.mivaancaterers.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mivaancaterers.com/" />
        <meta
          property="og:title"
          content="Mivaan Caterers | Best Catering & Event Management Services"
        />
        <meta
          property="og:description"
          content="Experience world-class catering and event management with Mivaan Caterers — crafting unforgettable moments for weddings, parties, and corporate events."
        />
        <meta
          property="og:image"
          content="https://www.mivaancaterers.com/og-home.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.mivaancaterers.com/" />
        <meta
          name="twitter:title"
          content="Mivaan Caterers | Premium Catering & Events in India"
        />
        <meta
          name="twitter:description"
          content="Mivaan Caterers provides high-quality catering and event management services across India for weddings, parties, and corporate events."
        />
        <meta
          name="twitter:image"
          content="https://mivaancaterers.com/twitter-home.jpg"
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
            image: 'https://www.mivaancaterers.com/logo.png',
            '@id': 'https://www.mivaancaterers.com/',
            telephone: '+91-8617788181',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Kolkata',
              addressLocality: 'Mukundapur',
              addressRegion: 'West Bengal',
              postalCode: '700099',
              addressCountry: 'IN',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '09:00',
                closes: '21:00',
              },
            ],
            sameAs: [
              'https://www.facebook.com/mivaancaterers',
              'https://www.instagram.com/mivaancaterers',
            ],
            description:
              'Mivaan Caterers is a trusted catering and event management company in India, providing top-quality service and delicious cuisine for weddings, parties, and corporate events.',
          })}
        </script>
      </Helmet>

      <HeroSection slides={heroSlides} />
      <FeaturesSection features={features} />
      <AboutSection />
      <ServicesSection services={services} />
      <WhyChooseUsSection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
}
