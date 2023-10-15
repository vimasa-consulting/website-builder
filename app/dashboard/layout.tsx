const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
    <div className=" h-full bg-black">
      {/* add navbar component here */}
      <div className=" p-5">
        Navbar
      </div>
      <main className="h-full">{children}</main>
    </div>
  );
}

export default DashboardLayout;