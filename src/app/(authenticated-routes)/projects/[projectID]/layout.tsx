import type { Metadata } from 'next'

import AppLayout from '@/components/AppLayout'

export const metadata: Metadata = {
  title: 'View Project | Website Builder',
  description: 'View your project',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return(children);
}
