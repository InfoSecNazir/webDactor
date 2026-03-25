import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Skip animation if already visited this session
    const alreadyLoaded = sessionStorage.getItem('appLoaded');
    if (alreadyLoaded) {
      setIsLoading(false);
      return;
    }

    // Fast progress: 10 steps × 60ms = 600ms total
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Short exit delay
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('appLoaded', 'true');
          }, 200);
          return 100;
        }
        return prev + 10;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0A1628] via-[#1A2B47] to-[#0A1628]"
          dir="rtl"
        >
          <div className="relative z-10 text-center">

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-5"
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-24 h-24 mx-auto"
              >
                <svg
                  viewBox="0 0 148.202 148.203"
                  className="w-full h-full drop-shadow-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C9A84C" />
                      <stop offset="50%" stopColor="#E8D49A" />
                      <stop offset="100%" stopColor="#C9A84C" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M141.343,31.736c-2.917-12.577-11.417-21.793-24.606-26.677c-8.786-3.245-30.184-6.214-39.604,4.859
                      C46.763-8.078,30.749,1.725,19.98,13.292c-23.769,25.532-12.894,51.253-2.731,62.42c7.347,8.087,9.472,12.763,10.662,18.104
                      c0.268,1.175,0.874,4.646,0.904,5.389c1.878,44.476,17.043,48.287,20.669,48.555c1.057,0.305,2.098,0.444,3.105,0.444
                      c1.848,0,3.599-0.493,5.188-1.467c7.532-4.616,9.853-18.986,11.893-31.64c0.742-4.579,1.434-8.902,2.243-11.417
                      c1.403-4.354,2.563-5.347,2.552-5.498c1.011,0.45,2.716,3.708,2.904,4.992c0.28,1.918,0.481,4.402,0.706,7.186
                      c1.163,14.285,2.898,35.828,18.091,37.388c1.078,0.231,3.642,0.469,6.79-1.431c7.161-4.348,12.464-16.801,15.746-37.017
                      l0.493-3.233c1.182-8.104,2.819-19.211,9.512-26.25C136.441,71.742,145.775,50.859,141.343,31.736z"
                    fill="url(#toothGrad)"
                    stroke="#14B8A6"
                    strokeWidth="2"
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <h2 className="text-2xl font-bold text-white mb-1">د. عبد الرحمن القاري</h2>
              <p className="text-[#C9A84C] text-sm mb-5">ابتسامتك حياتك</p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-48 mx-auto">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                  className="h-full bg-gradient-to-r from-[#14B8A6] to-[#C9A84C] rounded-full"
                />
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
