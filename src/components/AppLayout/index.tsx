import AppView from "./AppView";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="h-screen flex flex-row">
        <Sidebar />
        <AppView>
          {children}
        </AppView>
      </div>
    </div>
  )
}