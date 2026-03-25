import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, Phone, Send } from 'lucide-react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttons = [
    {
      icon: MessageCircle,
      href: 'https://wa.me/963981235650',
      bg: 'bg-green-500 hover:bg-green-600',
      label: 'واتساب',
    },
    {
      icon: Send,
      href: 'https://t.me/+963981235650',
      bg: 'bg-blue-500 hover:bg-blue-600',
      label: 'تلغرام',
    },
    {
      icon: Phone,
      href: 'tel:0981235650',
      bg: 'bg-[#C9A84C] hover:bg-[#B89840]',
      label: 'اتصل',
    },
  ];

  return (
    <>
      {/* Contact Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3" dir="ltr">
        {buttons.map((button, index) => (
          <motion.a
            key={index}
            href={button.href}
            target={button.href.startsWith('http') ? '_blank' : undefined}
            rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-14 h-14 ${button.bg} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all group relative`}
            aria-label={button.label}
          >
            <button.icon size={24} />
            
            {/* Tooltip */}
            <span className="absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {button.label}
            </span>

            {/* Pulse Effect */}
            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 animate-ping" />
          </motion.a>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#0A1628] hover:bg-[#1A2B47] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
            aria-label="العودة للأعلى"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
