'use client';

import Link from "next/link";
import { Sidebar as FlowbiteSidebar } from 'flowbite-react';

import styles from '@/styles/sidebar.module.css';
import { ROUTES } from "@/services/NavigationService";
import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();

  // TODO: refactor items

  return (
    <FlowbiteSidebar aria-label="sidebar" className={`${styles.navBar} md:w-80`}>
      <FlowbiteSidebar.Items className="">
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item
            href={ROUTES.DASHBOARD}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${pathname === ROUTES.DASHBOARD ? 'bg-zinc-700' : ''}`}
          >
            <p>
              <span className='pr-2'>🚀</span>
              Get Started
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.PROJECTS}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${pathname === ROUTES.PROJECTS ? 'bg-zinc-700' : ''}`}
          >
            <p>
              <span className='pr-2'>📙</span>
              Projects
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.TIPS}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${pathname === ROUTES.TIPS ? 'bg-zinc-700' : ''}`}
          >
            <p>
              <span className='pr-2'>🤹</span>
              Tips & Tricks
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.ANALYTICS}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${pathname === ROUTES.ANALYTICS ? 'bg-zinc-700' : ''}`}
          >
            <p>
              <span className='pr-2'>📈</span>
              Analytics
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.DOMAINS}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${pathname === ROUTES.DOMAINS ? 'bg-zinc-700' : ''}`}
          >
            <p>
              <span className='pr-2'>🌐</span>
              Domains
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.SETTINGS}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${pathname === ROUTES.SETTINGS ? 'bg-zinc-700' : ''}`}
          >
            <p>
              <span className='pr-2'>⚙️</span>
              Settings
            </p>
          </FlowbiteSidebar.Item>
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  )
}