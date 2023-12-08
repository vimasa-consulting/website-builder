'use client'
import { useCallback, useEffect, useState } from "react";
import { getAllFilesByProjectId } from "@/services/FilesService";
import { FileTableData } from "@/types/file";
import HeatmapItemCard from "@/components/Heatmap/ItemCard";

export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}

export type File = {
  Name: string
  Domain: string
  _id: string
}

export default function Page({ params }: { params: { projectID: string } }) {
  const [tableData, setTableData] = useState<FileTableData[]>([])

  const loadFileDetails = useCallback(async () => {
    try {
      const projectId = params?.projectID
      const allProjects = await getAllFilesByProjectId(projectId)
      setTableData(allProjects.data)
    } catch (error) {
      console.log(error)
    }
  }, [params.projectID])

  useEffect(() => {
    loadFileDetails()
  }, [loadFileDetails])

  return (
    <div className="flex flex-col pb-14">
      <h3 className="text-xl">All Files</h3>
      <div className="flex flex-wrap mt-5 gap-3">
        {
          tableData.length > 0 && tableData.map((project: any) => <HeatmapItemCard itemType="File" key={project._id} item={project} />)
        }
      </div>       
    </div>
  );
}