import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Website Builder',
  description: 'Website Builder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`h-screen flex flex-col bg-black text-white ${font.className}`}>{children}</body>
    </html>
  )
}
