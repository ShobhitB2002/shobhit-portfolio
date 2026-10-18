'use client'
import React from 'react';

/**
 * ComicSFX - Comic sound effect burst / badge accent
 * Renders bold, impactful onomatopoeia with comic outlines and offset shadow.
 */
export default function ComicSFX({ 
  text, 
  variant = 'badge', // 'badge' | 'star'
  color = 'cyan',    // 'cyan' | 'warm' | 'magenta'
  className = '',
  rotate = -3,
  size = 'md'        // 'sm' | 'md' | 'lg'
}) {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm md:text-base px-3.5 py-1.5',
    lg: 'text-lg md:text-xl px-4 py-2 font-black'
  };

  const colorClass = color === 'warm' 
    ? 'comic-sfx-warm' 
    : color === 'magenta' 
      ? 'comic-sfx-magenta' 
      : 'comic-sfx';

  if (variant === 'star') {
    return (
      <span 
        className={`comic-sfx-star inline-flex items-center justify-center font-black select-none uppercase tracking-wider ${className}`}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
        aria-hidden="true"
      >
        <span className="comic-sfx-star-text">{text}</span>
      </span>
    );
  }

  return (
    <span
      className={`${colorClass} inline-flex items-center justify-center font-black select-none uppercase tracking-wider ${sizeClasses[size] || sizeClasses.md} ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
      aria-hidden="true"
    >
      {text}
    </span>
  );
}
