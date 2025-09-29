import React from 'react';
import Image from 'next/image';

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

  const widthClasses = {
    sm: 'w-24',
    md: 'w-36',
    lg: 'w-48'
  };

  if (variant === 'icon-only') {
    // For icon-only, we'll crop to show just the footsteps part
    return (
      <div className={`${sizeClasses[size]} relative overflow-hidden rounded-lg ${className}`}>
        <Image
          src="/yogic logo.png"
          alt="YogicMile"
          fill
          className="object-cover object-right"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${widthClasses[size]} relative ${className}`}>
      <Image
        src="/yogic logo.png"
        alt="YogicMile - Walk. Earn. Repeat."
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}