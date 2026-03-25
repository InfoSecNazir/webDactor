import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isSidebarOpen]);

  const navItems = [
    { name: 'الرئيسية', path: '/', icon: '🏠' },
    { name: 'عن الدكتور', path: '/about', icon: '👨‍⚕️' },
    { name: 'الخدمات', path: '/services', icon: '🦷' },
    { name: 'التجهيزات', path: '/equipment', icon: '🔬' },
    { name: 'آراء المرضى', path: '/testimonials', icon: '⭐' },
    { name: 'احجز موعد', path: '/contact', icon: '📅' },
  ];

  return (
    <>
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
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0">
                  <img 
                    src="/images/logo.png" 
                    alt="شعار عيادة د. عبد الرحمن القاري"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
                <div>
                  <h1 className="text-sm sm:text-base md:text-xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                    <span className="sm:hidden">عيادة القاري</span>
                    <span className="hidden sm:block">د. عبد الرحمن القاري</span>
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

            {/* Desktop Contact Buttons */}
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

            {/* Mobile: DarkMode + Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <DarkModeToggle />
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="w-9 h-9 flex items-center justify-center rounded-xl transition-colors flex-shrink-0"
                style={{ color: 'var(--text-primary)', backgroundColor: 'var(--bg-secondary)' }}
                aria-label="فتح القائمة"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE SIDEBAR ===== */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar Panel - slides from RIGHT (RTL) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 z-50 flex flex-col"
              style={{ backgroundColor: 'var(--bg-primary)', borderLeft: '1px solid var(--bg-secondary)' }}
              dir="rtl"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: 'var(--bg-secondary)' }}>
                <Link to="/" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md">
                    <img src="/images/logo.png" alt="الشعار" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>د. عبد الرحمن القاري</p>
                    <p className="text-xs text-[#C9A84C]">ابتسامتك حياتك</p>
                  </div>
                </Link>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl transition-colors"
                  style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto py-4 px-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center gap-4 px-4 py-4 rounded-2xl mb-2 transition-all ${
                        location.pathname === item.path
                          ? 'bg-[#C9A84C] text-white shadow-lg'
                          : 'hover:bg-[var(--bg-secondary)]'
                      }`}
                      style={{ color: location.pathname !== item.path ? 'var(--text-primary)' : undefined }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-semibold text-base">{item.name}</span>
                      {location.pathname === item.path && (
                        <span className="mr-auto w-2 h-2 bg-white rounded-full" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Sidebar Footer - Quick Contact */}
              <div className="p-4 border-t space-y-3" style={{ borderColor: 'var(--bg-secondary)' }}>
                <p className="text-xs font-bold text-[#C9A84C] mb-3 flex items-center gap-2">
                  <span>📞</span> تواصل سريع
                </p>
                <a
                  href="https://wa.me/963981235650"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition-colors"
                >
                  <span className="text-xl">💬</span>
                  <span className="font-semibold text-sm">واتساب</span>
                </a>
                <a
                  href="tel:0981235650"
                  className="flex items-center gap-3 px-4 py-3 bg-[#C9A84C] text-white rounded-2xl hover:bg-[#B89840] transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-semibold text-sm">0981235650</span>
                </a>
                <div className="flex items-start gap-2 pt-2">
                  <Clock size={14} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>يومياً عدا الجمعة • 3:00 - 9:00 م</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
