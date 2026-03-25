import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative w-14 h-7 bg-gradient-to-r from-[#C9A84C] to-[#E8D49A] dark-mode:from-[#1A2B47] dark-mode:to-[#2A3B57] rounded-full p-1 transition-all duration-300 shadow-lg hover:shadow-xl"
      whileTap={{ scale: 0.95 }}
      aria-label="تبديل الوضع الليلي"
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: isDarkMode ? 24 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      >
        {isDarkMode ? (
          <Moon size={12} className="text-[#0A1628]" />
        ) : (
          <Sun size={12} className="text-[#C9A84C]" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
