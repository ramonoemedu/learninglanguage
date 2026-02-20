import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { AmbientBackground } from "./(dashboard)/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Operating System",
  description: "Premium AI Interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.className} 
          antialiased 
          min-h-screen 
          text-slate-900 dark:text-slate-300 
          selection:bg-sky-500/30 
          selection:text-sky-600 dark:selection:text-sky-200
        `}
      >
        <Providers>
          {/* Now it will work perfectly! */}
          <AmbientBackground />

          <div className="relative z-10 isolate">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}