'use client';

import { Sidebar as FlowbiteSidebar } from 'flowbite-react';
import { usePathname } from "next/navigation";
import Link from "next/link";

import { ROUTES } from "@/services/NavigationService";
import styles from '@/styles/sidebar.module.css';

export default function Sidebar() {

  const pathname = usePathname();

  // TODO: refactor items

  return (
    <FlowbiteSidebar aria-label="sidebar" className={`${styles.navBar} w-[304px]`}>
      <FlowbiteSidebar.Items className="w-[304px] pr-[20px]">
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item
            href={ROUTES.GET_STARTED}
            as={Link}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${pathname === ROUTES.GET_STARTED ? 'bg-zinc-700' : ''}`}
          >
            <p>
              <span className='pr-2'>🚀</span>
              Get Started
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.PROJECTS}
            as={Link}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${pathname === ROUTES.PROJECTS ? 'bg-zinc-700' : ''}`}
          >
            <p>
              <span className='pr-2'>📙</span>
              Projects
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.TIPS}
            as={Link}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${pathname === ROUTES.TIPS ? 'bg-zinc-700' : ''}`}
          >
            <p>
              <span className='pr-2'>🤹</span>
              Tips & Tricks
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.ANALYTICS}
            as={Link}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${pathname === ROUTES.ANALYTICS ? 'bg-zinc-700' : ''}`}
          >
            <p>
              <span className='pr-2'>📈</span>
              Analytics
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.DOMAINS}
            as={Link}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${pathname === ROUTES.DOMAINS ? 'bg-zinc-700' : ''}`}
          >
            <p>
              <span className='pr-2'>🌐</span>
              Domains
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.SETTINGS}
            as={Link}
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