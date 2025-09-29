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

  const stepSizes = {
    sm: 'w-4 h-6',
    md: 'w-5 h-7',
    lg: 'w-6 h-8'
  };

  // Footstep/Step SVG component
  const FootStep = ({ delay = 0, color = 'white' }: { delay?: number; color?: string }) => (
    <svg 
      className={`${stepSizes[size]} ${animated ? 'animate-pulse' : ''}`}
      style={animated ? { animationDelay: `${delay}ms`, animationDuration: '2s' } : {}}
      viewBox="0 0 24 32" 
      fill={color}
    >
      {/* Footstep/shoe print shape */}
      <path d="M12 4c2.2 0 4 1.8 4 4 0 1.5-.8 2.8-2 3.5v2c1.7.3 3 1.8 3 3.5 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.7 1.3-3.2 3-3.5v-2c-1.2-.7-2-2-2-3.5 0-2.2 1.8-4 4-4z"/>
      <ellipse cx="12" cy="24" rx="3" ry="2"/>
      <ellipse cx="9" cy="26" rx="1.5" ry="1"/>
      <ellipse cx="15" cy="26" rx="1.5" ry="1"/>
      <ellipse cx="8" cy="28" rx="1" ry="0.8"/>
      <ellipse cx="16" cy="28" rx="1" ry="0.8"/>
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden ${className}`}>
        <div className="flex space-x-1">
          <FootStep delay={0} color="white" />
          <FootStep delay={400} color="rgba(255,255,255,0.8)" />
          <FootStep delay={800} color="rgba(255,255,255,0.6)" />
        </div>
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-4 ${sizeClasses[size]} ${className}`}>
      {/* Logo Text */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-3">
          <span className={`${textSizeClasses[size]} font-bold text-gray-900 leading-tight tracking-tight`}>
            Yogic<span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Mile</span>
          </span>
          
          {/* Walking Steps Animation */}
          <div className="flex items-end space-x-1 ml-2">
            <FootStep delay={0} color="#7C3AED" />
            <FootStep delay={400} color="#3B82F6" />
            <FootStep delay={800} color="#6366F1" />
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