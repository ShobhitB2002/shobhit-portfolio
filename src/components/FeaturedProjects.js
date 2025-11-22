import React, { useState } from 'react';

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Kodak & Polaroid Ecosystem",
      subtitle: "7 production apps for instant photo printers",
      challenge: "Offline asset caching across multiple apps",
      solution: "Built Core Data sync engine for hundreds of stickers/frames",
      impact: "Millions of users, 4.5+ App Store ratings",
      tech: "Swift, Objective-C, CoreBluetooth, Core Data",
      link: "https://apps.apple.com/us/app/kodak-smile/id1447241173",
      screenshots: [
        "/apps/screenshots/kodak-smile-1.png",
        "/apps/screenshots/kodak-smile-2.png",
        "/apps/screenshots/kodak-smile-3.png"
      ]
    },
    {
      title: "Zink Photo - Hybrid Integration",
      subtitle: "Flutter + Native iOS Bridge",
      challenge: "Flutter lacks proper Bluetooth support for printer protocols",
      solution: "Built entire native Swift layer, exposed via Method Channels",
      impact: "Integrated 4 printer models from scratch",
      tech: "Flutter, Swift, CoreBluetooth, Method Channels",
      link: "https://apps.apple.com/us/app/kodak-smile/id1447241173",
      screenshots: [
        "/apps/screenshots/zink-1.png",
        "/apps/screenshots/zink-2.png",
        "/apps/screenshots/zink-3.png"
      ]
    },
    {
      title: "Forge Fitness Tracker",
      subtitle: "Personal Project - Calisthenics & Nutrition Tracker",
      challenge: "Existing fitness apps didn't work how I wanted",
      solution: "Built from scratch - 15-table database, TDEE calculator, Navy body fat method",
      impact: "3000+ lines of Dart, complete offline-first app",
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
      <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden hover:border-[#007AFF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#007AFF]/20">
        {/* Image Carousel */}
        <div className="relative h-64 md:h-80 bg-[#0A0A0A] overflow-hidden group">
          <img 
            src={project.screenshots[currentImage]} 
            alt={`${project.title} screenshot ${currentImage + 1}`}
            className="w-full h-full object-contain"
          />
          
          {/* Navigation arrows */}
          {project.screenshots.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#007AFF] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#007AFF] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots indicator */}
          {project.screenshots.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImage ? 'bg-[#007AFF] w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-6">{project.subtitle}</p>

          <div className="space-y-4 mb-6">
            <div>
              <span className="text-[#007AFF] font-semibold">Challenge: </span>
              <span className="text-gray-300">{project.challenge}</span>
            </div>
            <div>
              <span className="text-[#007AFF] font-semibold">Solution: </span>
              <span className="text-gray-300">{project.solution}</span>
            </div>
            <div>
              <span className="text-[#007AFF] font-semibold">Impact: </span>
              <span className="text-gray-300">{project.impact}</span>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Tech Stack</span>
            <p className="text-gray-300 mt-2">{project.tech}</p>
          </div>

          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#007AFF] hover:text-[#0051D5] font-semibold transition-colors duration-300"
          >
            {project.link.includes('github') ? 'View on GitHub' : 'View on App Store'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Deep dives into my most technically challenging work
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}