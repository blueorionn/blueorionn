import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import CursorGlow from '@/components/misc/CursorGlow'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Swadhin Tandi',
  description: 'Personal portfolio website',
}

export const viewport: Viewport = {
  themeColor: '#152331',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ backgroundColor: '#152331' }}
    >
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  )
}
