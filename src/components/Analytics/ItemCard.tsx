'use client'
import { Project } from "@/types/project";
import { usePathname, useRouter } from "next/navigation";
import { ROUTES } from "@/services/NavigationService";

interface Props {
    item: Project & {updatedAt: string};
    itemType: string
}

export default function AnalyticsItemCard({ item, itemType}: Props) {
    const router  = useRouter();
    const pathname = usePathname();

const openDomainSettingsHandler = () => {
    console.log(item);
    router.push(`${ROUTES.ANALYTICS}/project/${item.matomoProjectId}/`)
}

    return (
        <div className="max-w-xs mr-[32px]">
                <div onClick={openDomainSettingsHandler} className="w-[286px] h-[166px] bg-gray-300 border-none flex flex-col justify-center rounded-[10px] p-[40px] text-black gap-[10px] cursor-pointer">
                    <h2 className="font-[600] text-[20px]">{item.name}</h2>
                    <p className="text-[16px]">{item.projectHostingAlias}</p>
                </div>
        </div>
    )
}