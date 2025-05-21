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
            <div className="bg-zinc-800 bg-opacity-90 p-6 rounded-md shadow space-y-3">
              {[
                {
                  title: "Kodak Smile",
                  link: "https://apps.apple.com/in/app/kodak-smile/id1447241173",
                  icon:
                    "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/cc/60/cc/cc60cc6e-bbe9-36c3-0cb9-510832591fec/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.png",
                },
                {
                  title: "KODAK SMILE Classic 2-in-1",
                  link: "https://apps.apple.com/in/app/kodak-smile-classic-2-in-1/id1448368147",
                  icon:
                    "https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/88/47/5d/88475d56-fdf7-462a-cb68-fd8c8e0f68b9/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.png",
                },
                {
                  title: "KODAK STEP Prints",
                  link: "https://apps.apple.com/in/app/kodak-step-prints/id1494704742",
                  icon:
                    "https://is3-ssl.mzstatic.com/image/thumb/Purple116/v4/9a/0e/f8/9a0ef84f-1624-4235-9b9e-0fa7a9433116/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.png",
                },
                {
                  title: "Polaroid Snaptouch Camera",
                  link: "https://apps.apple.com/in/app/snaptouch-camera/id1255930529",
                  icon:
                    "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/5f/8d/60/5f8d60d0-8509-1e56-94fc-fd869ed79b46/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.png",
                },
                {
                  title: "Polaroid Mint Printer",
                  link: "https://apps.apple.com/in/app/mint-printer/id1437358918",
                  icon:
                    "https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/87/da/6d/87da6dd5-e6f6-70a8-7f12-5662f293db8b/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.png",
                },
                {
                  title: "Polaroid Zip Printer",
                  link: "https://apps.apple.com/in/app/zip-printer/id1252079118",
                  icon:
                    "https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/91/7d/d7/917dd758-ffca-759e-86a1-5bb39239382e/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.png",
                },
              ].map(({ title, link, icon }) => (
                <p key={title} className="flex items-center gap-3">
                  <img
                    src={icon}
                    alt={`${title} icon`}
                    className="w-8 h-8 rounded-md flex-shrink-0"
                    draggable={false}
                  />
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    {title}
                  </a>
                </p>
              ))}
              <p className="mt-6 text-xs text-zinc-400 italic">
                All listed apps are the property of their respective owners. I contributed to these apps during my role at C+A Global India.
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
                <p>Joined CS Soft Solutions as iOS Developer Trainee (Internship)</p>
              </li>
              <li className="mb-8">
                <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
                <p className="text-cyan-400 font-semibold">2023 Oct</p>
                <p>Joined C+A Global India as iOS Developer (Production)</p>
              </li>
              <li>
                <span className="absolute -left-2 mt-1 w-3 h-3 bg-cyan-400 rounded-full"></span>
                <p className="text-cyan-400 font-semibold">2024 Mar</p>
                <p>Received first appraisal with 63% salary hike</p>
              </li>
            </ol>
          </section>

          {/* Footer */}
          <footer className="text-center py-8 text-zinc-500 text-sm select-text-none">
            © 2025 Shobhit Bansal. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}
