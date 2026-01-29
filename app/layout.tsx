import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
        /* Light Mode Defaults */
        bg-white text-slate-900 
        /* Dark Mode Overrides */
        dark:bg-slate-950 dark:text-slate-50 
        transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            {/* Header with Dark Mode Support */}
            <header
              className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md 
              dark:border-slate-800 dark:bg-slate-950/80"
            >
              <div className="container-custom flex items-center justify-between py-4">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Keploy Docs
                </span>
                <ModeToggle />
              </div>
            </header>

            <main className="flex-1 container-custom py-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}