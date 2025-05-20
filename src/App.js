import React from "react";
import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function App() {
  return (
    <div
      className="bg-zinc-900 text-white min-h-screen font-sans"
      style={{ userSelect: "none" }}
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <img
          src="/profile.jpg"
          alt="Shobhit Bansal"
          className="w-40 h-40 rounded-full border-4 border-cyan-400 mb-6 select-none"
          draggable={false}
        />
        <h1 className="text-4xl font-bold text-cyan-400">Hi, I’m Shobhit Bansal</h1>
        <p className="text-xl mt-2 max-w-xl">
          I’m an iOS Developer with nearly 2 years of hands-on experience building
          and maintaining production-level apps using Swift, UIKit, MVVM, Core Data,
          BLE, and Firebase. I specialize in clean, scalable, and user-focused mobile
          apps. I’ve worked on real products for brands like Kodak and Polaroid,
          contributing features like AR video, Bluetooth syncing, and offline storage.
        </p>
        <a
          href="https://flowcv.com/resume/p8rmppoqho6g"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-2 bg-cyan-600 rounded hover:bg-cyan-500 text-white transition"
        >
          📄 Download My Resume
        </a>
      </section>

      {/* About Me */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">📘 About Me</h2>
        <p>
          Passionate iOS developer with nearly 2 years experience delivering real-world
          apps. Skilled in Swift, UIKit, MVVM, Core Data, BLE, and Firebase.
          Committed to writing clean, maintainable code and creating seamless user
          experiences.
        </p>
      </section>

      {/* Education */}
      <section className="px-6 py-12 bg-zinc-800 max-w-3xl mx-auto rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-cyan-300">🎓 Education</h2>
        <ul className="space-y-3">
          <li>
            <p className="font-semibold text-white">Bachelor of Computer Applications (BCA)</p>
            <p className="text-zinc-400">
              Swami Vivekanand Institute of Engineering & Technology, Punjab, India
            </p>
            <p className="text-zinc-400">2019 – 2022</p>
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-cyan-300">🛠️ Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            "Swift",
            "UIKit",
            "MVVM",
            "Core Data",
            "BLE",
            "Firebase",
            "SourceTree",
            "Asana",
            "GitHub",
          ].map((skill) => (
            <li
              key={skill}
              className="bg-zinc-800 rounded-lg py-3 text-center text-white font-medium hover:bg-cyan-600 transition-colors cursor-default select-none"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-cyan-300">💼 Projects</h2>
        <div className="space-y-6">
          <div className="bg-zinc-800 p-4 rounded-md shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">EmployeeDatabase – iOS App</h3>
            <p className="text-sm text-zinc-400 mb-2">
              A Core Data-based employee manager app with clean MVC architecture.
            </p>
            <p className="text-xs text-zinc-500 mb-2">
              Technologies: Swift, UIKit, Core Data, MVC
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
            <p className="text-cyan-400 font-semibold">Jul 2023</p>
            <p>
              Joined CS Soft Solutions as iOS Developer Trainee (Swift, UIKit, BLE)
            </p>
          </li>
          <li className="mb-8">
            <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
            <p className="text-cyan-400 font-semibold">Dec 2023</p>
            <p>Completed training at CS Soft Solutions</p>
          </li>
          <li className="mb-8">
            <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
            <p className="text-cyan-400 font-semibold">Jul 2024</p>
            <p>
              Joined C+A Global as iOS Developer, enhanced skills in MVVM, Core Data
            </p>
          </li>
          <li>
            <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
            <p className="text-cyan-400 font-semibold">2025</p>
            <p>
              Currently at C+A Global, contributed to multiple live apps including Kodak
              and Polaroid
            </p>
          </li>
        </ol>
      </section>

      {/* Contact */}
      <section className="px-6 py-12 text-center flex justify-center gap-8 text-cyan-400">
        <a
          href="mailto:shobhitbansal.chd@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition"
          aria-label="Email"
        >
          <HiMail size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/shobhitbansal2002"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://github.com/ShobhitB2002"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition"
          aria-label="GitHub"
        >
          <FaGithub size={32} />
        </a>
      </section>

      <footer className="text-center text-zinc-500 py-6 text-sm">
        © 2025 Shobhit Bansal. All rights reserved.
      </footer>
    </div>
  );
}
