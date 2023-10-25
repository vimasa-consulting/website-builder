import AppLayout from '@/components/AppLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Website Builder',
  description: 'View & manage your projects here.',
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
