import type { Metadata } from 'next'

import AppLayout from '@/components/AppLayout'

export const metadata: Metadata = {
  title: 'Get Started | Website Builder',
  description: "Let's get you started.",
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
