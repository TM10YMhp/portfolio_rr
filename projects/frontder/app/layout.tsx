import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "@/assets/css/webfont.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontder",
  description: "Discover and save your favorite Frontend Mentor challenges",
};

// https://nextjs.org/docs/app/getting-started/project-structure#examples
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      // `min-h-full` no es necesario pero es interesante que afecte el degradado
      className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-gutter-both min-h-full`}
    >
      <body className="bg-neutral-950 bg-linear-to-b from-neutral-950 via-neutral-950 to-neutral-900 text-white min-h-screen h-auto">

        <nav className="glass sticky top-0 z-50 mb-6">
          <div className="max-w-7xl mx-auto px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl">♠</span>
              <span className="text-lg font-bold tracking-tight">Frontder</span>
            </Link>

            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="px-3 py-1.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                Swipe
              </Link>
              <Link
                href="/liked"
                className="px-3 py-1.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <i className="nf nf-fa-bookmark text-xs" /> Elecciones
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 pb-12">{children}</main>

        <ToastContainer
          stacked
          position="bottom-right"
          transition={undefined}
          theme="dark"
        />
      </body>
    </html>
  );
}
