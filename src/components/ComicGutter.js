import React from 'react';

/**
 * ComicGutter - Slanted gutter dividing comic panels/sections
 * Features angled borders, diagonal halftone hatch lines, and comic panel strip accents.
 */
export default function ComicGutter({ label = '' }) {
  return (
    <div className="relative w-full my-8 md:my-12 px-4 max-w-6xl mx-auto overflow-hidden select-none" aria-hidden="true">
      <div className="relative h-6 md:h-8 flex items-center justify-between">
        {/* Slanted comic gutter line with diagonal hatching */}
        <div 
          className="absolute inset-x-0 h-3 md:h-4 top-1/2 -translate-y-1/2 rounded-sm comic-gutter-strip"
          style={{
            transform: 'skewX(-16deg)',
            border: '1.5px solid #000000',
            boxShadow: '2px 2px 0px #000000'
          }}
        />

        {/* Center badge if label is provided */}
        {label && (
          <div className="relative z-10 mx-auto px-4 py-0.5 bg-[#05070f] border-2 border-black rounded shadow-[2px_2px_0px_#000] text-[10px] md:text-xs font-mono font-bold tracking-widest text-[var(--accent)] uppercase">
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
