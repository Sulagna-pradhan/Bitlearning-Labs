import { Helmet } from 'react-helmet-async';
import {
  Briefcase,
  Heart,
  Users,
  TrendingUp,
  Coffee,
  Award,
  ChefHat,
  Sparkles,
  Mail,
} from 'lucide-react';
import { useState } from 'react';

export default function CareerPage() {
  const [] = useState('');
  const [] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5eb] via-[#f0ead8] to-[#b5ccbf]/20 dark:from-[#3a3625] dark:via-[#40584a]/40 dark:to-[#2a2818]">
      {/* SEO */}
      <Helmet>
        <title>
          Careers at Mivaan Caterers | Join Our Catering & Events Team
        </title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Mivaan Caterers. Join our talented team of catering and event professionals delivering exceptional experiences across India."
        />
        <meta
          name="keywords"
          content="Mivaan Caterers careers, catering jobs, event management jobs, hospitality careers, Mivaan hiring, catering team India"
        />
        <meta name="author" content="Mivaan Caterers" />
        <link rel="canonical" href="https://www.mivaancaterers.com/careers" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mivaancaterers.com/careers"
        />
        <meta
          property="og:title"
          content="Careers at Mivaan Caterers | Join Our Team"
        />
        <meta
          property="og:description"
          content="Be a part of Mivaan Caterers — a leading catering and event management company. Apply for roles in kitchen, service, planning, and operations."
        />
        <meta
          property="og:image"
          content="https://www.mivaancaterers.com/og-careers.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.mivaancaterers.com/careers"
        />
        <meta
          name="twitter:title"
          content="Careers at Mivaan Caterers | Work with the Best"
        />
        <meta
          name="twitter:description"
          content="Join Mivaan Caterers and grow with India's trusted catering and event management brand."
        />
        <meta
          name="twitter:image"
          content="https://www.mivaancaterers.com/twitter-careers.jpg"
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
            department: [
              {
                '@type': 'Organization',
                name: 'Mivaan Catering Team',
              },
              {
                '@type': 'Organization',
                name: 'Mivaan Event Planning Team',
              },
            ],
            jobPosting: {
              '@type': 'JobPosting',
              title: 'Event Coordinator',
              description:
                'Join Mivaan Caterers as an Event Coordinator to plan, manage, and execute premium events and catering services.',
              datePosted: '2025-10-18',
              employmentType: 'FULL_TIME',
              hiringOrganization: {
                '@type': 'Organization',
                name: 'Mivaan Caterers',
                sameAs: 'https://www.mivaancaterers.com/',
              },
              jobLocation: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Kolkata',
                  addressRegion: 'West Bengal',
                  addressCountry: 'India',
                },
              },
              validThrough: '2025-12-31',
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
              <Briefcase size={18} />
              <span className="text-sm font-bold tracking-wide">
                JOIN OUR TEAM
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6 leading-tight">
              Build Your Career with
              <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
                Mivaan Caterers
              </span>
            </h1>

            <p className="text-xl text-[#67908c] dark:text-[#b5ccbf] max-w-3xl mx-auto leading-relaxed">
              Join India's leading catering family where passion meets
              profession, and every day is an opportunity to create
              unforgettable experiences.
            </p>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#67908c]/30 to-[#40584a]/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            <img
              src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg"
              alt="Our Team"
              loading="lazy"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6">
              Why Work
              <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
                With Us?
              </span>
            </h2>
            <p className="text-lg text-[#67908c] dark:text-[#b5ccbf] max-w-2xl mx-auto">
              We believe in nurturing talent, celebrating creativity, and
              building careers that last.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Work-Life Balance',
                description:
                  'We value your personal time as much as your professional dedication. Flexible schedules and supportive environment.',
                color: 'from-[#67908c] to-[#40584a]',
              },
              {
                icon: TrendingUp,
                title: 'Growth Opportunities',
                description:
                  'Regular training programs, skill development workshops, and clear career progression paths for all team members.',
                color: 'from-[#40584a] to-[#45422a]',
              },
              {
                icon: Users,
                title: 'Team Like Family',
                description:
                  'Join a diverse team of passionate professionals who support each other like a close-knit family.',
                color: 'from-[#67908c] to-[#b5ccbf]',
              },
              {
                icon: Award,
                title: 'Recognition & Rewards',
                description:
                  'Your hard work deserves appreciation. We celebrate achievements with rewards and recognition programs.',
                color: 'from-[#40584a] to-[#67908c]',
              },
              {
                icon: Coffee,
                title: 'Positive Environment',
                description:
                  'Work in a vibrant atmosphere where creativity flows, ideas are welcomed, and innovation is encouraged.',
                color: 'from-[#67908c] to-[#40584a]',
              },
              {
                icon: ChefHat,
                title: 'Learn from the Best',
                description:
                  'Work alongside award-winning chefs and industry experts who mentor and guide your professional journey.',
                color: 'from-[#40584a] to-[#b5ccbf]',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-[#e7e3c2] to-[#f5f2e8] dark:from-[#45422a] dark:to-[#3a3625] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#b5ccbf]/20"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                >
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#67908c] dark:text-[#b5ccbf] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6">
              Current
              <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
                Openings
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#e7e3c2] to-[#f5f2e8] dark:from-[#45422a] dark:to-[#3a3625] rounded-3xl p-12 md:p-16 shadow-2xl border border-[#b5ccbf]/20 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#67908c]/20 to-[#40584a]/20 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-[#67908c]/30">
                <Briefcase
                  className="text-[#67908c] dark:text-[#b5ccbf]"
                  size={40}
                />
              </div>

              <h3 className="text-3xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-4">
                No Current Positions Available
              </h3>

              <p className="text-[#67908c] dark:text-[#b5ccbf] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                We don't have any open positions at the moment, but we're always
                looking for talented individuals to join our team. Submit your
                details below, and we'll reach out when opportunities arise that
                match your profile.
              </p>

              <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#b5ccbf]/30 to-[#67908c]/30 rounded-full text-[#67908c] dark:text-[#b5ccbf] border border-[#b5ccbf]/40">
                <Sparkles size={18} />
                <span className="font-semibold">
                  We're always on the lookout for exceptional talent!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Notified 
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#67908c]/20 to-[#b5ccbf]/10 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Join Our Team"
                className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#b5ccbf]/20 to-[#67908c]/20 rounded-full text-[#67908c] dark:text-[#b5ccbf] mb-6 border border-[#b5ccbf]/30">
                <Bell size={16} />
                <span className="text-sm font-bold">STAY UPDATED</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6 leading-tight">
                Be the First to Know
                <span className="block text-[#67908c] dark:text-[#b5ccbf]">
                  About New Openings
                </span>
              </h2>

              <p className="text-[#67908c] dark:text-[#b5ccbf] mb-8 text-lg leading-relaxed">
                Sign up for job alerts and we'll notify you as soon as new
                positions open up. Whether you're a chef, event manager, service
                staff, or support professional, we'd love to hear from you!
              </p>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-5 rounded-2xl bg-white dark:bg-[#3a3625] border-2 border-[#b5ccbf]/30 focus:border-[#67908c] dark:focus:border-[#b5ccbf] outline-none text-[#45422a] dark:text-[#e7e3c2] placeholder-[#67908c]/50 dark:placeholder-[#b5ccbf]/50 text-lg transition-all duration-300"
                  />
                  <Mail
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-[#67908c] dark:text-[#b5ccbf]"
                    size={20}
                  />
                </div>

                <button
                  onClick={handleSubscribe}
                  className="w-full group px-10 py-5 bg-gradient-to-r from-[#67908c] to-[#40584a] hover:from-[#40584a] hover:to-[#45422a] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] text-lg cursor-pointer"
                >
                  <span className="flex items-center justify-center gap-3">
                    {submitted ? (
                      <>
                        <Sparkles size={20} />
                        Thank You! We'll Keep You Updated
                      </>
                    ) : (
                      <>
                        Subscribe for Job Alerts
                        <Bell
                          size={20}
                          className="group-hover:animate-bounce"
                        />
                      </>
                    )}
                  </span>
                </button>
              </div>

              <p className="text-sm text-[#67908c] dark:text-[#b5ccbf] mt-4 text-center">
                You can unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Life at Gourmet 
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6">
              Life at
              <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
                Gourmet Catering
              </span>
            </h2>
            <p className="text-lg text-[#67908c] dark:text-[#b5ccbf] max-w-2xl mx-auto">
              Experience the energy, passion, and camaraderie that makes our
              workplace special.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
              'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
              'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
            ].map((img, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-3xl shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#45422a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={img}
                  alt={`Team ${idx + 1}`}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#e7e3c2] to-[#f5f2e8] dark:from-[#45422a] dark:to-[#3a3625] rounded-3xl p-12 md:p-16 shadow-2xl border border-[#b5ccbf]/20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6">
              Have Questions About Careers?
            </h3>

            <p className="text-[#67908c] dark:text-[#b5ccbf] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Our team is here to help! Feel free to reach out with any
              questions about career opportunities, work culture, or anything
              else you'd like to know.
            </p>

            <a
              href="mailto:mivaancaterers10@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#67908c] to-[#40584a] hover:from-[#40584a] hover:to-[#45422a] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-lg"
            >
              <Mail size={20} />
              mivaancaterers10@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
