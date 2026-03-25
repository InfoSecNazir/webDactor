import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Professional Loading Animation for Page Transitions
 * Shows on initial page load with dental clinic branding
 */
const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0A1628] via-[#1A2B47] to-[#0A1628]"
          dir="rtl"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, #14B8A6 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            {/* Animated Logo/Tooth */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <motion.div
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotateY: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                className="w-32 h-32 mx-auto"
              >
                <svg
                  viewBox="0 0 148.202 148.203"
                  className="w-full h-full drop-shadow-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="toothGradientLoading" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C9A84C" />
                      <stop offset="50%" stopColor="#E8D49A" />
                      <stop offset="100%" stopColor="#C9A84C" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <g filter="url(#glow)">
                    <path
                      d="M141.343,31.736c-2.917-12.577-11.417-21.793-24.606-26.677c-8.786-3.245-30.184-6.214-39.604,4.859
                        C46.763-8.078,30.749,1.725,19.98,13.292c-23.769,25.532-12.894,51.253-2.731,62.42c7.347,8.087,9.472,12.763,10.662,18.104
                        c0.268,1.175,0.874,4.646,0.904,5.389c1.878,44.476,17.043,48.287,20.669,48.555c1.057,0.305,2.098,0.444,3.105,0.444
                        c1.848,0,3.599-0.493,5.188-1.467c7.532-4.616,9.853-18.986,11.893-31.64c0.742-4.579,1.434-8.902,2.243-11.417
                        c1.403-4.354,2.563-5.347,2.552-5.498c1.011,0.45,2.716,3.708,2.904,4.992c0.28,1.918,0.481,4.402,0.706,7.186
                        c1.163,14.285,2.898,35.828,18.091,37.388c1.078,0.231,3.642,0.469,6.79-1.431c7.161-4.348,12.464-16.801,15.746-37.017
                        l0.493-3.233c1.182-8.104,2.819-19.211,9.512-26.25C136.441,71.742,145.775,50.859,141.343,31.736z M124.22,75.529
                        c-8.062,8.477-9.938,21.215-11.167,29.654l-0.475,3.13c-3.782,23.255-9.408,30.275-12.416,32.395
                        c-1.59,1.12-2.582,0.962-2.473,1.005l-0.706-0.141c-10.181-0.889-11.679-19.418-12.665-31.7c-0.244-2.947-0.457-5.571-0.749-7.599
                        c-0.299-2.047-3.197-9.853-8.525-10.297c-5.729-0.384-8.217,7.252-9.033,9.797c-0.956,2.978-1.659,7.307-2.469,12.337
                        c-1.559,9.633-3.909,24.198-9.006,27.328c-0.686,0.427-1.714,0.864-3.565,0.268l-0.941-0.146h-0.082
                        c-0.155,0-13.149-1.571-14.885-42.612c-0.061-1.431-0.815-5.468-1.041-6.491c-1.638-7.318-4.923-12.994-12.133-20.922
                        c-2.414-2.643-22.776-26.631,2.683-53.972C36.269,4.999,53.528-3.508,92.721,28.679c1.334,1.087,3.288,0.904,4.391-0.43
                        c1.096-1.333,0.901-3.285-0.427-4.39c-5.023-4.113-9.736-7.611-14.157-10.538c7.222-7.252,24.266-5.279,32.065-2.387
                        c11.296,4.177,18.256,11.651,20.697,22.229C139.011,49.293,131.259,68.143,124.22,75.529z"
                      fill="url(#toothGradientLoading)"
                      stroke="#14B8A6"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </motion.div>
            </motion.div>

            {/* Clinic Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2">
                د. عبد الرحمن القاري
              </h2>
              <p className="text-[#C9A84C] text-lg mb-8">ابتسامتك حياتك</p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 mx-auto">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-[#14B8A6] via-[#C9A84C] to-[#14B8A6] rounded-full"
                />
              </div>
              <p className="text-teal-300 text-sm">{progress}%</p>
            </div>

            {/* Loading Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 bg-teal-400 rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Sparkle Effects */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="absolute w-1 h-1 bg-[#C9A84C] rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
