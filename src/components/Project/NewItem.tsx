'use client'

import { Card } from "flowbite-react";
import Link from "next/link";

import styles from '@/styles/project.module.css';
import { ROUTES } from "@/services/NavigationService";

export default function NewItem() {
  return (
    <div className="md:w-3/4">
      <Link href={ROUTES.NEW_PROJECT}>
        <Card
          className={`${styles.newItem} bg-black border-dashed h-full`}
        >
          <div className="">
            <p className="text-white font-bold text-center text-xl">
              <span className="px-2 text-2xl">+</span>
              New Project
            </p>
          </div>
        </Card>
      </Link>
    </div>
  )
}