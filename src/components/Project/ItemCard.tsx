'use client'

import { Card, Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

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

export default function ItemCard({ project, itemType }: { project: Project & {updatedAt: string}, itemType: string }) {
    const router = useRouter();

    const handleProjectOpen = () => {
        return router.push(`${itemType === 'Project' ? ROUTES.PROJECTS : ROUTES.EDITOR}/${project._id}`)
    }

    return (
        <div className="max-w-xs mr-[32px] mb-[15px]">
            <Link href={`${itemType === 'Project' ? ROUTES.PROJECTS : ROUTES.EDITOR}/${project._id}`}>
            <div
            >
                {getImageComponent(project.imageURL)}
            </div>
            </Link>
            <div className={`text-xl font-semibold tracking-tight text-white-700 flex justify-between px-[10px] mt-[12px]`}>
                <div>
                    <p className={styles.projectName}>
                        {project.name}
                    </p>
                    <p className={styles.recentlyEdited}>
                        {project?.updatedAt ? project.updatedAt : 'Mahalaxmi Gupta - Edited 2 months ago '}
                    </p>
                </div>
                <div>
                    <Dropdown
                        onClick={(e) => e.preventDefault()}
                        inline
                        arrowIcon={false}
                        label={
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src="https://img.icons8.com/ios-glyphs/20/52525b/ellipsis.png"
                                alt="ellipsis" />
                        }
                    >
                        <Dropdown.Item onClick={handleProjectOpen}>Open</Dropdown.Item>
                        <Dropdown.Item>Duplicate</Dropdown.Item>
                        <Dropdown.Item>Rename</Dropdown.Item>
                        <Dropdown.Item>Delete</Dropdown.Item>
                        <Dropdown.Item>Share</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}