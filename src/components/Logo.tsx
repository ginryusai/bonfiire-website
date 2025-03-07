
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div 
      className={cn(
        "relative flame-animation-wrapper cursor-pointer transition-all duration-300",
        sizeClasses[size],
        className
      )}
    >
      {/* Main flame shape */}
      <div className="absolute inset-0 flame">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="flame-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>
          <path 
            d="M50,10 
              C65,25 85,25 85,50 
              C85,75 70,90 50,90 
              C30,90 15,75 15,50 
              C15,25 35,25 50,10 Z" 
            fill="url(#flame-gradient)"
            className="flame-outer drop-shadow-lg"
          />
        </svg>
      </div>

      {/* Inner flame */}
      <div className="absolute inset-0 scale-75 flame-inner">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path 
            d="M50,20 
              C60,30 70,35 70,55 
              C70,75 60,80 50,80 
              C40,80 30,75 30,55 
              C30,35 40,30 50,20 Z" 
            fill="white" 
            fillOpacity="0.7"
            className="drop-shadow-md"
          />
        </svg>
      </div>

      {/* Sparkles */}
      {[1, 2, 3].map((i) => (
        <div 
          key={i}
          className="absolute sparkle h-1 w-1 bg-yellow-100 rounded-full opacity-0"
          style={{
            left: `${25 + (i * 20)}%`, 
            bottom: `${40 + (i * 10)}%`,
            '--delay': i
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Logo;
