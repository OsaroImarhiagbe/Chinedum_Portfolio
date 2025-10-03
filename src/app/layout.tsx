import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-spacegrotesk",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Houdïnï CHïN | Music Portfolio",
  description: "Discover Houdïnï CHïN's creative journey – music, visuals, and storytelling. My music, my way!",
  keywords: [
    "Houdïnï CHïN",
    "music portfolio",
    "artist website",
    "independent musician",
    "visual storytelling",
    "experimental music",
  ],
  authors: [{ name: "Houdïnï CHïN" }],
  creator: "Houdïnï CHïN",
  publisher: "Houdïnï CHïN",
  metadataBase: new URL("https://yourdomain.com"), // update with real domain
  openGraph: {
    type: "website",
    url: "https://yourdomain.com",
    title: "Houdïnï CHïN | Music Portfolio",
    description: "Discover Houdïnï CHïN's creative journey – music, visuals, and storytelling.",
    siteName: "Houdïnï CHïN",
    images: [
      {
        url: "/assests/album.jpg", // put a real OG image
        width: 1200,
        height: 630,
        alt: "Houdïnï CHïN music portfolio cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle", // replace with your Twitter/Instagram if you want
    creator: "@yourhandle",
    title: "Houdïnï CHïN | Music Portfolio",
    description: "My music, my way. Discover Houdïnï CHïN's creative world.",
    images: ["/assests/album.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
