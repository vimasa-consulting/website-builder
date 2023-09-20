import { useState, useEffect } from "react";

import Builderheader from "./Builderheader.jsx";
import BuilderFooter from "./BuilderFooter.jsx";
import BuilderSection from "./BuilderSection.jsx";
import BuilderImage from "./BuilderImage.jsx";
import BuilderButton from "./BuilderButton.jsx";
const WebsiteBuilderContainer = ({ componentPropArray }) => {
  const [recievedComponent, setRecievedComponent] = useState("");

  // useEffect(() => {
  //   setRecievedComponent(componentPropArray);
  // }, [compProp]);

  return (
    <div className="website-builder-container">
      <div className="website-builder-container-item">
        {componentPropArray.map((componentName, index) => {
          if (componentName === "Header") {
            return <Builderheader key={index} />;
          } else if (componentName === "Footer") {
            return <BuilderFooter key={index} />;
          } else if (componentName === "Section") {
            return <BuilderSection key={index} />;
          } else if (componentName === "Image") {
            return <BuilderImage key={index} />;
          } else if (componentName === "Button") {
            return <BuilderButton key={index} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default WebsiteBuilderContainer;
