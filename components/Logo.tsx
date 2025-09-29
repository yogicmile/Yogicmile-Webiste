import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'horizontal' | 'icon-only';
  animated?: boolean;
  className?: string;
}

export default function Logo({ 
  size = 'md', 
  variant = 'horizontal', 
  animated = false,
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    sm: variant === 'horizontal' ? 'h-8' : 'w-8 h-8',
    md: variant === 'horizontal' ? 'h-12' : 'w-12 h-12',
    lg: variant === 'horizontal' ? 'h-16' : 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const footstepSizes = {
    sm: 'w-3 h-4',
    md: 'w-4 h-5',
    lg: 'w-5 h-6'
  };

  // Footstep SVG component
  const Footstep = ({ delay = 0, color = '#2BB673' }: { delay?: number; color?: string }) => (
    <svg 
      className={`${footstepSizes[size]} ${animated ? 'animate-pulse' : ''}`}
      style={animated ? { animationDelay: `${delay}ms`, animationDuration: '2s' } : {}}
      viewBox="0 0 24 24" 
      fill={color}
    >
      <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-1 18c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm3-2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-1-3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-2-5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm4 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden ${className}`}>
        <div className="flex space-x-1">
          <Footstep delay={0} color="white" />
          <Footstep delay={300} color="#FFD166" />
          <Footstep delay={600} color="white" />
        </div>
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-4 ${sizeClasses[size]} ${className}`}>
      {/* Logo Text */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <span className={`${textSizeClasses[size]} font-bold text-gray-900 leading-tight tracking-tight`}>
            Yogic<span className="text-blue-600">Mile</span>
          </span>
          
          {/* Footsteps Animation */}
          <div className="flex items-center space-x-1 ml-2">
            <Footstep delay={0} color="#2BB673" />
            <Footstep delay={400} color="#0F62FE" />
            <Footstep delay={800} color="#FFD166" />
          </div>
        </div>
        
        {size !== 'sm' && (
          <span className="text-xs text-gray-500 -mt-1 font-medium tracking-wide">
            Walk. Earn. Repeat.
          </span>
        )}
      </div>
    </div>
  );
}