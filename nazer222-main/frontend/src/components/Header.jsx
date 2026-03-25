import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عن الدكتور', path: '/about' },
    { name: 'الخدمات', path: '/services' },
    { name: 'التجهيزات', path: '/equipment' },
    { name: 'آراء المرضى', path: '/testimonials' },
    { name: 'احجز موعد', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-primary)] shadow-md py-3'
          : 'bg-[var(--bg-primary)]/95 backdrop-blur-sm py-5'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="شعار عيادة د. عبد الرحمن القاري"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  د. عبد الرحمن القاري
                </h1>
                <p className="text-xs text-[#C9A84C]">ابتسامتك حياتك</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-[#C9A84C] ${
                    location.pathname === item.path 
                      ? 'text-[#C9A84C]' 
                      : ''
                  }`}
                  style={{ color: location.pathname !== item.path ? 'var(--text-primary)' : undefined }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <DarkModeToggle />
            <motion.a
              href="tel:0981235650"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-[#C9A84C] text-white rounded-full hover:bg-[#B89840] transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">اتصل الآن</span>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/dr_al_qari"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Instagram size={18} className="text-[#C9A84C]" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-[#C9A84C] text-white'
                        : 'hover:bg-[#FFF8E7]'
                    }`}
                    style={{ color: location.pathname !== item.path ? 'var(--text-primary)' : undefined }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3 mt-4 px-4">
                <a
                  href="tel:0981235650"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#C9A84C] text-white rounded-full"
                >
                  <Phone size={16} />
                  <span className="text-sm">اتصل الآن</span>
                </a>
                <a
                  href="https://www.instagram.com/dr_al_qari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md"
                >
                  <Instagram size={18} className="text-[#C9A84C]" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
