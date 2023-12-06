import Navbar from "@/components/AppLayout/Navbar";

const EditorLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-full bg-black">
      <Navbar />
      <main className="h-full">{children}</main>
    </div>
  )
}

export default EditorLayout;