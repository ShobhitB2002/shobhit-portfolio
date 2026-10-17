import React from 'react';

/**
 * ComicBackdrop - Comic atmospheric backdrop
 * Dimmed public/background.jpg with authentic comic halftone dot pattern overlay and dark vignette.
 */
export default function ComicBackdrop() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* Dimmed Comic Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 filter contrast-125 saturate-125"
        style={{
          backgroundImage: "url('/background.jpg')",
          transform: 'scale(1.02)'
        }}
      />
      
      {/* Dark theme blend layers */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(5,7,15,0.85) 0%, rgba(5,7,15,0.75) 50%, rgba(5,7,15,0.92) 100%)'
        }}
      />

      {/* Halftone Dot Matrix Overlay */}
      <div 
        className="absolute inset-0 comic-halftone-overlay opacity-30"
      />

      {/* Comic Radial Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, transparent 20%, rgba(5,7,15,0.7) 70%, #05070f 100%)'
        }}
      />
    </div>
  );
}
