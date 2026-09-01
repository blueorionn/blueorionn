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
  themeColor: '#0a0f1c',
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
      style={{ backgroundColor: '#0a0f1c' }}
    >
      <body>
        <div className='aurora-orb orb-cyan' aria-hidden />
        <div className='aurora-orb orb-indigo' aria-hidden />
        <div className='aurora-orb orb-violet' aria-hidden />
        <div className='noise-overlay' aria-hidden />
        <CursorGlow />
        {children}
      </body>
    </html>
  )
}
