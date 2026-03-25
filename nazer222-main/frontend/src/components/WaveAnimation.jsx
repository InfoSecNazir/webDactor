import React from 'react';

const WaveAnimation = ({ color = '#14B8A6', opacity = 0.1 }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '150px' }}>
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ height: '100%' }}
      >
        {/* Wave 1 */}
        <path
          d="M0,50 C150,80 350,0 600,50 C850,100 1050,20 1200,50 L1200,120 L0,120 Z"
          fill={color}
          fillOpacity={opacity}
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,50 C150,80 350,0 600,50 C850,100 1050,20 1200,50 L1200,120 L0,120 Z;
              M0,70 C150,30 350,90 600,40 C850,0 1050,70 1200,40 L1200,120 L0,120 Z;
              M0,50 C150,80 350,0 600,50 C850,100 1050,20 1200,50 L1200,120 L0,120 Z
            "
          />
        </path>

        {/* Wave 2 */}
        <path
          d="M0,70 C150,30 350,90 600,40 C850,0 1050,70 1200,40 L1200,120 L0,120 Z"
          fill={color}
          fillOpacity={opacity * 1.5}
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,70 C150,30 350,90 600,40 C850,0 1050,70 1200,40 L1200,120 L0,120 Z;
              M0,40 C150,70 350,10 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z;
              M0,70 C150,30 350,90 600,40 C850,0 1050,70 1200,40 L1200,120 L0,120 Z
            "
          />
        </path>

        {/* Wave 3 */}
        <path
          d="M0,60 C150,90 350,30 600,70 C850,110 1050,40 1200,70 L1200,120 L0,120 Z"
          fill={color}
          fillOpacity={opacity * 2}
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M0,60 C150,90 350,30 600,70 C850,110 1050,40 1200,70 L1200,120 L0,120 Z;
              M0,80 C150,50 350,100 600,50 C850,10 1050,80 1200,50 L1200,120 L0,120 Z;
              M0,60 C150,90 350,30 600,70 C850,110 1050,40 1200,70 L1200,120 L0,120 Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default WaveAnimation;
