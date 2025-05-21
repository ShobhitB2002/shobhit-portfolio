import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="min-h-screen">
        <div
          className="bg-zinc-900 bg-opacity-90 text-white min-h-screen font-sans select-none"
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center text-center py-20 px-4">
            <img
              src="/profile.jpg"
              alt="Shobhit Bansal"
              className="w-40 h-40 rounded-full border-4 border-cyan-400 mb-6"
              draggable={false}
            />
            <h1 className="text-4xl font-bold text-cyan-400 cursor-default select-text-none">
              Hi, I’m Shobhit Bansal
            </h1>
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
              iOS Developer with nearly 2 years of experience building production-ready apps like Kodak Smile & Mint Printer.
              Skilled in Swift, UIKit, CoreData, and clean architecture (MVC, MVVM). 
              Passionate about logic-first development and crafting smooth, scalable mobile experiences.
            </p>
          </section>

          {/* Skills */}
          <section className="px-6 py-12 bg-zinc-800 bg-opacity-90 max-w-3xl mx-auto rounded-md shadow-md">
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

          {/* Spoken Languages */}
<section className="px-6 py-12 mt-12 bg-zinc-800 bg-opacity-90 max-w-3xl mx-auto rounded-md shadow-md">
  <h2 className="text-2xl font-bold mb-6 text-cyan-300">🗣️ Spoken Languages</h2>
  <ul className="space-y-4 text-white">
    <li className="flex justify-between items-center">
      <span className="font-semibold text-cyan-400">English</span>
      <span className="text-cyan-300 text-xl">●●●●●</span>
    </li>
    <li className="flex justify-between items-center">
      <span className="font-semibold text-cyan-400">Hindi</span>
      <span className="text-cyan-300 text-xl">●●●●●</span>
    </li>
  </ul>
</section>


{/* Projects */}
<section className="px-6 py-12 max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold mb-6 text-cyan-300">💼 Projects</h2>
  <div className="bg-zinc-800 bg-opacity-90 p-6 rounded-md shadow space-y-3 text-white">
    <p>
      <a
        href="https://apps.apple.com/in/app/kodak-smile/id1447241173"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 underline"
      >
        KODAK SMILE
      </a>{" "}
      <br />
      Enhanced photo editing tools, integrated Core Data for offline assets, improved camera logic & Bluetooth permissions, and resolved App Store compliance issues.
    </p>
    <p>
      <a
        href="https://apps.apple.com/in/app/kodak-smile-classic-2-in-1/id1448368147"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 underline"
      >
        KODAK SMILE Classic 2-in-1
      </a>{" "}
      <br />
      Managed offline asset storage via Core Data, improved UI compliance, and ensured smooth App Store deployment through localization and SDK debugging.
    </p>
    <p>
      <a
        href="https://apps.apple.com/in/app/kodak-step-prints/id1494704742"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 underline"
      >
        KODAK STEP Prints
      </a>{" "}
      <br />
      Refined print & collage flow logic, implemented Core Data caching, and improved in-app asset performance and print reliability.
    </p>
    <p>
      <a
        href="https://apps.apple.com/in/app/zip-printer/id1252079118"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 underline"
      >
        Zip Printer
      </a>{" "}
      <br />
      Integrated a categorized UI with Core Data, fixed firmware and permission-related bugs, added panorama support, and enhanced print preview performance.
    </p>
    <p>
      <a
        href="https://apps.apple.com/in/app/snaptouch-camera/id1255930529"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 underline"
      >
        Polaroid Snaptouch Camera
      </a>{" "}
      <br />
      Improved panorama editing UI, resolved camera/photo rendering issues, optimized firmware sync, and streamlined collage-print transitions.
    </p>
    <p>
      <a
        href="https://apps.apple.com/in/app/mint-printer/id1437358918"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 underline"
      >
        Polaroid Mint Printer
      </a>{" "}
      <br />
      Enhanced firmware update logic, reduced print lag, and optimized layout transitions and asset caching in the editing interface.
    </p>
  </div>
</section>



          {/* Education */}
          <section className="px-6 py-12 max-w-3xl mx-auto bg-zinc-800 rounded-md shadow-md mb-12">
            <h2 className="text-2xl font-bold mb-6 text-cyan-300">🎓 Education</h2>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold text-cyan-400">
                  Swami Vivekanand Institute of Engineering & Technology, Punjab, India
                </p>
                <p>Bachelor of Computer Applications (BCA), 2020 – 2023</p>
              </li>
            </ul>
          </section>

          {/* Timeline */}
          <section className="px-6 py-12 bg-zinc-800 bg-opacity-90 max-w-3xl mx-auto rounded-md shadow-md mt-12">
            <h2 className="text-2xl font-bold mb-6 text-cyan-300">📆 Timeline</h2>
            <ol className="relative border-l-2 border-cyan-400 pl-6">
              <li className="mb-8">
                <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
                <p className="text-cyan-400 font-semibold">2023 Jul</p>
                <p>Joined CS Soft Solutions as iOS Developer Trainee (Swift, UIKit, MVC)</p>
              </li>
              <li className="mb-8">
                <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
                <p className="text-cyan-400 font-semibold">2023 Dec</p>
                <p>Completed training at CS Soft Solutions</p>
              </li>
              <li className="mb-8">
                <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
                <p className="text-cyan-400 font-semibold">2024 Jul</p>
                <p>Joined C+A Global as iOS Developer, enhanced skills in MVVM, Core Data, BLE</p>
              </li>
              <li className="mb-8">
                <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
                <p className="text-cyan-400 font-semibold">2025</p>
                <p>Currently at C+A Global, contributed to Kodak, Polaroid & other live apps</p>
              </li>
            </ol>
          </section>

          {/* Contact */}
          <section className="px-6 py-12 text-center">
            <h2 className="text-2xl font-bold mb-6 text-cyan-300">📫 Contact</h2>
            <div className="flex justify-center gap-12 text-4xl">
              <a
                href="mailto:shobhitbansal.chd@gmail.com"
                className="hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <MdEmail />
              </a>
              <a
                href="https://www.linkedin.com/in/shobhitbansal2002"
                className="hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/ShobhitB2002"
                className="hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </section>

          <footer className="text-center text-zinc-500 py-6 text-sm">
            © 2025 Shobhit Bansal. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}