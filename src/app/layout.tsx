import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../styles/globals.css'

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
      <body className={`flex flex-col bg-black text-white ${font.className}`}>{children}</body>
    </html>
  )
}
