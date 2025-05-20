import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-4">
          <img
            src="/profile.jpg"
            alt="Shobhit Bansal"
            className="w-40 h-40 rounded-full border-4 border-cyan-400 mb-6 select-none pointer-events-none"
            draggable="false"
          />
          <h1 className="text-4xl font-bold text-cyan-400">Hi, I’m Shobhit Bansal</h1>
          <p className="text-xl mt-2">Just a guy with Swift and a dream.</p>
          <p className="text-xl">iOS Dev. Storyboard Veteran. UIKit loyalist.</p>
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
            I’m Shobhit Bansal, an iOS Developer passionate about crafting high-quality mobile experiences.
            With nearly two years of professional experience, I specialize in building clean, maintainable
            apps using Swift, UIKit, MVVM, and Core Data.
            <br /><br />
            I have contributed to real-world products for brands like Kodak and Polaroid, focusing on features such
            as AR video integration, Bluetooth device synchronization, and offline data management.
            <br /><br />
            Constantly learning and evolving, I’m expanding my skills with SwiftUI and modern app architectures
            to deliver impactful user-centric solutions.
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
              <p className="text-sm text-zinc-400 mb-2">
                A Core Data-based employee manager app with clean MVC architecture.
              </p>
              <p className="text-sm text-white mb-2">
                🧰 Tech Stack: Swift, UIKit, CoreData, MVC
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

        {/* Education */}
        <section className="px-6 py-12 bg-zinc-800 max-w-3xl mx-auto rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-cyan-300">🎓 Education</h2>
          <div className="space-y-4">
            <div>
              <p className="text-cyan-400 font-semibold">2019 – 2022</p>
              <p>Bachelor of Computer Applications (BCA)</p>
              <p>Swami Vivekanand Institute of Engineering & Technology, Punjab, India</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 py-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-cyan-300">📆 Timeline</h2>
          <ol className="relative border-l-2 border-cyan-400 pl-6">
            <li className="mb-8">
              <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
              <p className="text-cyan-400 font-semibold">2023 Jul</p>
              <p>Joined CS Soft Solutions as iOS Developer Trainee (Swift, UIKit, BLE)</p>
            </li>
            <li className="mb-8">
              <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
              <p className="text-cyan-400 font-semibold">2023 Dec</p>
              <p>Completed training at CS Soft Solutions</p>
            </li>
            <li className="mb-8">
              <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
              <p className="text-cyan-400 font-semibold">2024 Jul</p>
              <p>Joined C+A Global as iOS Developer, enhanced skills in MVVM, Core Data</p>
            </li>
            <li className="mb-8">
              <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
              <p className="text-cyan-400 font-semibold">2025</p>
              <p>Currently at C+A Global, contributed to multiple live apps (Kodak, Polaroid)</p>
            </li>
          </ol>
        </section>

        {/* Contact */}
        <section className="px-6 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">📫 Contact</h2>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="mailto:shobhitbansal.chd@gmail.com"
              className="text-cyan-400 hover:text-cyan-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/shobhitbansal2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ShobhitB2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </section>

        <footer className="text-center text-zinc-500 py-6 text-sm select-none">
          © 2025 Shobhit Bansal. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
