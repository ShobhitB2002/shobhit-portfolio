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
      name: "Lifeprint",
      icon: "/apps/icons/lifeprint.png",
      description: "Augmented reality photo printer app",
      link: "https://apps.apple.com/us/app/lifeprint-printers/id972104022"
    },
    {
      name: "Zink Photo",
      icon: "/apps/icons/zink.png",
      description: "Flutter + Native iOS hybrid integration",
      link: "https://apps.apple.com/us/app/kodak-smile/id1447241173"
    },
    {
      name: "Forge",
      icon: "/apps/icons/forge.png",
      description: "Personal fitness tracker with 15-table database",
      link: "https://github.com/ShobhitB2002/forge",
      isGitHub: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          All Apps
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          12 projects across iOS production apps and personal development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <a
              key={index}
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 hover:border-[#007AFF]/50 hover:shadow-lg hover:shadow-[#007AFF]/20 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-start gap-4">
                <img 
                  src={app.icon} 
                  alt={`${app.name} icon`}
                  className="w-16 h-16 rounded-xl"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold">{app.name}</h3>
                    {app.isGitHub && (
                      <span className="text-xs bg-[#007AFF] px-2 py-1 rounded text-white">
                        Personal
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mb-3">
                    {app.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#007AFF] text-sm font-semibold group-hover:text-[#0051D5] transition-colors">
                    {app.isGitHub ? 'View on GitHub' : 'View on App Store'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}