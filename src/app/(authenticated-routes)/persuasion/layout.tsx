import type { Metadata } from 'next'
import '../../../styles/globals.css'

import AppLayout from '@/components/AppLayout'

export const metadata: Metadata = {
  title: 'Tips | Website Builder',
  description: 'Find tips for your projects here.',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppLayout>
      {children}
    </AppLayout>
  )
}
