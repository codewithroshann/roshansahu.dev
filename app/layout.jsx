import { Space_Grotesk } from "next/font/google";
import "./globals.css";
// 1. Removed direct imports for favicons. It's more reliable
//    to reference them directly by path from the /public folder.

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

// 2. IMPORTANT: Added 'openGraph' properties for link previews on
//    messaging apps and social media.

export const metadata = {
  title: "Roshan Sahu | Full Stack Engineer",
  description: "Personal portfolio website of Roshan Sahu, showcasing projects and skills.",
  // Standard icons setup, referencing files directly from /public/favicons/
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicons/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicons/favicon-16x16.png", sizes: "16x16" },
    ],
  },
  
  // Open Graph (OG) Metadata for Rich Link Previews
  openGraph: {
    title: "Roshan Sahu | Full Stack Engineer",
    description: "Personal portfolio website of Roshan Sahu, showcasing projects and skills.",
    url: "https://roshansahudev.vercel.app",
    siteName: "Roshan Sahu",
    images: [
      {
        url: "https://roshansahudev.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roshan Sahu Preview Image",
      },
    ],
    type: "website",
  },

  // Twitter Card metadata for better sharing on Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Roshan Sahu | Full Stack Engineer",
    description: "Personal portfolio website of Roshan Sahu, showcasing projects and skills.",
    images: ["https://roshansahudev.vercel.app/og-image.png"],
    site: "@your_twitter_handle", // Replace with your Twitter handle if available
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}