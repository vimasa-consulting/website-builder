'use client'
import { useContext, useEffect, useState } from "react";
import HeatmapItemCard from "@/components/Heatmap/ItemCard";
import CardItemSkeleton from "@/components/Project/CardItemSkeleton";
import AuthContext from "@/context/identity/AuthContext";
import { getAllProjectsByOrganizationId } from "@/services/ProjectsService";
import { ProjectTableData } from "@/types/project";

export default function Page() {
  const [tableData, setTableData] = useState<ProjectTableData[]>([])
  const { cachedUser } = useContext(AuthContext);

  async function loadProjectDetails() {
    try {
      const organizationId = cachedUser?.organizations[0] || '';
      const allProjects = await getAllProjectsByOrganizationId(organizationId)
      setTableData(allProjects.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(cachedUser) {
      loadProjectDetails()
    }
  }, [cachedUser])

  return (
    <>
    <h2 className="text-xl">Heatmaps</h2>
    <div className="flex flex-wrap mt-5 gap-3">
    {tableData?.length ?
    <>
      {
        tableData.map((project: any) => <HeatmapItemCard itemType="Project" key={project._id} item={project} />)
      }
      </>
     :
    Array.from({length: 2}).map((_, index) => <CardItemSkeleton key={index} />)
    }
  </div>
  </>
  );
}