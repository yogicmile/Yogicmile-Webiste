'use client';

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
    md: variant === 'horizontal' ? 'h-10' : 'w-10 h-10',
    lg: variant === 'horizontal' ? 'h-12' : 'w-12 h-12'
  };

  const widthClasses = {
    sm: 'w-32',
    md: 'w-40',
    lg: 'w-48'
  };

  if (variant === 'icon-only') {
    return (
      <div className={`${sizeClasses[size]} relative ${className}`}>
        <Image
          src="/yogic logo.png"
          alt="YogicMile"
          fill
          className="object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${widthClasses[size]} relative ${className}`}>
      <Image
        src="/yogic logo.png"
        alt="YogicMile - Walk More. Earn More."
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}