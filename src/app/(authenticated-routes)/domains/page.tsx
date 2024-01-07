'use client'
import DomainItemCard from "@/components/Domain/ItemCard";
import CardItemSkeleton from "@/components/Project/CardItemSkeleton";
import ItemCard from "@/components/Project/ItemCard";
import AuthContext from "@/context/identity/AuthContext";
import { getAllProjectsByOrganizationId } from "@/services/ProjectsService";
import { Project, ProjectTableData } from "@/types/project";
import { useContext, useEffect, useState } from "react";

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
    loadProjectDetails()
  }, [])

  return (
    <>
    <h2 className="text-xl">Domains</h2>
    <div className="flex flex-wrap mt-5 gap-3">
    {tableData?.length > 0 &&
        tableData.map((project: any) => <DomainItemCard setTableData={setTableData} key={project._id} item={project} />)
    }
  </div>
  </>
  );
}