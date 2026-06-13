import React from 'react';

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
    },
    {
      name: "Forge",
      icon: "/apps/icons/forge.png",
      description: "Personal fitness tracker — TDEE, body composition, offline-first",
      link: "https://github.com/ShobhitB2002/forge",
      isGitHub: true
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="section-tag">All Apps</span>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[var(--text-1)]">
          10 Live Apps + 1 In Development
        </h2>
        <p className="text-lg text-[var(--text-2)] text-center mb-16">
          Production apps for HP, Kodak, and Polaroid — plus one personal project
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((app, i) => {
            const cardContent = (
              <div className="flex items-start gap-4">
                <img
                  src={app.icon}
                  alt={`${app.name} icon`}
                  className="w-16 h-16 rounded-xl flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="text-base font-bold text-[var(--text-1)]">{app.name}</h3>
                    {app.inDevelopment && (
                      <span className="text-xs px-2 py-0.5 rounded"
                        style={{ background: 'rgba(129,140,248,0.15)', color: 'var(--accent-2)' }}>
                        In Development
                      </span>
                    )}
                    {app.isGitHub && (
                      <span className="text-xs px-2 py-0.5 rounded"
                        style={{ background: 'rgba(56,189,248,0.12)', color: 'var(--accent)' }}>
                        Personal
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--text-2)] mb-3 leading-relaxed">{app.description}</p>
                  {!app.inDevelopment && (
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)]">
                      {app.isGitHub ? 'View on GitHub' : 'View on App Store'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );

            if (app.inDevelopment) {
              return (
                <div key={i} className="glass-card p-5 fade-up" data-delay={i * 60}>
                  {cardContent}
                </div>
              );
            }

            return (
              <a
                key={i}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 block fade-up"
                data-delay={i * 60}
                style={{ textDecoration: 'none' }}
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
