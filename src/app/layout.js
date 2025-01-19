import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./Provider";
import { Header, Footer } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog App - Next.js",
  description: "A full-featured blog application built with Next.js and Appwrite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-slate-50`}>
        <ReduxProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak
