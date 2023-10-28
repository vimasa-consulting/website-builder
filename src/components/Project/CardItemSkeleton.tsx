'use client'

import { Card } from "flowbite-react";

export default function CardItemSkeleton() {
  return (
    <div className="max-w-xs">
        <Card className="w-80 h-64 bg-gray-300 border-none">
        </Card>
    </div>
  )
}