import React from "react"

export default function AppView({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow px-12 pl-[100px] py-6 border-l border-0.1 border-rgb-77-77-77">{children}</div>
  );
}