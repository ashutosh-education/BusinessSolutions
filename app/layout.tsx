import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Proda - Flutter Sandbox in Your Browser',
  description: 'Proda is a free online sandbox environment for building & sharing Dart & Flutter applications.',
  keywords: 'Flutter, Dart, sandbox, online IDE, web development',
  authors: [{ name: 'Proda Team' }],
  openGraph: {
    title: 'Proda - Flutter Sandbox in Your Browser',
    description: 'Build and share Dart & Flutter applications online',
    url: 'https://proda.dev',
    siteName: 'Proda',
    images: [
      { url: 'https://proda.dev/og-image.png', width: 1200, height: 630 },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proda - Flutter Sandbox in Your Browser',
    description: 'Build and share Dart & Flutter applications online',
    images: ['https://proda.dev/twitter-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
