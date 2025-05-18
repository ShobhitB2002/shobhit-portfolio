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
          className="mt-4 px-6 py-2 bg-cyan-600 rounded hover:bg-cyan-500 text-white transition"
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
      <section className="px-6 py-12 bg-zinc-800 max-w-3xl mx-auto rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-cyan-300">🛠️ Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Swift", "UIKit", "MVVM", "CoreData", "BLE", "SourceTree", "Asana", "GitHub"].map((skill) => (
            <li
              key={skill}
              className="bg-zinc-700 rounded-lg py-3 text-center text-white font-medium hover:bg-cyan-600 transition-colors cursor-default select-none"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">💼 Projects</h2>
        <div className="space-y-6">
          <div className="bg-zinc-800 p-4 rounded-md shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">EmployeeDatabase – iOS App</h3>
            <p className="text-sm text-zinc-400">
              A Core Data-based employee manager app with clean MVC architecture.
            </p>
            <a
              href="https://github.com/ShobhitB2002/EmployeeDatabase-iOS"
              target="_blank"
              className="text-cyan-400 underline hover:text-cyan-300"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-12 bg-zinc-800 max-w-3xl mx-auto rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-cyan-300">📆 Timeline</h2>
        <ol className="relative border-l-2 border-cyan-400 pl-6">
          <li className="mb-8">
            <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
            <p className="text-cyan-400 font-semibold">2023</p>
            <p>Joined current company as iOS Developer (Swift, UIKit, BLE)</p>
          </li>
          <li className="mb-8">
            <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
            <p className="text-cyan-400 font-semibold">2024</p>
            <p>Delivered multiple iOS apps to App Store (Kodak, Polaroid)</p>
          </li>
          <li className="mb-8">
            <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
            <p className="text-cyan-400 font-semibold">2025</p>
            <p>Preparing for product-based transition (SwiftUI, GitHub, Portfolio)</p>
          </li>
        </ol>
      </section>

      {/* Contact */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">📫 Contact</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-red-500 text-lg" />
            <a
              href="mailto:shobhitbansal.chd@gmail.com"
              className="hover:underline text-sm select-none cursor-pointer"
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
              className="hover:underline text-sm select-none cursor-pointer"
            >
              shobhitbansal2002
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaGithub className="text-white text-lg" />
            <a
              href="https://github.com/ShobhitB2002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm select-none cursor-pointer"
            >
              ShobhitB2002
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
