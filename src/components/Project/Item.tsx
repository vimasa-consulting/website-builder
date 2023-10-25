'use client'

import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import styles from '@/styles/project.module.css';
import placeHolderImage from '@/public/projects/placeholder.png';
import { Project } from "@/types/project";
import { ROUTES } from "@/services/NavigationService";

const getImageComponent = (url?: string) => {
  if (url) {
    return (
      <Image src={url} objectFit="object-fill" className={styles.itemImage} alt="project image" />
    )
  }
  return (
    <Image src={placeHolderImage} className={styles.itemImage} alt="project image" />
  );
}

export default function Item({ project }: { project: Project }) {
  return (
    <div className="max-w-xs">
      <Link href={`${ROUTES.PROJECTS}/${project.id}`}>
        <Card
          renderImage={() => getImageComponent(project.imageURL)}
        >
          <h5 className="text-xl font-semibold tracking-tight text-gray-700">
            <p>
              {project.name}
            </p>
          </h5>
        </Card>
      </Link>
    </div>
  )
}