import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Users } from 'lucide-react';

export default function ContactUs() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [callbackForm, setCallbackForm] = useState({
    name: '',
    phone: '',
    preferredTime: '',
  });

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleCallbackChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setCallbackForm({ ...callbackForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (
    e: React.FormEvent,
    formType: 'contact' | 'callback',
  ) => {
    e.preventDefault();
    // form submission logic
    console.log(formType === 'contact' ? contactForm : callbackForm);
    if (formType === 'contact') {
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } else {
      setCallbackForm({ name: '', phone: '', preferredTime: '' });
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-[#67908c]" />,
      title: 'Phone Numbers',
      details: ['+91 86177 88181', '+91 85840 09974'],
    },
    {
      icon: <Mail size={24} className="text-[#67908c]" />,
      title: 'Email',
      details: 'mivaancaterers10@gmail.com',
    },
    {
      icon: <MapPin size={24} className="text-[#67908c]" />,
      title: 'Location',
      details: '6/c, 588 Mukundapur, Kolkata 700099',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f2e8] to-[#e7e3c2] dark:from-[#2a2818] dark:to-[#45422a] overflow-x-hidden">
      {/* SEO */}
      <Helmet>
        <title>Contact Mivaan Caterers | Catering & Event Experts</title>
        <meta
          name="description"
          content="Get in touch with Mivaan Caterers for weddings, parties, and corporate events. Reach out to our expert catering and event management team today."
        />
        <meta
          name="keywords"
          content="Contact Mivaan Caterers, catering inquiry, event management contact, wedding catering contact, corporate event contact, catering services India"
        />
        <meta name="author" content="Mivaan Caterers" />
        <link rel="canonical" href="https://www.mivaancaterers.com/contact" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mivaancaterers.com/contact"
        />
        <meta
          property="og:title"
          content="Contact Mivaan Caterers | Catering & Event Experts in India"
        />
        <meta
          property="og:description"
          content="Reach out to Mivaan Caterers for professional catering and event management services for weddings, parties, and corporate events across India."
        />
        <meta
          property="og:image"
          content="https://www.mivaancaterers.com/og-contact.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.mivaancaterers.com/contact"
        />
        <meta
          name="twitter:title"
          content="Contact Mivaan Caterers | Catering & Event Experts in India"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Mivaan Caterers for expert catering and event management services for weddings, parties, and corporate events."
        />
        <meta
          name="twitter:image"
          content="https://www.mivaancaterers.com/twitter-contact.jpg"
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
              'Mivaan Caterers provides professional catering and event management services for weddings, parties, and corporate events across India. Contact us for inquiries and bookings.',
            foundingDate: '2025',
            founder: {
              '@type': 'Person',
              name: 'Mivaan Caterers Team',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-8617788181',
              contactType: 'Customer Service',
              areaServed: 'IN',
              availableLanguage: ['Bengali', 'English', 'Hindi'],
            },
          })}
        </script>
      </Helmet>

      {/* Hero Header */}
      <section className="relative py-28 bg-gradient-to-br from-[#67908c] via-[#5a7f79] to-[#40584a] dark:from-[#40584a] dark:via-[#4a5c42] dark:to-[#45422a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30 animate-fade-in-up">
            <Users size={18} />
            <span className="text-sm font-bold tracking-wide">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-in-up">
            Let's Create Your
            <span className="block bg-gradient-to-r from-white via-[#b5ccbf] to-white bg-clip-text text-transparent">
              Perfect Event With US
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Reach out to us for any inquiries, bookings, or to discuss your
            dream celebration. We're here to make it unforgettable.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28 bg-gradient-to-br from-[#e7e3c2] via-[#f0ead8] to-[#b5ccbf]/10 dark:from-[#45422a] dark:via-[#3a3625] dark:to-[#2a2818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="group text-center p-8 rounded-3xl bg-white/80 dark:bg-[#3a3625]/80 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-[#67908c]/10 transition-all duration-500 transform hover:-translate-y-2 border border-[#b5ccbf]/20 animate-slide-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#67908c] to-[#40584a] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-4 group-hover:text-[#67908c] transition-colors">
                  {info.title}
                </h3>
                {Array.isArray(info.details) ? (
                  <ul className="space-y-2 text-[#67908c] dark:text-[#b5ccbf]">
                    {info.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="text-sm font-medium hover:text-[#40584a] transition-colors"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#67908c] dark:text-[#b5ccbf] text-lg font-semibold">
                    {info.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-28 bg-gradient-to-br from-[#f5f2e8] via-[#b5ccbf]/15 to-[#e7e3c2] dark:from-[#2a2818] dark:via-[#40584a]/30 dark:to-[#45422a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-4 leading-tight">
              Find Us On The Map
            </h2>
            <p className="text-[#67908c] dark:text-[#b5ccbf] max-w-2xl mx-auto text-lg leading-relaxed">
              Visit our location in the heart of Mumbai for a tasting session or
              event consultation.
            </p>
          </div>
          <div className="relative rounded-3xl shadow-2xl overflow-hidden animate-slide-in-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.9598533880894!2d88.40616737475476!3d22.490836235963236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273dda775d2b7%3A0x9b97ab1cbcac207c!2s588%2C%20Mukundapur%20Main%20Rd%2C%20Chit%20Kalikapur%2C%20Mukundapur%2C%20Kolkata%2C%20West%20Bengal%20700099!5e1!3m2!1sen!2sin!4v1760721308769!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px] md:h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-28 bg-gradient-to-br from-[#e7e3c2] via-[#f0ead8] to-[#b5ccbf]/20 dark:from-[#45422a] dark:via-[#3a3625] dark:to-[#2a2818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#b5ccbf]/20 to-[#67908c]/20 dark:from-[#b5ccbf]/20 dark:to-[#67908c]/20 rounded-full text-[#67908c] dark:text-[#b5ccbf] mb-6 border border-[#b5ccbf]/30 mx-auto">
              <Send size={18} />
              <span className="text-sm font-bold tracking-wide">REACH OUT</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-8 leading-tight">
              Ready To Start Planning?
              <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
                Contact Us Today
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6 animate-slide-in-left">
              <div className="bg-white/80 dark:bg-[#3a3625]/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[#b5ccbf]/20">
                <h3 className="text-2xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6 flex items-center gap-3">
                  <Send size={24} className="text-[#67908c]" />
                  Send Us a Message
                </h3>
                <form
                  onSubmit={(e) => handleSubmit(e, 'contact')}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-[#b5ccbf]/30 focus:border-[#67908c] focus:outline-none bg-white/50 dark:bg-[#45422a]/50 text-[#45422a] dark:text-[#e7e3c2] placeholder-[#67908c]/50"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-[#b5ccbf]/30 focus:border-[#67908c] focus:outline-none bg-white/50 dark:bg-[#45422a]/50 text-[#45422a] dark:text-[#e7e3c2] placeholder-[#67908c]/50"
                      required
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={contactForm.phone}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[#b5ccbf]/30 focus:border-[#67908c] focus:outline-none bg-white/50 dark:bg-[#45422a]/50 text-[#45422a] dark:text-[#e7e3c2] placeholder-[#67908c]/50"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={contactForm.message}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[#b5ccbf]/30 focus:border-[#67908c] focus:outline-none bg-white/50 dark:bg-[#45422a]/50 text-[#45422a] dark:text-[#e7e3c2] placeholder-[#67908c]/50 resize-none"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#67908c] to-[#40584a] hover:from-[#40584a] hover:to-[#45422a] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>

            {/* Callback Form */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="bg-white/80 dark:bg-[#3a3625]/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[#b5ccbf]/20">
                <h3 className="text-2xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6 flex items-center gap-3">
                  <Phone size={24} className="text-[#67908c]" />
                  Request a Callback
                </h3>
                <form
                  onSubmit={(e) => handleSubmit(e, 'callback')}
                  className="space-y-6"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={callbackForm.name}
                    onChange={handleCallbackChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[#b5ccbf]/30 focus:border-[#67908c] focus:outline-none bg-white/50 dark:bg-[#45422a]/50 text-[#45422a] dark:text-[#e7e3c2] placeholder-[#67908c]/50"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={callbackForm.phone}
                    onChange={handleCallbackChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[#b5ccbf]/30 focus:border-[#67908c] focus:outline-none bg-white/50 dark:bg-[#45422a]/50 text-[#45422a] dark:text-[#e7e3c2] placeholder-[#67908c]/50"
                    required
                  />
                  <select
                    name="preferredTime"
                    value={callbackForm.preferredTime}
                    onChange={handleCallbackChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[#b5ccbf]/30 focus:border-[#67908c] focus:outline-none bg-white/50 dark:bg-[#45422a]/50 text-[#45422a] dark:text-[#e7e3c2] appearance-none"
                    required
                  >
                    <option value="">Preferred Callback Time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#67908c] to-[#40584a] hover:from-[#40584a] hover:to-[#45422a] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  >
                    Request Callback
                    <Phone size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-10deg);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-300 { animation-delay: 0.3s; }

        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
