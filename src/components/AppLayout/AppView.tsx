import React from "react"

export default function AppView({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow w-full">{children}</div>
  );
}