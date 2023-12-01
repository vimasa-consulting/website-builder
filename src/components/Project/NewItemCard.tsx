'use client'

import { Card } from "flowbite-react";

export default function NewItemCard({setIsAddNewProjectModalOpen, itemType}: any) {
  return (
    <div className="" onClick={() => setIsAddNewProjectModalOpen(true)}>
        <Card className="w-[286px] h-[166px] mr-[32px] mb-[60px] bg-gray-300 border-none flex justify-middle items-center row cursor-pointer">
            <img className="w-[80px]" src="https://img.icons8.com/external-lylac-kerismaker/80/000000/external-Plus-ui-essential-lylac-kerismaker.png" alt="Plus icon"/>
        </Card>
    </div>
  )
}