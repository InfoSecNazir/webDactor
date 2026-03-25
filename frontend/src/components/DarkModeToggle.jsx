import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative flex-shrink-0"
      style={{ width: '52px', height: '28px' }}
      aria-label="تبديل الوضع الليلي"
    >
      {/* Track */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          backgroundColor: isDarkMode ? '#1A2B47' : '#C9A84C',
        }}
        transition={{ duration: 0.3 }}
        style={{ boxShadow: isDarkMode ? '0 0 8px rgba(20,184,166,0.3)' : '0 0 8px rgba(201,168,76,0.4)' }}
      />

      {/* Thumb */}
      <motion.div
        className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{ right: isDarkMode ? '4px' : '28px' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDarkMode ? (
          <Moon size={11} className="text-[#0A1628]" />
        ) : (
          <Sun size={11} className="text-[#C9A84C]" />
        )}
      </motion.div>
    </button>
  );
};

export default DarkModeToggle;
