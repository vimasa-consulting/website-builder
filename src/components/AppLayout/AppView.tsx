import React from "react";

export default function AppView({ children }: { children: React.ReactNode }) {
  const borderColor = {
    borderColor: "#535353", // Corrected property name
  };
  return (
    <div
      className="flex-grow px-12 pl-[100px] py-6 border-l border-0.1"
      style={borderColor}
    >
      {children}
    </div>
  );
}
