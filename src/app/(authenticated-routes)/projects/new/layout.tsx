import type { Metadata } from 'next'

import AppLayout from '@/components/AppLayout'

export const metadata: Metadata = {
  title: 'New Project | Website Builder',
  description: 'Create a new project',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return(children);
}
