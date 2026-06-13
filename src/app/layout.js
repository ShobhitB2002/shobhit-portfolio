import './globals.css'

export const metadata = {
  title: 'Shobhit Bansal | iOS Engineer — Hardware-Connected Apps',
  description: 'iOS engineer with 3 years building hardware-connected apps for HP, Kodak & Polaroid. Swift, Objective-C, BLE, Core Data. 10 live App Store apps, 120K+ ratings.',
  keywords: 'iOS Developer, Swift, Objective-C, CoreBluetooth, BLE, Hardware, HP, Kodak, Polaroid, Mohali, India, Remote iOS Engineer',
  openGraph: {
    title: 'Shobhit Bansal | iOS Engineer — Hardware-Connected Apps',
    description: 'iOS engineer building hardware-connected apps for HP, Kodak & Polaroid. 10 live App Store apps, 120K+ ratings.',
    type: 'website',
    url: 'https://shobhitbansal2002.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://shobhitbansal2002.vercel.app',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shobhit Bansal',
  jobTitle: 'iOS Developer',
  url: 'https://shobhitbansal2002.vercel.app',
  sameAs: [
    'https://linkedin.com/in/shobhitbansal2002',
    'https://github.com/ShobhitB2002',
  ],
  knowsAbout: ['iOS Development', 'Swift', 'Objective-C', 'CoreBluetooth', 'BLE', 'Mobile Development'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#05070f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
