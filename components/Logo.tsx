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
    <img
      src="/yogic logo.png"
      alt="YogicMile"
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
    />
  );
}