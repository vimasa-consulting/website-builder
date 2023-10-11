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
          <div className="singleElem" onClick={() => handleClick("StarRating")}>
            <div className="iconSize">
              {" "}
              <BiImage />
            </div>
            <p>Star Rating</p>
          </div>
          <div className="singleElem" onClick={() => handleClick("HeroBanner")}>
            <div className="iconSize">
              {" "}
              <BiImage />
            </div>
            <p>Hero Banner</p>
          </div>
          <div className="singleElem" onClick={() => handleClick("Benefits")}>
            <div className="iconSize">
              {" "}
              <BiImage />
            </div>
            <p>Product Benefits</p>
          </div>
          <div className="singleElem" onClick={() => handleClick("HowItWorks")}>
            <div className="iconSize">
              {" "}
              <BiImage />
            </div>
            <p>How It Works</p>
          </div>
          <div
            className="singleElem"
            onClick={() => handleClick("CircularProduct")}
          >
            <div className="iconSize">
              {" "}
              <BiImage />
            </div>
            <p>Circular Section</p>
          </div>
          <div
            className="singleElem"
            onClick={() => handleClick("KeyFeatures")}
          >
            <div className="iconSize">
              {" "}
              <BiImage />
            </div>
            <p>Key Features </p>
          </div>
          <div
            className="singleElem"
            onClick={() => handleClick("comparisions")}
          >
            <div className="iconSize">
              {" "}
              <BiImage />
            </div>
            <p>Compare</p>
          </div>
          <div
            className="singleElem"
            onClick={() => handleClick("RangeSection")}
          >
            <div className="iconSize">
              {" "}
              <BiImage />
            </div>
            <p>Range Section</p>
          </div>
          <div
            className="singleElem"
            onClick={() => handleClick("UniqueSection")}
          >
            <div className="iconSize">
              {" "}
              <BiImage />
            </div>
            <p>Unique Section</p>
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
