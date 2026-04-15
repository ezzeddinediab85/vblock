interface BeeIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const BeeIcon = ({ size = 18, color = '#F5A623', className }: BeeIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Wings */}
    <ellipse cx="8" cy="8" rx="4" ry="3" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
    <ellipse cx="16" cy="8" rx="4" ry="3" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
    {/* Body */}
    <ellipse cx="12" cy="14" rx="4.5" ry="6" stroke={color} strokeWidth="1.5" fill="none" />
    {/* Stripes */}
    <line x1="7.5" y1="12.5" x2="16.5" y2="12.5" stroke={color} strokeWidth="1.2" />
    <line x1="7.8" y1="15" x2="16.2" y2="15" stroke={color} strokeWidth="1.2" />
    <line x1="8.5" y1="17.5" x2="15.5" y2="17.5" stroke={color} strokeWidth="1.2" />
    {/* Antennae */}
    <path d="M10 8.5 Q9 5 7 4" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M14 8.5 Q15 5 17 4" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </svg>
);
