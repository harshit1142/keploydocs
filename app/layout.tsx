import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Keploy Docs - Modern Testing Tool for Go",
  description:
    "Master Keploy with Go and Echo. Records API traffic to generate test cases and mocks automatically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
            <div className="container-custom flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hidden sm:inline">
                  Keploy Docs
                </span>
              </div>
              <nav className="hidden md:flex gap-8 text-sm font-medium">
                <a
                  href="https://keploy.io/docs/"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Docs
                </a>
                <a
                  href="https://github.com/keploy/keploy"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Github
                </a>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 container-custom">{children}</main>

          {/* Footer */}
          <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 py-8">
            <div className="container-custom text-center text-sm text-slate-600 dark:text-slate-400">
              <p>© 2026 Keploy. Built with Next.js and Tailwind CSS.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
