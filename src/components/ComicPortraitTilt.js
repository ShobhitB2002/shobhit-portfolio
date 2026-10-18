'use client'
import React, { useRef, useEffect, useState } from 'react';

/**
 * ComicPortraitTilt - Single lightweight cursor-reactive 3D tilt
 * Renders the comic portrait with subtle 3D perspective tilt, comic panel framing, and reduced-motion fallback.
 */
export default function ComicPortraitTilt({
  src = '/portrait.jpg',
  alt = 'Shobhit Bansal Comic Portrait',
  theme = 'cyan', // 'cyan' | 'warm'
  tag = 'SPEC // iOS-ENG',
  caption = 'SHOBHIT BANSAL',
  className = ''
}) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);

    const handleMotionChange = (e) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // If reduced motion is preferred or touch screen without fine pointer, skip cursor tilt
    if (motionQuery.matches || !window.matchMedia('(hover: hover)').matches) {
      return () => motionQuery.removeEventListener('change', handleMotionChange);
    }

    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle tilt: max ~8 degrees
      targetY = ((x - centerX) / centerX) * 8;
      targetX = -((y - centerY) / centerY) * 8;
      isHovered = true;
    };

    const onMouseEnter = () => {
      isHovered = true;
    };

    const onMouseLeave = () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      // Smooth lerp easing
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (card) {
        if (isHovered || Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01) {
          card.style.transform = `perspective(1000px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
        } else {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
      motionQuery.removeEventListener('change', handleMotionChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const isWarm = theme === 'warm';
  const rimColor = isWarm ? '#f59e0b' : '#38bdf8';
  const glowShadow = isWarm ? 'rgba(245, 158, 11, 0.4)' : 'rgba(56, 189, 248, 0.4)';
  const halftoneClass = isWarm ? 'comic-halftone-dense-warm' : 'comic-halftone-dense';

  return (
    <div 
      ref={containerRef}
      className={`relative inline-block cursor-pointer select-none group ${className}`}
      style={{ perspective: '1000px' }}
    >
      {/* Comic Halftone Burst Behind Card */}
      <div 
        className={`absolute -inset-3 rounded-2xl ${halftoneClass} opacity-40 group-hover:opacity-80 transition-opacity duration-300`}
        aria-hidden="true"
      />

      {/* Card with 3D Tilt */}
      <div
        ref={cardRef}
        className="relative z-10 w-40 h-52 sm:w-48 sm:h-60 md:w-52 md:h-64 rounded-xl overflow-hidden bg-[#0c1220]"
        style={{
          border: '3px solid #000000',
          boxShadow: `7px 7px 0px #000000, 0 0 0 2px ${rimColor}`,
          transition: isReducedMotion ? 'none' : 'box-shadow 0.2s ease, border-color 0.2s ease',
          transformStyle: 'preserve-3d',
          willChange: 'transform'
        }}
      >
        {/* Comic Panel Header Tape */}
        <div className="absolute top-0 inset-x-0 z-20 bg-[#05070f] border-b-2 border-black px-2.5 py-1 flex items-center justify-between">
          <span 
            className="text-[10px] font-mono font-bold tracking-widest uppercase truncate max-w-[85%]"
            style={{ color: rimColor }}
          >
            {tag}
          </span>
          <span 
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: rimColor, boxShadow: `0 0 6px ${rimColor}` }}
          />
        </div>

        {/* Comic Portrait Image */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top pt-5"
          loading="eager"
          decoding="async"
        />

        {/* Comic Bottom Caption Tape */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-[#05070f]/90 backdrop-blur-sm border-t-2 border-black px-2 py-1 text-center">
          <span className="text-[11px] font-mono font-extrabold tracking-wider text-[#f1f5f9] truncate block">
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}
