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
  },
  
  // Open Graph (OG) Metadata for Rich Link Previews
  openGraph: {
    title: "Roshan Sahu | Full Stack Engineer",
    description: 'Full Stack Engineer and UI/UX Designer showcasing projects and skills.',
    url: 'https://roshansahudev.vercel.app', 
    siteName: 'Roshan Sahu',
    images: [
      {
        // THIS IS CRUCIAL: Must be an absolute URL for the app to scrape the image!
        url: 'https://roshansahudev.vercel.app/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Roshan Sahu  Preview Image',
      },
    ],
    type: 'website', 
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