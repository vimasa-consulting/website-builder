import React from "react"

export default function AppView({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow px-12 py-6">{children}</div>
  );
}