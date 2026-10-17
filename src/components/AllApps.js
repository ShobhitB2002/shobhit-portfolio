import React from 'react';
import ComicSFX from './ComicSFX';

export default function AllApps() {
  const apps = [
    {
      name: "Kodak Smile",
      icon: "/apps/icons/kodak-smile.png",
      description: "Instant photo printer app with editing & BLE",
      link: "https://apps.apple.com/us/app/kodak-smile/id1447241173"
    },
    {
      name: "Kodak Smile Classic",
      icon: "/apps/icons/kodak-classic.png",
      description: "2-in-1 camera & printer companion app",
      link: "https://apps.apple.com/us/app/kodak-smile-classic-2-in-1/id1448368147"
    },
    {
      name: "Kodak STEP Prints",
      icon: "/apps/icons/kodak-step.png",
      description: "Print & collage creation with Core Data caching",
      link: "https://apps.apple.com/us/app/kodak-step-prints/id1494704742"
    },
    {
      name: "Polaroid Mint",
      icon: "/apps/icons/polaroid-mint.png",
      description: "Firmware updates & photo editing for Mint printer",
      link: "https://apps.apple.com/us/app/mint-printer/id1437358918"
    },
    {
      name: "Polaroid Zip",
      icon: "/apps/icons/polaroid-zip.png",
      description: "Categorized UI with panorama support",
      link: "https://apps.apple.com/us/app/zip-printer/id1252079118"
    },
    {
      name: "Polaroid Snaptouch",
      icon: "/apps/icons/polaroid-snaptouch.png",
      description: "Camera app with collage-print transitions",
      link: "https://apps.apple.com/us/app/snaptouch-camera/id1255930529"
    },
    {
      name: "Polaroid Pop",
      icon: "/apps/icons/polaroid-pop.png",
      description: "Instant camera & printer connectivity",
      link: "https://apps.apple.com/us/app/pop-camera-printer/id1272136867"
    },
    {
      name: "HP Sprocket",
      icon: "/apps/icons/hp-sprocket.png",
      description: "Legacy Objective-C printer app maintenance",
      link: "https://apps.apple.com/us/app/hp-sprocket/id1132331237"
    },
    {
      name: "HP Panorama",
      icon: "/apps/icons/hp-panorama.png",
      description: "Panoramic photo printing with HP hardware",
      link: "https://apps.apple.com/us/app/hp-sprocket-panorama/id1630706219"
    },
    {
      name: "Zink Photo",
      icon: "/apps/icons/zink.png",
      description: "Flutter + Native iOS hybrid BLE integration",
      inDevelopment: true
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="section-tag">All Apps</span>
            <ComicSFX text="10x LIVE!" rotate={3} size="sm" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[var(--text-1)]">
            10 Live Apps + 1 In Development
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-2)] max-w-xl mx-auto font-medium">
            Production apps for HP, Kodak, and Polaroid
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((app, i) => {
            const cardInner = (
              <div className="flex items-start gap-4 relative z-10">
                <div className="relative flex-shrink-0">
                  <img
                    src={app.icon}
                    alt={`${app.name} icon`}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] object-cover"
                  />
                  <span className="absolute -bottom-1 -right-1 text-[9px] font-mono font-bold bg-[#05070f] text-[var(--accent)] px-1 rounded border border-black">
                    #{String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="text-base font-bold text-[var(--text-1)] truncate">
                      {app.name}
                    </h3>
                    {app.inDevelopment && (
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[rgba(129,140,248,0.2)] text-[var(--accent-2)] border border-[var(--accent-2)]">
                        DEV
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-2)] mb-3 leading-relaxed">
                    {app.description}
                  </p>
                  {!app.inDevelopment && (
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--accent)] group-hover:text-[var(--text-1)] transition-colors">
                      <span>View on App Store</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );

            if (app.inDevelopment) {
              return (
                <div 
                  key={i} 
                  className="comic-panel p-5 fade-up relative overflow-hidden group" 
                  data-delay={i * 50}
                >
                  <div className="absolute inset-0 comic-halftone-card opacity-20 pointer-events-none" aria-hidden="true" />
                  {cardInner}
                </div>
              );
            }

            return (
              <a
                key={i}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-panel p-5 block fade-up relative overflow-hidden group !no-underline"
                data-delay={i * 50}
              >
                <div className="absolute inset-0 comic-halftone-card opacity-15 group-hover:opacity-35 transition-opacity pointer-events-none" aria-hidden="true" />
                {cardInner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
