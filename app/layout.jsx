import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import FavIcon from "../public/favicons/favicon.ico";
import IosFavIcon from "../public/favicons/apple-touch-icon.png";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Roshan Sahu | Portfolio",
  description: "Personal portfolio website of Roshan Sahu, showcasing projects and skills.",
    icons: {
    // “icon” will be used for <link rel="icon">
    icon: FavIcon.src,
    // “shortcut” is fallback for some browsers
    shortcut: FavIcon.src,
    // if you have an Apple-touch icon:
    apple: IosFavIcon.src,
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
