# Shobhit Bansal — iOS Developer Portfolio

**Live:** [shobhitbansal2002.vercel.app](https://shobhitbansal2002.vercel.app/)

---

## About

I'm **Shobhit Bansal**, an iOS Developer with **3 years** of production experience maintaining **10 live App Store apps** for HP, Kodak, and Polaroid — **4.5–4.7★**, **115,000+ US ratings**, **60+ releases**.

Open to iOS roles: remote, tri-city (Chandigarh/Mohali/Panchkula), Gurugram, Bengaluru, or Hyderabad.

---

## Tech Stack (Portfolio Site)

| Layer | Technology |
|---|---|
| Framework | **Next.js 16.2.9** (App Router, SSG) |
| Styling | **Tailwind CSS 3.3.2** + custom CSS (globals.css) |
| Fonts | Space Grotesk · Inter · JetBrains Mono (Google Fonts) |
| Deployment | **Vercel** |
| Rendering | Static HTML generated at build time — fully crawlable |

*Migrated from Create React App → Next.js App Router (June 2025) for proper SSG and SEO crawlability.*

---

## My iOS Skills

**Languages:** Swift, Objective-C  
**Hardware:** CoreBluetooth, EAAccessory, Firmware OTA Updates, BLE Protocols  
**Architecture:** MVC, MVVM, Singleton, Delegate, NotificationCenter  
**Data:** Core Data, REST APIs, JSON, UserDefaults  
**Tools:** Xcode, Git, SourceTree, Postman, CocoaPods, SPM, TestFlight, Instruments  
**Frameworks:** UIKit, Kingfisher, GCD, Auto Layout, async/await

---

## Component Architecture

```
src/
├── app/
│   ├── layout.js          # Metadata, JSON-LD schema, Google Fonts (Server)
│   ├── page.js            # Root page — assembles all sections (Server)
│   └── globals.css        # CSS custom properties, glass-card, animations
└── components/
    ├── AnimationProvider.js   # 'use client' — IntersectionObserver fade-ups
    ├── Navbar.js              # 'use client' — scroll-aware sticky nav
    ├── FeaturedProjects.js    # 'use client' — image carousel (useState)
    ├── Hero.js                # Server component
    ├── About.js               # Server component
    ├── Stats.js               # Server component
    ├── AllApps.js             # Server component — 10 App Store apps + 1 in dev
    ├── Skills.js              # Server component
    ├── Timeline.js            # Server component
    ├── Education.js           # Server component
    └── Contact.js             # Server component
```

**Client boundary:** Only `AnimationProvider`, `Navbar`, and `FeaturedProjects` use `'use client'`. Everything else is a React Server Component.

---

## Stats (as of Oct 2025)

| Stat | Value |
|---|---|
| Production experience | 3 years |
| Live App Store apps | 10 |
| US App Store ratings | 115K+ |
| App Store rating | 4.5–4.7★ |
| Releases shipped | 60+ |

---

## Featured Apps

**Kodak & Polaroid Ecosystem (7 apps):** Kodak Smile, Kodak Smile Classic, Kodak STEP Prints, Polaroid Mint, Polaroid Zip, Polaroid Snaptouch, Polaroid Pop

**HP (2 apps):** HP Sprocket, HP Sprocket Panorama

**In Development:** Zink Photo (Flutter + Native iOS BLE bridge via Method Channels)

---

## Running Locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Static build
npm run start    # Serve build locally
```

---

## Contact

- **Email:** [shobhitbansal.chd@gmail.com](mailto:shobhitbansal.chd@gmail.com)
- **LinkedIn:** [shobhitbansal2002](https://www.linkedin.com/in/shobhitbansal2002)
- **GitHub:** [ShobhitB2002](https://github.com/ShobhitB2002)

---

*Last updated: October 2025*
