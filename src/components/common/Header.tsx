import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu and reset all states when route changes
  useEffect(() => {
    // Force immediate state reset
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);

    // Force immediate body scroll unlock
    document.body.style.overflow = 'unset';

    // Scroll to top on route change - use setTimeout to ensure smooth transition
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Element | null;
      if (isOpen && target && !target.closest('header')) {
        setIsOpen(false);
        setMobileServicesOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const services = [
    { name: 'Wedding Catering', icon: '💒' },
    { name: 'Corporate Events', icon: '🏢' },
    { name: 'Private Parties', icon: '🎉' },
    { name: 'Birthday Celebrations', icon: '🎂' },
    { name: 'Holiday Catering', icon: '🎄' },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    // Immediately unlock scroll
    document.body.style.overflow = 'unset';
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#e7e3c2]/95 dark:bg-[#45422a]/95 backdrop-blur-sm shadow-lg'
          : 'bg-[#e7e3c2] dark:bg-[#45422a]'
      }`}
    >
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-gradient-to-br from-[#67908c] to-[#40584a] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-lg md:text-xl font-bold text-[#45422a] dark:text-[#e7e3c2] truncate">
                Mivaan Caterers
              </span>
              <span className="text-xs text-[#67908c] dark:text-[#b5ccbf]">
                Taste the Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition font-medium"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="flex items-center gap-1 text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition font-medium cursor-pointer"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute top-full mt-2 w-64 bg-[#e7e3c2] dark:bg-[#45422a] rounded-xl shadow-2xl py-3 border border-[#b5ccbf]/30 dark:border-[#b5ccbf]/20 left-0 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {services.map((service, idx) => {
                    const route = `/service/${service.name
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .replace(/[^a-z-]/g, '')}`;

                    return (
                      <Link
                        key={idx}
                        to={route}
                        className="flex items-center gap-3 px-4 py-3 text-[#67908c] dark:text-[#b5ccbf] hover:bg-[#b5ccbf]/30 dark:hover:bg-[#b5ccbf]/20 hover:text-[#40584a] dark:hover:text-[#67908c] transition-all duration-200"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span className="text-xl">{service.icon}</span>
                        <span className="font-medium">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/menu"
              className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition font-medium"
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-[#67908c] dark:text-[#b5ccbf] hover:text-[#40584a] dark:hover:text-[#67908c] transition font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-[#b5ccbf]/20 dark:bg-[#b5ccbf]/20 text-[#67908c] dark:text-[#b5ccbf] hover:bg-[#b5ccbf]/40 dark:hover:bg-[#b5ccbf]/30 transition flex-shrink-0 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Get Started Button */}
            <Link
              to="/contact"
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-[#67908c] to-[#40584a] hover:from-[#40584a] hover:to-[#45422a] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-shrink-0"
            >
              Book Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-[#67908c] dark:text-[#b5ccbf] hover:bg-[#b5ccbf]/20 dark:hover:bg-[#b5ccbf]/20 transition flex-shrink-0 z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 top-[72px]"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 right-0 bg-[#e7e3c2] dark:bg-[#45422a] border-t border-[#b5ccbf]/20 dark:border-[#b5ccbf]/20 overflow-y-auto z-40 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-[calc(100vh-72px)] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
          <Link
            to="/"
            className="block px-4 py-3 text-[#67908c] dark:text-[#b5ccbf] hover:bg-[#b5ccbf]/50 dark:hover:bg-[#b5ccbf]/20 hover:text-[#40584a] rounded-lg transition font-medium"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-3 text-[#67908c] dark:text-[#b5ccbf] hover:bg-[#b5ccbf]/50 dark:hover:bg-[#b5ccbf]/20 hover:text-[#40584a] rounded-lg transition font-medium"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>

          {/* Mobile Services Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-[#67908c] dark:text-[#b5ccbf] hover:bg-[#b5ccbf]/50 dark:hover:bg-[#b5ccbf]/20 rounded-lg transition font-medium"
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-1 pl-4 py-2">
                {services.map((service, idx) => {
                  const route = `/service/${service.name
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^a-z-]/g, '')}`;

                  return (
                    <Link
                      key={idx}
                      to={route}
                      className="flex items-center gap-3 px-4 py-2.5 text-[#67908c] dark:text-[#b5ccbf] hover:bg-[#b5ccbf]/50 dark:hover:bg-[#b5ccbf]/20 hover:text-[#40584a] rounded-lg transition"
                      onClick={closeMobileMenu}
                    >
                      <span className="text-lg">{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link
            to="/menu"
            className="block px-4 py-3 text-[#67908c] dark:text-[#b5ccbf] hover:bg-[#b5ccbf]/50 dark:hover:bg-[#b5ccbf]/20 hover:text-[#40584a] rounded-lg transition font-medium"
            onClick={closeMobileMenu}
          >
            Menu
          </Link>
          <Link
            to="/gallery"
            className="block px-4 py-3 text-[#67908c] dark:text-[#b5ccbf] hover:bg-[#b5ccbf]/50 dark:hover:bg-[#b5ccbf]/20 hover:text-[#40584a] rounded-lg transition font-medium"
            onClick={closeMobileMenu}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-3 text-[#67908c] dark:text-[#b5ccbf] hover:bg-[#b5ccbf]/50 dark:hover:bg-[#b5ccbf]/20 hover:text-[#40584a] rounded-lg transition font-medium"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>

          <div className="pt-4 pb-2">
            <Link
              to="/contact"
              className="block w-full px-6 py-3 bg-gradient-to-r from-[#67908c] to-[#40584a] hover:from-[#40584a] hover:to-[#45422a] text-white font-semibold rounded-full shadow-lg transition-all duration-300 text-center"
              onClick={closeMobileMenu}
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
