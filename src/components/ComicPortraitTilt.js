'use client'
import React, { useRef, useEffect, useState } from 'react';

/**
 * ComicPortraitTilt - Single lightweight cursor-reactive 3D tilt
 * Renders the comic portrait with subtle 3D perspective tilt, comic panel framing, and reduced-motion fallback.
 */
export default function ComicPortraitTilt() {
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

  return (
    <div 
      ref={containerRef}
      className="relative inline-block cursor-pointer select-none group"
      style={{ perspective: '1000px' }}
    >
      {/* Comic Halftone Burst Behind Card */}
      <div 
        className="absolute -inset-3 rounded-2xl comic-halftone-dense opacity-40 group-hover:opacity-75 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Card with 3D Tilt */}
      <div
        ref={cardRef}
        className="relative z-10 w-44 h-56 sm:w-52 sm:h-64 md:w-56 md:h-72 rounded-xl overflow-hidden bg-[#0c1220]"
        style={{
          border: '3px solid #000000',
          boxShadow: '8px 8px 0px #000000, 0 0 0 2px #38bdf8',
          transition: isReducedMotion ? 'none' : 'box-shadow 0.2s ease, border-color 0.2s ease',
          transformStyle: 'preserve-3d',
          willChange: 'transform'
        }}
      >
        {/* Comic Panel Header Tape */}
        <div className="absolute top-0 inset-x-0 z-20 bg-[#05070f] border-b-2 border-black px-2.5 py-1 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--accent)] uppercase">
            SPEC // iOS-ENG
          </span>
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_6px_#38bdf8]" />
        </div>

        {/* Comic Portrait Image */}
        <img
          src="/portrait.jpg"
          alt="Shobhit Bansal Comic Portrait"
          className="w-full h-full object-cover object-top pt-5"
          loading="eager"
          decoding="async"
        />

        {/* Comic Bottom Caption Tape */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-[#05070f]/90 backdrop-blur-sm border-t-2 border-black px-2.5 py-1 text-center">
          <span className="text-[11px] font-mono font-extrabold tracking-wider text-[#f1f5f9]">
            SHOBHIT BANSAL
          </span>
        </div>
      </div>
    </div>
  );
}
