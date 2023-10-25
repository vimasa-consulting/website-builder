import type { Metadata } from 'next'

import AppLayout from '@/components/AppLayout'

export const metadata: Metadata = {
  title: 'Analytics | Website Builder',
  description: 'Find you project analytics here.',
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
