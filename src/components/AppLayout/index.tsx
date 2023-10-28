import AppView from "./AppView";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="h-full flex flex-row min-h-screen">
        <Sidebar />
        <AppView>
          {children}
        </AppView>
      </div>
    </div>
  )
}