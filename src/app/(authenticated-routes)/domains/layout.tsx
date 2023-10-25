import type { Metadata } from 'next'

import AppLayout from '@/components/AppLayout'

export const metadata: Metadata = {
  title: 'Domains | Website Builder',
  description: 'Manage your domains here.',
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
