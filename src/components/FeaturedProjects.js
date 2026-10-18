'use client'
import React, { useState } from 'react';
import ComicSFX from './ComicSFX';

export default function FeaturedProjects() {
  const projects = [
    {
      title: "HP Sprocket Ecosystem",
      subtitle: "Production companion apps for HP instant photo printers",
      badge: "PRODUCTION ECOSYSTEM",
      challenge: "Maintaining complex legacy Objective-C codebase while integrating modern BLE protocols and latest iOS updates",
      solution: "Stabilized Bluetooth communication layer, optimized image rendering pipeline, and maintained seamless printer connectivity across iOS releases",
      impact: "Maintained for hundreds of thousands of active HP Sprocket and Panorama users worldwide across 28 languages",
      tech: "Objective-C, Swift, CoreBluetooth, UIKit",
      link: "https://apps.apple.com/us/app/hp-sprocket/id1132331237",
      screenshots: [
        "/apps/screenshots/hp-sprocket-1.png",
        "/apps/screenshots/hp-sprocket-2.png",
        "/apps/screenshots/hp-sprocket-3.png",
        "/apps/screenshots/hp-sprocket-4.png",
        "/apps/screenshots/hp-sprocket-5.png"
      ]
    },
    {
      title: "Kodak & Polaroid Ecosystem",
      subtitle: "7 production apps for instant photo printers",
      badge: "FEATURED ARCHITECTURE",
      challenge: "Offline asset caching across multiple apps with shared sticker/frame libraries",
      solution: "Built Core Data sync engine handling hundreds of assets across apps",
      impact: "115K+ US App Store ratings, 4.5–4.7★ average rating",
      tech: "Swift, Objective-C, CoreBluetooth, Core Data",
      link: "https://apps.apple.com/us/app/kodak-smile/id1447241173",
      screenshots: [
        "/apps/screenshots/kodak-smile-1.png",
        "/apps/screenshots/kodak-smile-2.png",
        "/apps/screenshots/kodak-smile-3.png"
      ]
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
      if (!project.screenshots.length) return;
      setCurrentImage((prev) => (prev + 1) % project.screenshots.length);
    };
    const prevImage = () => {
      if (!project.screenshots.length) return;
      setCurrentImage((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
    };

    return (
      <div className="comic-panel overflow-hidden fade-up" data-delay={index * 100}>
        {/* Comic Panel Header Bar */}
        <div className="bg-[#05070f] border-b-2 border-black px-4 sm:px-6 py-2.5 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-extrabold tracking-widest text-[var(--accent)] uppercase">
              {project.badge}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[rgba(56,189,248,0.15)] text-[var(--accent)] border border-[var(--accent)]">
              LIVE PRODUCTION
            </span>
          </div>
        </div>

        {/* Comic Grid: Screenshot Frame + Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Screenshot / Visual Panel */}
          <div className="lg:col-span-5 relative bg-[#080d1a] border-b-2 lg:border-b-0 lg:border-r-2 border-black min-h-[280px] sm:min-h-[340px] flex items-center justify-center p-4">
            <div className="relative w-full h-full flex items-center justify-center group">
              <img
                src={project.screenshots[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                className="max-h-[300px] w-auto object-contain rounded-md border-2 border-black shadow-[4px_4px_0px_#000]"
              />

              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous screenshot"
                    className="comic-btn-ghost absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 p-0 rounded-full !shadow-[2px_2px_0px_#000]"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Next screenshot"
                    className="comic-btn-ghost absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 p-0 rounded-full !shadow-[2px_2px_0px_#000]"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 bg-[#05070f]/80 px-2 py-1 rounded border border-black">
                    {project.screenshots.map((_, idx) => (
                      <button
                        key={idx}
                        aria-label={`Slide ${idx + 1}`}
                        onClick={() => setCurrentImage(idx)}
                        style={{
                          width: idx === currentImage ? '18px' : '6px',
                          height: '6px',
                          borderRadius: '3px',
                          background: idx === currentImage ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Details / Comic Narrative Content */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-1)]">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[var(--accent)] mb-6">
                {project.subtitle}
              </p>

              {/* Comic Dialogue / Challenge / Solution / Impact Boxes */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-lg bg-[#070b14] border-2 border-black shadow-[3px_3px_0px_#000]">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider block mb-1">
                    CHALLENGE:
                  </span>
                  <span className="text-sm text-[var(--text-1)] leading-relaxed">
                    {project.challenge}
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#070b14] border-2 border-black shadow-[3px_3px_0px_#000]">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider block mb-1">
                    SOLUTION:
                  </span>
                  <span className="text-sm text-[var(--text-1)] leading-relaxed">
                    {project.solution}
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#070b14] border-2 border-black shadow-[3px_3px_0px_#000]">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider block mb-1">
                    IMPACT:
                  </span>
                  <span className="text-sm text-[var(--text-1)] leading-relaxed">
                    {project.impact}
                  </span>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <span className="section-tag mb-2">Tech Stack</span>
                <p className="text-xs sm:text-sm text-[var(--text-2)] bg-[#05070f] border border-black p-2.5 rounded font-mono">
                  {project.tech}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn-primary px-6 py-2.5 text-sm"
              >
                <span>View on App Store</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="apps" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="section-tag">Featured Work</span>
            <ComicSFX text="CONNECT!" rotate={-4} size="sm" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[var(--text-1)]">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-2)] max-w-2xl mx-auto font-medium">
            Deep dives into my most technically challenging work
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
