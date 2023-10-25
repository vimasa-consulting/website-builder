import React from "react"

export default function AppView({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow p-6">{children}</div>
  );
}