'use client'
import React, { useState } from 'react';
import ComicSFX from '../ComicSFX';

export default function SideQuestProjects() {
  const projects = [
    {
      title: "Forge",
      subtitle: "Offline fitness and nutrition logbook built in Flutter",
      tagline: "Built it because the apps I tried didn't work for me.",
      badge: "MOBILE // FLUTTER",
      repo: "https://github.com/ShobhitB2002/forge",
      icon: "/apps/icons/forge.png",
      images: [
        "/apps/screenshots/forge-1.png",
        "/apps/screenshots/forge-2.png",
        "/apps/screenshots/forge-3.png"
      ]
    },
    {
      title: "Tracket",
      subtitle: "An Asana tracker using the Asana API to manage and log my own work and its history",
      tagline: "Built to log, monitor, and diagnose my daily output. It is not a clone of Asana.",
      badge: "WEB & WORK LOGGING",
      repo: "https://github.com/ShobhitB2002/Tracket",
      images: [
        "/side-quests/tracket-hero.png",
        "/side-quests/tracket-tickets.png"
      ]
    },
    {
      title: "Kioku",
      subtitle: "My single base for all my media. A tracker, a history, a memory, and an all-in-one player.",
      tagline: "Unified media intelligence and tracking with AI-guided retrieval.",
      badge: "IN DEVELOPMENT // PRIVATE",
      status: "In development, private",
      images: [
        "/side-quests/kioku.png"
      ]
    },
    {
      title: "NERDVANA",
      subtitle: "Roblox survival MMORPG grinder with Albion-style progression",
      tagline: "Complete world, companion pets, progression system, and real-time multiplayer combat.",
      badge: "GAMING // ROBLOX MMORPG",
      link: "https://www.roblox.com",
      linkText: "View on Roblox",
      images: [
        "/side-quests/nerdvana.png"
      ]
    },
    {
      title: "This Portfolio",
      subtitle: "A portfolio built with AI as a tool, not a vibe-code.",
      tagline: "Dual-quest comic-panel architecture, strict static-export engineering, zero backend.",
      badge: "WEB // NEXT.JS",
      link: "https://shobhitbansal2002.vercel.app",
      linkText: "Current Site",
      isMonogramCard: true
    },
    {
      title: "AI Experiment",
      subtitle: "Building my own LLM. An experiment in progress.",
      tagline: "Local fine-tuning, architecture testing, and running on private hardware.",
      badge: "RESEARCH // CLASSIFIED",
      status: "Experiment in progress",
      isClassified: true
    }
  ];

  const SideProjectCard = ({ project, index }) => {
    const [currentImg, setCurrentImg] = useState(0);

    const hasImages = project.images && project.images.length > 0;
    const isMultipleImages = hasImages && project.images.length > 1;

    const nextImg = () => {
      setCurrentImg((prev) => (prev + 1) % project.images.length);
    };

    const prevImg = () => {
      setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
      <div 
        className="comic-panel-warm flex flex-col justify-between overflow-hidden fade-up relative group"
        data-delay={index * 60}
      >
        {/* Panel Header */}
        <div className="bg-[#080a10] border-b-2 border-black px-4 py-2.5 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--accent-side)] uppercase">
            {project.badge}
          </span>
          {project.status && (
            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[rgba(244,63,94,0.15)] text-[var(--accent-side-magenta)] border border-[var(--accent-side-magenta)]">
              {project.status.toUpperCase()}
            </span>
          )}
        </div>

        {/* Media / Visual Area */}
        <div className="relative bg-[#06080e] border-b-2 border-black h-48 sm:h-52 flex items-center justify-center overflow-hidden">
          {project.isClassified ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center comic-halftone-dense-warm">
              <div className="w-12 h-12 rounded-full bg-[#121019] border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_#000] mb-2">
                🧠
              </div>
              <div className="text-xs font-mono font-bold text-[var(--accent-side-neon)] tracking-wider">
                [ ARCHITECTURE CLASSIFIED ]
              </div>
              <p className="text-[11px] text-[var(--text-muted)] font-mono mt-1">
                Local weights &amp; private hardware compute
              </p>
            </div>
          ) : project.isMonogramCard ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center comic-halftone-warm">
              <div className="w-16 h-16 rounded-xl bg-[var(--accent-side)] border-2 border-black flex items-center justify-center text-2xl font-black text-[#05070f] shadow-[4px_4px_0px_#000] -rotate-3 mb-2">
                SB
              </div>
              <span className="text-xs font-mono font-bold text-[#f1f5f9]">
                PORTFOLIO ENGINE
              </span>
            </div>
          ) : hasImages ? (
            <div className="relative w-full h-full flex items-center justify-center group/img">
              <img
                src={project.images[currentImg]}
                alt={`${project.title} preview`}
                className="w-full h-full object-contain p-2"
                loading="lazy"
              />

              {isMultipleImages && (
                <>
                  <button
                    onClick={prevImg}
                    aria-label="Previous image"
                    className="comic-btn-ghost-warm absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 p-0 rounded-full !shadow-[2px_2px_0px_#000]"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImg}
                    aria-label="Next image"
                    className="comic-btn-ghost-warm absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 p-0 rounded-full !shadow-[2px_2px_0px_#000]"
                  >
                    ›
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 bg-[#05070f]/80 px-2 py-0.5 rounded border border-black">
                    {project.images.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCurrentImg(dotIdx)}
                        style={{
                          width: dotIdx === currentImg ? '14px' : '5px',
                          height: '5px',
                          borderRadius: '2.5px',
                          background: dotIdx === currentImg ? 'var(--accent-side)' : 'rgba(255,255,255,0.3)',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : null}
        </div>

        {/* Content Area */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              {project.icon && (
                <img 
                  src={project.icon} 
                  alt="" 
                  className="w-8 h-8 rounded border border-black shadow-[1px_1px_0px_#000]" 
                />
              )}
              <h3 className="text-xl font-black text-[#f1f5f9]">
                {project.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-[var(--accent-side-neon)] mb-3 leading-snug">
              {project.subtitle}
            </p>

            <div className="p-3 rounded bg-[#090b12] border border-black text-xs text-[var(--text-2)] leading-relaxed mb-4">
              &ldquo;{project.tagline}&rdquo;
            </div>
          </div>

          {/* Links & Action */}
          <div className="pt-2 border-t border-black/50">
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn-warm px-4 py-2 text-xs w-full flex items-center justify-center gap-2"
              >
                <span>GitHub Repository</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ) : project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn-warm px-4 py-2 text-xs w-full flex items-center justify-center gap-2"
              >
                <span>{project.linkText || 'View Project'}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ) : (
              <span className="block text-center text-xs font-mono font-bold py-2 text-[var(--text-muted)] bg-[#090b12] rounded border border-black">
                {project.status || 'Private Build'}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="side-projects" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="section-tag-warm">Self-Directed Arsenal</span>
            <ComicSFX text="SHIPPED!" color="warm" rotate={-3} size="sm" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[var(--text-1)]">
            Side Quest Projects
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-2)] max-w-xl mx-auto font-medium">
            What I built and why — independent applications, tools, and explorations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <SideProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
