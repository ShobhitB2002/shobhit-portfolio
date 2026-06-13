'use client'
import React, { useState } from 'react';

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Kodak & Polaroid Ecosystem",
      subtitle: "7 production apps for instant photo printers",
      challenge: "Offline asset caching across multiple apps with shared sticker/frame libraries",
      solution: "Built Core Data sync engine handling hundreds of assets across apps",
      impact: "120K+ combined App Store ratings, 28 languages, 4.5+ average rating",
      tech: "Swift, Objective-C, CoreBluetooth, Core Data",
      link: "https://apps.apple.com/us/app/kodak-smile/id1447241173",
      screenshots: [
        "/apps/screenshots/kodak-smile-1.png",
        "/apps/screenshots/kodak-smile-2.png",
        "/apps/screenshots/kodak-smile-3.png"
      ]
    },
    {
      title: "Zink Photo — Hybrid Integration",
      subtitle: "Flutter + Native iOS BLE Bridge",
      challenge: "Flutter lacks proper Bluetooth support for printer protocols",
      solution: "Built entire native Swift BLE layer exposed to Flutter via Method Channels",
      impact: "Integrated 4 printer models from scratch as sole iOS engineer",
      tech: "Flutter, Swift, CoreBluetooth, Method Channels",
      inDevelopment: true,
      screenshots: []
    },
    {
      title: "Forge Fitness Tracker",
      subtitle: "Personal Project — Calisthenics & Nutrition Tracker",
      challenge: "Existing fitness apps didn't fit a calisthenics-focused workflow",
      solution: "Built from scratch — 15-table SQLite database, TDEE calculator, Navy body fat method",
      impact: "Offline-first fitness tracker with TDEE calculator and body composition analytics, built solo.",
      tech: "Flutter, Drift (SQLite), Provider, fl_chart",
      link: "https://github.com/ShobhitB2002/forge",
      screenshots: [
        "/apps/screenshots/forge-1.png",
        "/apps/screenshots/forge-2.png",
        "/apps/screenshots/forge-3.png"
      ]
    }
  ];

  const ProjectCard = ({ project }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
      setCurrentImage((prev) => (prev + 1) % project.screenshots.length);
    };
    const prevImage = () => {
      setCurrentImage((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
    };

    return (
      <div className="glass-card overflow-hidden fade-up">
        {/* Image area */}
        <div
          className="relative overflow-hidden group"
          style={{
            height: '280px',
            background: project.inDevelopment
              ? 'radial-gradient(ellipse at center, rgba(129,140,248,0.12) 0%, rgba(13,17,30,0.8) 70%)'
              : 'var(--surface)'
          }}
        >
          {project.inDevelopment ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <div style={{ color: 'var(--accent-2)', fontSize: '2.5rem' }}>⚡</div>
              <span className="text-sm font-semibold" style={{ color: 'var(--accent-2)', fontFamily: "'JetBrains Mono', monospace" }}>
                In Development
              </span>
            </div>
          ) : (
            <>
              <img
                src={project.screenshots[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                className="w-full h-full object-contain"
              />
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', cursor: 'pointer' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', cursor: 'pointer' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.screenshots.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        style={{
                          width: idx === currentImage ? '20px' : '8px',
                          height: '8px',
                          borderRadius: '4px',
                          background: idx === currentImage ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-[var(--text-1)]">{project.title}</h3>
            {project.inDevelopment && (
              <span className="text-xs px-2 py-1 rounded"
                style={{ background: 'rgba(129,140,248,0.15)', color: 'var(--accent-2)' }}>
                In Development
              </span>
            )}
          </div>
          <p className="text-[var(--text-2)] mb-6">{project.subtitle}</p>

          <div className="space-y-3 mb-6">
            <div>
              <span className="font-semibold text-[var(--accent)]">Challenge: </span>
              <span className="text-[var(--text-2)]">{project.challenge}</span>
            </div>
            <div>
              <span className="font-semibold text-[var(--accent)]">Solution: </span>
              <span className="text-[var(--text-2)]">{project.solution}</span>
            </div>
            <div>
              <span className="font-semibold text-[var(--accent)]">Impact: </span>
              <span className="text-[var(--text-2)]">{project.impact}</span>
            </div>
          </div>

          <div className="mb-6">
            <span className="section-tag mb-2">Tech Stack</span>
            <p className="text-[var(--text-2)]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.83rem' }}>
              {project.tech}
            </p>
          </div>

          {project.inDevelopment ? (
            <span className="text-sm font-semibold text-[var(--accent-2)]">In Development</span>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[var(--accent)] hover:text-[var(--accent-glow)] transition-colors duration-300"
            >
              {project.link.includes('github') ? 'View on GitHub' : 'View on App Store'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="apps" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="section-tag">Featured Work</span>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[var(--text-1)]">
          Featured Projects
        </h2>
        <p className="text-lg text-[var(--text-2)] text-center mb-16 max-w-2xl mx-auto">
          Deep dives into my most technically challenging work
        </p>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
