import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <img
          src="/profile.jpg"
          alt="Shobhit Bansal"
          className="w-40 h-40 rounded-full border-4 border-cyan-400 mb-6"
        />
        <h1 className="text-4xl font-bold text-cyan-400">Hi, I’m Shobhit Bansal</h1>
        <p className="text-xl mt-2">Just a guy with Swift and a dream.</p>
        <p className="text-xl">iOS Dev. Storyboard veteran. UIKit loyalist.</p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-2 bg-cyan-600 rounded hover:bg-cyan-500 text-white"
        >
          📄 Download My Resume
        </a>
      </section>

      {/* About Me */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">📘 About Me</h2>
        <p>
          I’m an iOS Developer with 1 year of experience building production-ready apps using Swift,
          UIKit, MVVM, Core Data, and Firebase. I’ve worked on real-world apps and value clean code,
          attention to detail, and solving meaningful problems through tech.
        </p>
      </section>

      {/* Skills */}
      <section className="px-6 py-12 bg-zinc-800">
        <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
          🛠️ Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            "Swift",
            "UIKit",
            "MVVM",
            "CoreData",
            "BLE",
            "SourceTree",
            "Asana",
            "GitHub",
            "Firebase",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-zinc-700 rounded-xl shadow-lg p-4 text-center font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">💼 Projects</h2>
        <div className="space-y-6">
          <div className="bg-zinc-800 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold text-cyan-200">EmployeeDatabase – iOS App</h3>
            <p className="text-sm text-zinc-400">
              A Core Data-based employee manager app with clean MVC architecture.
            </p>
            <a
              href="https://github.com/ShobhitB2002/EmployeeDatabase-iOS"
              target="_blank"
              className="text-cyan-400 underline"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-12 bg-zinc-900">
        <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
          📆 Timeline
        </h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          {[
            {
              year: "2023",
              detail: "Joined current company as iOS Developer (Swift, UIKit, BLE)",
            },
            {
              year: "2024",
              detail: "Delivered multiple iOS apps to App Store (Kodak, Polaroid)",
            },
            {
              year: "2025",
              detail: "Preparing for product-based transition (SwiftUI, GitHub, Portfolio)",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-800 rounded-xl p-4 shadow-md flex items-start gap-4"
            >
              <div className="text-cyan-400 font-bold text-lg min-w-[60px]">
                {item.year}
              </div>
              <div className="text-sm">{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6 text-cyan-300">📫 Contact</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-red-500 text-lg" />
            <a
              href="mailto:shobhitbansal.chd@gmail.com"
              className="hover:underline text-sm"
            >
              shobhitbansal.chd@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-blue-600 text-lg" />
            <a
              href="https://www.linkedin.com/in/shobhitbansal2002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm"
            >
              linkedin.com/in/shobhitbansal2002
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaGithub className="text-white text-lg" />
            <a
              href="https://github.com/ShobhitB2002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm"
            >
              github.com/ShobhitB2002
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center text-zinc-500 py-6 text-sm">
        © 2025 Shobhit Bansal. All rights reserved.
      </footer>
    </div>
  );
}
