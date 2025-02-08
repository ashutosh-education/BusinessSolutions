import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BusinessSolutions | A Future-Ready Platform',
  description: 'BusinessSolutions is a platform that helps businesses automate their workflows, grow their business, and make their lives easier.',
  keywords: 'business, automation, productivity, collaboration, workflow, efficiency, growth, internship, consulting, resume builder, business solutions',
  icons: {
    icon: [
      {
        url: '/public/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/app/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/app/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/app/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
  },
  authors: [{ name: 'BusinessSolutions Team' }],
  openGraph: {
    title: 'BusinessSolutions | A Future-Ready Platform',
    description: 'Build and Grow Your Business with BusinessSolutions',
    url: 'https://businesssolutions.vercel.app/',
    siteName: 'BusinessSolutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BusinessSolutions',
      }
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BusinessSolutions | A Future-Ready Platform',
    description: 'Build and Grow Your Business with BusinessSolutions',
    images: ['/twitter-image.png'],
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
