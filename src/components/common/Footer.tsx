import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Clock,
  Award,
  Heart,
  ArrowRight,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#e7e3c2] dark:bg-[#45422a] border-t border-[#b5ccbf]/50 dark:border-[#b5ccbf]/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#67908c] to-[#40584a] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#45422a] dark:text-[#e7e3c2]">
                  Mivaan Caterers & Event Management Services
                </span>
                <span className="text-xs text-[#67908c] dark:text-[#b5ccbf]">
                  Taste the Excellence
                </span>
              </div>
            </div>
            <p className="text-[#67908c] dark:text-[#b5ccbf] text-sm leading-relaxed">
              Creating unforgettable culinary experiences for multiple years.
              From intimate gatherings to grand celebrations, we bring
              excellence to every event.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center text-[#67908c] dark:text-[#b5ccbf] hover:bg-gradient-to-br hover:from-[#67908c] hover:to-[#40584a] hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center text-[#67908c] dark:text-[#b5ccbf] hover:bg-gradient-to-br hover:from-[#67908c] hover:to-[#40584a] hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              {/*
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center text-[#67908c] dark:text-[#b5ccbf] hover:bg-gradient-to-br hover:from-[#67908c] hover:to-[#40584a] hover:text-white transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center text-[#67908c] dark:text-[#b5ccbf] hover:bg-gradient-to-br hover:from-[#67908c] hover:to-[#40584a] hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center text-[#67908c] dark:text-[#b5ccbf] hover:bg-gradient-to-br hover:from-[#67908c] hover:to-[#40584a] hover:text-white transition-all duration-300"
              >
                <Youtube size={18} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span>Our Menu</span>
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span>Gallery</span>
                </a>
              </li>
              <li>
                <a
                  href="/whyus"
                  className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span>Why Us</span>
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span>Careers</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/service/wedding-catering"
                  className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span>Wedding Catering</span>
                </a>
              </li>
              <li>
                <a
                  href="/service/corporate-events"
                  className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span>Corporate Events</span>
                </a>
              </li>
              <li>
                <a
                  href="/service/private-parties"
                  className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span>Private Parties</span>
                </a>
              </li>
              <li>
                <a
                  href="/service/birthday-celebrations"
                  className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span>Birthday Celebrations</span>
                </a>
              </li>
              <li>
                <a
                  href="/service/holiday-catering"
                  className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span>Holiday Catering</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-[#45422a] dark:text-[#e7e3c2] mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin
                    size={18}
                    className="text-[#67908c] dark:text-[#b5ccbf]"
                  />
                </div>
                <div>
                  <p className="text-sm text-[#67908c] dark:text-[#b5ccbf]">
                    6/c, 588 Mukundapur
                    <br />
                    Kolkata, 700099, West Bengal, India
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center flex-shrink-0">
                  <Phone
                    size={18}
                    className="text-[#67908c] dark:text-[#b5ccbf]"
                  />
                </div>
                <div>
                  <a
                    href="tel:+918617788181"
                    className="text-sm text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition"
                  >
                    +91 86177 88181 <br></br>
                    +91 85840 09974
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center flex-shrink-0">
                  <Mail
                    size={18}
                    className="text-[#67908c] dark:text-[#b5ccbf]"
                  />
                </div>
                <div>
                  <a
                    href="mailto:mivaancaterers10@gmail.com"
                    className="text-sm text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition"
                  >
                    mivaancaterers10@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center flex-shrink-0">
                  <Clock
                    size={18}
                    className="text-[#67908c] dark:text-[#b5ccbf]"
                  />
                </div>
                <div>
                  <p className="text-sm text-[#67908c] dark:text-[#b5ccbf]">
                    Mon - Sat: 9AM - 8PM
                    <br />
                    Sunday: By Appointment
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#9eb7a0]/50 dark:border-[#3c3a27]/50">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center mb-3">
              <Award size={28} className="text-[#67908c] dark:text-[#b5ccbf]" />
            </div>
            <h5 className="font-bold text-[#45422a] dark:text-[#e7e3c2] text-lg">
              2+ Years
            </h5>
            <p className="text-sm text-[#67908c] dark:text-[#b5ccbf]">
              Experience
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center mb-3">
              <Heart size={28} className="text-[#67908c] dark:text-[#b5ccbf]" />
            </div>
            <h5 className="font-bold text-[#45422a] dark:text-[#e7e3c2] text-lg">
              1000+
            </h5>
            <p className="text-sm text-[#67908c] dark:text-[#b5ccbf]">
              Happy Clients
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center mb-3">
              <Award size={28} className="text-[#67908c] dark:text-[#b5ccbf]" />
            </div>
            <h5 className="font-bold text-[#45422a] dark:text-[#e7e3c2] text-lg">
              100%
            </h5>
            <p className="text-sm text-[#67908c] dark:text-[#b5ccbf]">
              Satisfaction
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 flex items-center justify-center mb-3">
              <Award size={28} className="text-[#67908c] dark:text-[#b5ccbf]" />
            </div>
            <h5 className="font-bold text-[#45422a] dark:text-[#e7e3c2] text-lg">
              5+
            </h5>
            <p className="text-sm text-[#67908c] dark:text-[#b5ccbf]">
              Awards Won
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#a0b49f]/70 dark:border-[#3a3725]/70 bg-[#e7e3c2] dark:bg-[#45422a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#67908c] dark:text-[#b5ccbf] text-center md:text-left">
              © {currentYear} Mivaan Caterers & Event Management Services. All
              rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/privacy"
                className="text-sm text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-sm text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition"
              >
                Cookie Policy
              </a>
              <a
                href="/sitemap"
                className="text-sm text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
