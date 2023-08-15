import SideBarItems from "../../components/sidebarItems";

const BuilderSidebar = () => {
  const navigationItems = [
    "Get Started",
    "Projects",
    "Tips & Tricks",
    "Analytics",
    "Domains",
    "Settings",
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        {navigationItems.map((item, i) => (
          <SideBarItems navItem={item} index={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default BuilderSidebar;
