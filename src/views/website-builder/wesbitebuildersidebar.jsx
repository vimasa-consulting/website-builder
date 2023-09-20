import SideBarItems from "../../components/sidebarItems";
import audioBui from "../../assets/dashboard/icons/audioBui.png";
import buttonCta from "../../assets/dashboard/icons/buttonCta.png";
import ImageBui from "../../assets/dashboard/icons/ImageBui.png";
import videoBui from "../../assets/dashboard/icons/videoBui.png";
import { RxHeading, RxSection, RxButton } from "react-icons/rx";
import { GiFootprint } from "react-icons/gi";
import { BiImage } from "react-icons/bi";

const BuilderSidebar = ({ componentPropArray }) => {
  const navigationItems = [
    "Get Started",
    "Projects",
    "Tips & Tricks",
    "Analytics",
    "Domains",
    "Settings",
  ];

  const handleClick = (str) => {
    componentPropArray((prevState) => [...prevState, str]);
  };

  return (
    <div className="sidebar">
      {/* <div className="sidebar-item">
        {navigationItems.map((item, i) => (
          <SideBarItems navItem={item} index={i} key={i} />
        ))}
      </div> */}
      <div className="sidebarBuilderSection">
        <div className="sideContent">
          <div className="singleElem" onClick={() => handleClick("Header")}>
            {/* <img src={audioBui} /> */}
            <div className="iconSize">
              {" "}
              <RxHeading />
            </div>

            <p>Header</p>
          </div>
          <div className="singleElem" onClick={() => handleClick("Footer")}>
            <div className="iconSize">
              {" "}
              <GiFootprint />
            </div>
            <p>Footer</p>
          </div>
          <div className="singleElem" onClick={() => handleClick("Section")}>
            <div className="iconSize">
              {" "}
              <RxSection />
            </div>
            <p>Section</p>
          </div>
          <div className="singleElem" onClick={() => handleClick("Image")}>
            <div className="iconSize">
              {" "}
              <BiImage />
            </div>
            <p>Image</p>
          </div>
          {/* <div className="singleElem">
            <img src={videoBui} />
            <p>Video</p>
          </div> */}
          <div className="singleElem" onClick={() => handleClick("Button")}>
            <div className="iconSize">
              {" "}
              <RxButton />
            </div>

            <p>Button</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderSidebar;
