import SideBarItems from "../../components/sidebarItems";
import UpgradePlan from "../../components/upgradePlanSection";

const Sidebar = () => {
  const navigationItems = [
    "Get Started",
    "Projects",
    "Tips & Tricks",
    "Analytics",
    "Domains",
    "Settings",
  ];
  const heading = "Upgrade your plan";
  const description =
    "Upgrade your plan to maximize your performance and enjoy your benefits";

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        {navigationItems.map((item, i) => (
          <SideBarItems navItem={item} index={i} key={i} />
        ))}
        <UpgradePlan heading={heading} description={description} />
      </div>
    </div>
  );
};

export default Sidebar;
