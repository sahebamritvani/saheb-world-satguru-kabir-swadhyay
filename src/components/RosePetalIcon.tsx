import React from 'react';

export interface RosePetalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  fillColor?: string;
  className?: string;
}

export const RosePetalIcon: React.FC<RosePetalIconProps> = ({
  size = 24,
  color = '#8B4513',
  fillColor,
  className = '',
  ...props
}) => {
  const currentFill = fillColor || `${color}20`; // 12% subtle background fill
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Rose Blossom Layer 1 - Outer Bloom Petals */}
      <path
        d="M12 2.5C9.2 2.5 6.8 4.2 5.8 6.7C4.6 9.7 5.3 13.2 7.6 15.6C8.8 16.8 10.4 17.5 12 17.5C13.6 17.5 15.2 16.8 16.4 15.6C18.7 13.2 19.4 9.7 18.2 6.7C17.2 4.2 14.8 2.5 12 2.5Z"
        fill={currentFill}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Rose Blossom Layer 2 - Left & Right Overlapping Petals */}
      <path
        d="M6.5 8.5C8 6.5 10.2 5.2 12.5 5.2C14.8 5.2 17 6.5 18.5 8.5C17.2 11.8 15 14.2 12 14.8C9 14.2 6.8 11.8 6.5 8.5Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Swirl Petal Cup */}
      <path
        d="M9.2 8.8C9.5 7.3 10.8 6.3 12.2 6.3C13.8 6.3 15 7.4 15 9C15 10.8 13.3 12 12 12C10.7 12 9.5 11 9.5 9.5C9.5 8.5 10.2 7.8 11.2 7.8C12 7.8 12.8 8.4 12.8 9.2"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Side Petal Curves */}
      <path
        d="M5.5 11C4.2 12.2 3.8 14 4.5 15.5C5.8 15 7 14 8 12.8"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 11C19.8 12.2 20.2 14 19.5 15.5C18.2 15 17 14 16 12.8"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Calyx & Leaves at Stem Base */}
      <path
        d="M10 17.2C8.5 18.5 6.5 19.2 4.5 19.5C5.8 18 7.2 16.2 8 14.5"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 17.2C15.5 18.5 17.5 19.2 19.5 19.5C18.2 18 16.8 16.2 16 14.5"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Stem */}
      <path
        d="M12 17.5V22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RosePetalIcon;
