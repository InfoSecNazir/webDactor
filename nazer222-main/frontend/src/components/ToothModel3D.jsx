import React from 'react';
import { motion } from 'framer-motion';

const ToothModel3D = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Floating Rings Background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-[500px] h-[500px] rounded-full border-2 border-teal-400/10" />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-[400px] h-[400px] rounded-full border-2 border-[#C9A84C]/10" />
      </motion.div>

      {/* Main Tooth Container */}
      <motion.div
        className="relative z-10"
        animate={{ 
          y: [-20, 20, -20],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Glow Effect Behind */}
        <motion.div
          className="absolute inset-0 blur-3xl rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(201, 168, 76, 0.4) 0%, rgba(20, 184, 166, 0.2) 50%, transparent 70%)',
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rotating Glow Ring */}
        <motion.div
          className="absolute -inset-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0%, rgba(20, 184, 166, 0.3) 20%, transparent 40%, rgba(201, 168, 76, 0.3) 60%, transparent 80%)',
              filter: 'blur(8px)'
            }}
          />
        </motion.div>

        {/* Main Tooth SVG with Multiple Animations */}
        <motion.div
          className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
          animate={{ 
            rotateY: [0, 10, 0, -10, 0],
            rotateZ: [0, 3, 0, -3, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 20px 40px rgba(20, 184, 166, 0.3))'
          }}
        >
          {/* SVG with Gradient Applied */}
          <svg 
            viewBox="0 0 512 512" 
            className="w-full h-full"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(201, 168, 76, 0.5))'
            }}
          >
            <defs>
              {/* Gold to Teal Gradient */}
              <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#F4E9C1', stopOpacity: 1 }}>
                  <animate attributeName="stop-color" 
                    values="#F4E9C1;#E8D49A;#C9A84C;#E8D49A;#F4E9C1" 
                    dur="5s" 
                    repeatCount="indefinite"/>
                </stop>
                <stop offset="50%" style={{ stopColor: '#C9A84C', stopOpacity: 1 }}>
                  <animate attributeName="stop-color" 
                    values="#C9A84C;#B89840;#C9A84C;#E8D49A;#C9A84C" 
                    dur="5s" 
                    repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" style={{ stopColor: '#14B8A6', stopOpacity: 0.8 }}>
                  <animate attributeName="stop-color" 
                    values="#14B8A6;#0D9488;#14B8A6;#5EEAD4;#14B8A6" 
                    dur="5s" 
                    repeatCount="indefinite"/>
                </stop>
              </linearGradient>

              {/* Shine Gradient */}
              <linearGradient id="shineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.6 }} />
                <stop offset="50%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.3 }} />
              </linearGradient>

              {/* Glow Filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Main Tooth Path */}
            <path 
              d="M458.672,138.656C458.672,62.078,396.578,0,320,0c-23.094,0-44.859,5.641-64,15.625
              C236.844,5.641,215.078,0,192,0C115.422,0,53.328,62.078,53.328,138.656c0,21.047,4.703,40.984,13.078,58.844l41.781,90.5
              c-10,32,6.281,224,73.141,224c21.031,0,54.047-178.484,74.656-178.625C276.594,333.219,309.609,512,330.641,512
              c66.859,0,83.141-192,73.141-224l41.812-90.5C453.969,179.641,458.672,159.703,458.672,138.656z"
              fill="url(#toothGradient)"
              filter="url(#glow)"
              stroke="#B89840"
              strokeWidth="3"
            />

            {/* Shine Overlay */}
            <path 
              d="M192,0C150.547,0,113.359,18.188,87.953,47.016c0,0,35.172-10.703,104.047-4.359
              c22.984,2.125,44.844,5.656,64,15.641V15.625C236.844,5.641,215.078,0,192,0z"
              fill="url(#shineGradient)"
              opacity="0.7"
            >
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
            </path>

            <path 
              d="M320,0c41.453,0,78.641,18.188,104.047,47.016c0,0-35.172-10.703-104.047-4.359
              c-22.984,2.125-44.859,5.656-64,15.641V15.625C275.141,5.641,296.906,0,320,0z"
              fill="url(#shineGradient)"
              opacity="0.7"
            >
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" begin="0.5s"/>
            </path>
          </svg>
        </motion.div>

        {/* Sparkles Around Tooth */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          const radius = 200;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{
                x: x - 4,
                y: y - 4,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut"
              }}
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: i % 2 === 0 ? '#C9A84C' : '#14B8A6',
                  boxShadow: `0 0 10px ${i % 2 === 0 ? '#C9A84C' : '#14B8A6'}`
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(201, 168, 76, 0.3) 0%, transparent 70%)',
        }}
        animate={{ 
          scaleX: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ToothModel3D;
