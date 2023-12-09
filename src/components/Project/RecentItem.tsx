'use client'

import { Card, Dropdown } from "flowbite-react";
import Image from "next/image";
// import Link from "next/link";

import styles from '@/styles/project.module.css';
import placeHolderImage from '@/public/projects/placeholder.png';
import { Project } from "@/types/project";
import { ROUTES } from "@/services/NavigationService";
import { useRouter } from "next/navigation";

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

export default function RecentItem({ project, itemType }: { project: Project, itemType: string }) {
  const router = useRouter();
  
  const handleProjectOpen = () => {
    return router.push(`${itemType === 'Project' ? ROUTES.PROJECTS : ROUTES.STUDIO}/${project._id}`)
  }

  return (
    <div className="max-w-xs">
      {/* <Link href={`${itemType === 'Project' ? ROUTES.PROJECTS : ROUTES.EDITOR}/${project._id}`}> */}
        <Card
          renderImage={() => getImageComponent(project.imageURL)}
        >
          <h5 className={`text-xl font-semibold tracking-tight text-gray-700 ${styles.title}`}>
            <p>
              {project.name}
            </p>
            <div className={styles.options}>
            <Dropdown
              onClick={(e) => e.preventDefault()}
              inline
              arrowIcon={false}
              label={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                src="https://img.icons8.com/fluency-systems-filled/48/ellipsis.png" 
                alt="ellipsis"/>
              }
            >
              <Dropdown.Item onClick={handleProjectOpen} >Open</Dropdown.Item>
              <Dropdown.Item>Duplicate</Dropdown.Item>
              <Dropdown.Item>Rename</Dropdown.Item>
              <Dropdown.Item>Delete</Dropdown.Item>
              <Dropdown.Item>Share</Dropdown.Item>
          </Dropdown>
          </div>
          </h5>
        </Card>
      {/* </Link> */}
    </div>
  )
}