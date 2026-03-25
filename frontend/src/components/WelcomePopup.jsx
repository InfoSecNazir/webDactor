import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, Star, Clock } from 'lucide-react';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup only if not seen this session
    const seen = sessionStorage.getItem('welcomePopupSeen');
    if (!seen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3500); // Show after 3.5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('welcomePopupSeen', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            dir="rtl"
          >
            <div
              className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: 'var(--bg-primary)' }}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 left-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
              >
                <X size={16} />
              </button>

              {/* Top Banner */}
              <div
                className="relative p-6 text-center"
                style={{
                  background: 'linear-gradient(135deg, #0A1628 0%, #14B8A6 50%, #C9A84C 100%)',
                }}
              >
                {/* Sparkles */}
                <div className="absolute top-2 right-6 text-2xl animate-bounce" style={{ animationDelay: '0s' }}>✨</div>
                <div className="absolute top-4 left-10 text-xl animate-bounce" style={{ animationDelay: '0.3s' }}>⭐</div>

                {/* Tooth Icon */}
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                  <img src="/images/logo.png" alt="شعار العيادة" className="w-16 h-16 rounded-full object-cover" />
                </div>

                <h2 className="text-xl font-bold text-white mb-1">
                  أهلاً بك في عيادتنا! 👋
                </h2>
                <p className="text-[#E8D49A] text-sm font-medium">
                  عيادة د. عبد الرحمن القاري
                </p>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Offer Badge */}
                <div
                  className="flex items-center gap-3 p-4 rounded-2xl mb-5"
                  style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid rgba(201,168,76,0.3)' }}
                >
                  <span className="text-3xl">🎁</span>
                  <div>
                    <p className="font-bold text-sm text-heading transition-colors">استشارة مجانية!</p>
                    <p className="text-xs text-body transition-colors">احجز موعدك واحصل على تقييم مجاني لأسنانك</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-body mr-2 transition-colors">+5000 مريض سعيد</span>
                </div>

                {/* Clinic hours */}
                <div className="flex items-center gap-2 justify-center mb-5">
                  <Clock size={14} className="text-[#C9A84C]" />
                  <span className="text-xs text-body transition-colors">يومياً عدا الجمعة • 3:00 - 9:00 مساءً</span>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href="https://wa.me/963981235650?text=مرحباً، أريد حجز موعد في عيادة د. عبد الرحمن القاري"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 text-white font-bold rounded-2xl hover:bg-green-600 transition-all hover:scale-[1.02] shadow-lg"
                  >
                    <MessageCircle size={20} />
                    <span>احجز عبر واتساب الآن</span>
                  </a>
                  <a
                    href="tel:0981235650"
                    onClick={handleClose}
                    className="flex items-center justify-center gap-3 w-full py-3 rounded-2xl font-medium text-sm transition-all hover:scale-[1.02]"
                    style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--bg-accent)' }}
                  >
                    <Phone size={16} />
                    <span>0981235650</span>
                  </a>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full mt-3 text-xs text-body hover:text-heading transition-colors py-1"
                >
                  ربما لاحقاً
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
