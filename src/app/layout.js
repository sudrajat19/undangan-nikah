import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://undangan-nikah-nd.vercel.app"),

  title: "Invites Wedding Website",
  description: "Invites Wedding Website",

  openGraph: {
    title: "Invites Wedding Website",
    description: "Invites Wedding Website",
    url: "https://undangan-nikah-nd.vercel.app",
    images: [
      {
        url: "/img/WhatsApp Image 2026-05-13 at 23.41.46.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },

  icons: {
    icon: "/img/icon.svg",
  },
};
// export const metadata = {
//   title: "Invites Wedding Website",
//   description: "Invites Wedding Website",
//   icons: {
//     icon: "/img/WhatsApp Image 2026-05-13 at 23.41.46.jpeg",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
