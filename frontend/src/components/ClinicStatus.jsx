import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ClinicStatus = ({ compact = false }) => {
  const [status, setStatus] = useState({
    isOpen: false,
    currentTime: '',
    message: '',
    nextChange: '',
  });

  useEffect(() => {
    const updateStatus = () => {
      // Get current time in Syria (Damascus timezone - UTC+3 in summer, UTC+2 in winter)
      const now = new Date();
      const syriaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Damascus' }));
      
      const day = syriaTime.getDay(); // 0 = Sunday, 5 = Friday
      const hours = syriaTime.getHours();
      const minutes = syriaTime.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      // Working hours: 3:00 PM to 9:00 PM (15:00 to 21:00)
      const openTime = 15 * 60; // 3:00 PM in minutes
      const closeTime = 21 * 60; // 9:00 PM in minutes

      // Format current time
      const timeString = syriaTime.toLocaleTimeString('ar-SY', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      let isOpen = false;
      let message = '';
      let nextChange = '';

      // Check if Friday (closed)
      if (day === 5) {
        message = 'مغلق اليوم - يوم الجمعة';
        nextChange = 'نفتح غداً السبت الساعة 3:00 مساءً';
      } 
      // Check if within working hours
      else if (currentMinutes >= openTime && currentMinutes < closeTime) {
        isOpen = true;
        const minutesUntilClose = closeTime - currentMinutes;
        const hoursUntilClose = Math.floor(minutesUntilClose / 60);
        const minsUntilClose = minutesUntilClose % 60;
        
        message = 'مفتوح الآن';
        if (hoursUntilClose > 0) {
          nextChange = `يغلق بعد ${hoursUntilClose} ساعة و ${minsUntilClose} دقيقة`;
        } else {
          nextChange = `يغلق بعد ${minsUntilClose} دقيقة`;
        }
      }
      // Before opening hours
      else if (currentMinutes < openTime) {
        const minutesUntilOpen = openTime - currentMinutes;
        const hoursUntilOpen = Math.floor(minutesUntilOpen / 60);
        const minsUntilOpen = minutesUntilOpen % 60;
        
        message = 'مغلق الآن';
        if (hoursUntilOpen > 0) {
          nextChange = `يفتح بعد ${hoursUntilOpen} ساعة و ${minsUntilOpen} دقيقة`;
        } else {
          nextChange = `يفتح بعد ${minsUntilOpen} دقيقة`;
        }
      }
      // After closing hours
      else {
        message = 'مغلق الآن';
        // Check if tomorrow is Friday
        if (day === 4) { // Thursday
          nextChange = 'يفتح يوم السبت الساعة 3:00 مساءً';
        } else {
          nextChange = 'يفتح غداً الساعة 3:00 مساءً';
        }
      }

      setStatus({
        isOpen,
        currentTime: timeString,
        message,
        nextChange,
      });
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div 
            className={`w-2 h-2 rounded-full ${
              status.isOpen ? 'bg-green-500' : 'bg-red-500'
            }`}
            style={{
              boxShadow: status.isOpen 
                ? '0 0 10px rgba(34, 197, 94, 0.6)' 
                : '0 0 10px rgba(239, 68, 68, 0.6)'
            }}
          />
        </motion.div>
        <span className={`text-sm font-medium ${
          status.isOpen ? 'text-green-600' : 'text-gray-600'
        }`}>
          {status.message}
        </span>
      </div>
    );
  }

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-5 rounded-2xl border-2 transition-colors duration-300 ${
          status.isOpen 
            ? 'border-green-200' 
            : 'border-gray-200'
        }`}
        style={{
          background: status.isOpen 
            ? 'linear-gradient(135deg, color-mix(in srgb, #10b981 8%, var(--bg-primary)), color-mix(in srgb, #10b981 5%, var(--bg-primary)))' 
            : 'var(--bg-secondary)'
        }}
      >
        <div className="flex items-start gap-4">
          {/* Status Icon */}
          <div className="relative">
            <motion.div
              animate={{ 
                rotate: status.isOpen ? 0 : 360,
                scale: status.isOpen ? [1, 1.1, 1] : 1
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              {status.isOpen ? (
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <CheckCircle className="text-white" size={28} />
                </div>
              ) : (
                <div className="w-14 h-14 bg-gradient-to-br from-gray-400 to-slate-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <XCircle className="text-white" size={28} />
                </div>
              )}
            </motion.div>
            
            {/* Pulse Effect for Open Status */}
            {status.isOpen && (
              <motion.div
                className="absolute inset-0 bg-green-400 rounded-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </div>

          {/* Status Text */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className={`text-xl font-bold ${
                status.isOpen ? 'text-green-600' : 'text-heading transition-colors'
              }`}>
                {status.message}
              </h3>
              <AnimatePresence mode="wait">
                <motion.div
                  key={status.isOpen ? 'open' : 'closed'}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                    status.isOpen 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-400 text-white'
                  }`}
                >
                  {status.isOpen ? 'OPEN' : 'CLOSED'}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Current Time */}
            <div className="flex items-center gap-2 text-sm text-body transition-colors mb-2">
              <Clock size={16} className="text-body transition-colors" />
              <span className="font-medium">الساعة الآن: {status.currentTime}</span>
            </div>

            {/* Next Change Info */}
            <p className="text-sm text-body transition-colors font-medium">
              {status.nextChange}
            </p>

            {/* Working Hours */}
            <div className="mt-3 pt-3 border-t border-light transition-colors">
              <p className="text-xs text-body transition-colors mb-1">أوقات الدوام:</p>
              <p className="text-sm font-medium text-heading transition-colors">
                يومياً عدا الجمعة • 3:00 - 9:00 مساءً
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClinicStatus;
