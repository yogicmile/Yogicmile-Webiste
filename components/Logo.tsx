import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden`}>
        {/* Footstep Icon */}
        <div className="relative">
          <svg 
            className="w-1/2 h-1/2 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM21 9V7L15 7.5V9.5L21 9ZM15 10.5V12.5L21 12V10L15 10.5ZM21 13V15L15 14.5V12.5L21 13ZM15 15.5V17.5L21 17V15L15 15.5ZM15 18.5V20.5L21 20V18L15 18.5ZM12 7.5C11.2 7.5 10.5 8.2 10.5 9S11.2 10.5 12 10.5 13.5 9.8 13.5 9 12.8 7.5 12 7.5ZM12 11.5C10.9 11.5 10 12.4 10 13.5S10.9 15.5 12 15.5 14 14.6 14 13.5 13.1 11.5 12 11.5ZM12 16.5C10.9 16.5 10 17.4 10 18.5S10.9 20.5 12 20.5 14 19.6 14 18.5 13.1 16.5 12 16.5Z"/>
          </svg>
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizeClasses[size]} font-bold text-gray-900 leading-tight`}>
            Yogic<span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Mile</span>
          </span>
          {size !== 'sm' && (
            <span className="text-xs text-gray-500 -mt-1 font-medium">Walk. Earn. Repeat.</span>
          )}
        </div>
      )}
    </div>
  );
}