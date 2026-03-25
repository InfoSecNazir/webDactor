import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, Phone, Send } from 'lucide-react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ===== Fixed Bottom-Left Stack ===== */}
      <div className="fixed bottom-6 left-4 z-40 flex flex-col items-center gap-3">

        {/* Telegram - smallest */}
        <motion.a
          href="https://t.me/+963981235650"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.92 }}
          aria-label="تلغرام"
          className="group relative w-11 h-11 bg-sky-500 hover:bg-sky-400 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-sky-500/40 transition-colors"
        >
          <Send size={18} />
          <span className="absolute right-full mr-3 px-2.5 py-1 bg-gray-900/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            تلغرام
          </span>
        </motion.a>

        {/* Phone - medium */}
        <motion.a
          href="tel:0981235650"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.25, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.92 }}
          aria-label="اتصل بنا"
          className="group relative w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
          style={{
            background: 'linear-gradient(135deg, #C9A84C, #B89840)',
            boxShadow: '0 4px 15px rgba(201,168,76,0.4)',
          }}
        >
          <Phone size={20} />
          <span className="absolute right-full mr-3 px-2.5 py-1 bg-gray-900/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            اتصل الآن
          </span>
        </motion.a>

        {/* WhatsApp - ALWAYS VISIBLE - Largest + Pulse */}
        <motion.a
          href="https://wa.me/963981235650?text=مرحباً، أريد حجز موعد في عيادة د. عبد الرحمن القاري"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.93 }}
          aria-label="واتساب - احجز موعدك"
          className="relative w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center text-white transition-colors"
          style={{ boxShadow: '0 6px 20px rgba(34,197,94,0.5)' }}
        >
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
          <MessageCircle size={26} className="relative z-10" />

          {/* Label tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900/90 text-white text-xs rounded-xl opacity-0 hover:opacity-100 whitespace-nowrap pointer-events-none shadow-lg">
            💬 واتساب
          </span>
        </motion.a>

      </div>

      {/* ===== Scroll To Top - Bottom Right ===== */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-4 z-40 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #0A1628, #1A2B47)',
              boxShadow: '0 4px 15px rgba(10,22,40,0.5)',
            }}
            aria-label="العودة للأعلى"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
