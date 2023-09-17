import SideBarItems from "../../components/sidebarItems";
import audioBui from "../../assets/dashboard/icons/audioBui.png";
import buttonCta from "../../assets/dashboard/icons/buttonCta.png";
import ImageBui from "../../assets/dashboard/icons/ImageBui.png";
import videoBui from "../../assets/dashboard/icons/videoBui.png";

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
      <div className="sidebarBuilderSection">
        <div className="sideContent">
          <div className="singleElem">
            <img src={audioBui} />
            <p>Audio</p>
          </div>
          <div className="singleElem">
            <img src={ImageBui} />
            <p>Image</p>
          </div>
          <div className="singleElem">
            <img src={videoBui} />
            <p>Video</p>
          </div>
          <div className="singleElem">
            <img src={buttonCta} />
            <p>Button</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderSidebar;
