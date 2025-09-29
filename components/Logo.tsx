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
    sm: 'h-8',
    md: 'h-10', 
    lg: 'h-12'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/yogic%20logo.png"
        alt="YogicMile"
        className={`${sizeClasses[size]} w-auto object-contain`}
        onError={(e) => {
          console.error('Logo failed to load:', e);
          // Fallback to text if image fails
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <span className="hidden text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        YogicMile
      </span>
    </div>
  );
}