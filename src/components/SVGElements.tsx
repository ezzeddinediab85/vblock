export const HoneycombPattern = ({ className = '', opacity = 0.06 }: { className?: string; opacity?: number }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} style={{ opacity, pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <pattern id="honeycomb" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
        <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="hsl(36 90% 55%)" strokeWidth="0.5" />
        <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="hsl(36 90% 55%)" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#honeycomb)" />
  </svg>
);

export const AnimatedBee = () => (
  <svg
    className="absolute z-10 pointer-events-none"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    aria-hidden="true"
    style={{
      offsetPath: "path('M 100 400 C 200 100, 400 300, 600 150 C 800 0, 1000 200, 1200 100 C 1400 0, 200 300, 100 400')",
      animation: 'beeFloat 20s linear infinite',
      offsetRotate: 'auto',
      willChange: 'transform',
      contain: 'layout style paint',
    }}
  >
    {/* Body */}
    <ellipse cx="20" cy="22" rx="8" ry="10" fill="#F5A623" />
    <rect x="13" y="18" width="14" height="3" rx="1" fill="#1a1a1a" />
    <rect x="13" y="24" width="14" height="3" rx="1" fill="#1a1a1a" />
    {/* Head */}
    <circle cx="20" cy="10" r="5" fill="#1a1a1a" />
    <circle cx="18" cy="9" r="1.2" fill="#F5A623" />
    <circle cx="22" cy="9" r="1.2" fill="#F5A623" />
    {/* Antennae */}
    <line x1="17" y1="6" x2="13" y2="1" stroke="#1a1a1a" strokeWidth="0.8" />
    <line x1="23" y1="6" x2="27" y2="1" stroke="#1a1a1a" strokeWidth="0.8" />
    <circle cx="13" cy="1" r="1" fill="#F5A623" />
    <circle cx="27" cy="1" r="1" fill="#F5A623" />
    {/* Wings */}
    <ellipse cx="12" cy="17" rx="7" ry="4" fill="rgba(255,255,255,0.3)" style={{ transformOrigin: '16px 17px', animation: 'flapWings 0.3s ease-in-out infinite' }} />
    <ellipse cx="28" cy="17" rx="7" ry="4" fill="rgba(255,255,255,0.3)" style={{ transformOrigin: '24px 17px', animation: 'flapWings 0.3s ease-in-out infinite alternate' }} />
    {/* Stinger */}
    <polygon points="20,32 18,35 22,35" fill="#1a1a1a" />
  </svg>
);

export const BeehiveSVG = () => (
  <svg viewBox="0 0 300 350" className="w-full max-w-[300px] mx-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="honeyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFD166" />
        <stop offset="100%" stopColor="#F5A623" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Row 1 */}
    <polygon points="150,20 185,40 185,80 150,100 115,80 115,40" fill="none" stroke="#F5A623" strokeWidth="1.5" opacity="0.6" />
    {/* Row 2 */}
    <polygon points="110,80 145,100 145,140 110,160 75,140 75,100" fill="url(#honeyGrad)" opacity="0.3" stroke="#F5A623" strokeWidth="1" />
    <polygon points="190,80 225,100 225,140 190,160 155,140 155,100" fill="url(#honeyGrad)" opacity="0.2" stroke="#F5A623" strokeWidth="1" />
    {/* Row 3 */}
    <polygon points="70,140 105,160 105,200 70,220 35,200 35,160" fill="none" stroke="#F5A623" strokeWidth="1" opacity="0.4" />
    <polygon points="150,140 185,160 185,200 150,220 115,200 115,160" fill="url(#honeyGrad)" opacity="0.4" stroke="#F5A623" strokeWidth="1.5" filter="url(#glow)" />
    <polygon points="230,140 265,160 265,200 230,220 195,200 195,160" fill="none" stroke="#F5A623" strokeWidth="1" opacity="0.4" />
    {/* Row 4 */}
    <polygon points="110,200 145,220 145,260 110,280 75,260 75,220" fill="url(#honeyGrad)" opacity="0.25" stroke="#F5A623" strokeWidth="1" />
    <polygon points="190,200 225,220 225,260 190,280 155,260 155,220" fill="url(#honeyGrad)" opacity="0.35" stroke="#F5A623" strokeWidth="1" />
    {/* Row 5 */}
    <polygon points="150,260 185,280 185,320 150,340 115,320 115,280" fill="none" stroke="#F5A623" strokeWidth="1.5" opacity="0.5" />
  </svg>
);
