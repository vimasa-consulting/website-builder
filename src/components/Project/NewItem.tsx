'use client'

import { Card } from "flowbite-react";
import Link from "next/link";

import styles from '@/styles/project.module.css';
import { ROUTES } from "@/services/NavigationService";

export default function NewItem() {
  return (
    <div className="max-w-xs">
      <Link href={ROUTES.NEW_PROJECT}>
        <Card
          className={`${styles.newItem}`}
        >
          <div className="border-4 border-dotted border-stone-300 p-4">
            <p className="text-gray-700 font-bold text-center text-xl">
              <span className="px-4">➕</span>
              Create Project
            </p>
          </div>
        </Card>
      </Link>
    </div>
  )
}