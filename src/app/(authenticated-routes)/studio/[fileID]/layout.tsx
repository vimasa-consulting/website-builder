import Navbar from "@/components/AppLayout/Navbar";

const EditorLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className=" h-full">
      <Navbar />
      <main className="h-full">{children}</main>
    </div>
  )
}

export default EditorLayout;