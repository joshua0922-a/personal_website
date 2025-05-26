import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Joshua Patriarca | Web & Mobile Developer",
  description:
    "Joshua Patriarca is a full-stack web and mobile developer specializing in modern UI/UX design, React, Flutter, and backend development.",
  // ...your SEO fields as before
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://the-webdeveloper.vercel.app" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
