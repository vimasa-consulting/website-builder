import { useState, useEffect } from "react";

import Builderheader from "./Builderheader.jsx";
import BuilderFooter from "./BuilderFooter.jsx";
import BuilderSection from "./BuilderSection.jsx";
import BuilderImage from "./BuilderImage.jsx";
import BuilderButton from "./BuilderButton.jsx";
import StarRating from "./StarRating.jsx";
import HeroBanner from "./HeroBanner.jsx";
import ProductBenefits from "./ProductBenefits.jsx";
import HowItWorks from "./HowItWorks.jsx";
import CircularProductSection from "./CircularProductSection.jsx";
import KeyFeatures from "./KeyFeatures.jsx";
import BuilderComaprisonSection from "./BuilderComaprisonSection.jsx";
import BuilderRangeSection from "./BuilderRangeSection.jsx";
import UniqueSection from "./UniqueSection.jsx";

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
          } else if (componentName === "StarRating") {
            return <StarRating key={index} />;
          } else if (componentName === "HeroBanner") {
            return <HeroBanner key={index} />;
          } else if (componentName === "Benefits") {
            return <ProductBenefits key={index} />;
          } else if (componentName === "HowItWorks") {
            return <HowItWorks key={index} />;
          } else if (componentName === "CircularProduct") {
            return <CircularProductSection key={index} />;
          } else if (componentName === "KeyFeatures") {
            return <KeyFeatures key={index} />;
          } else if (componentName === "comparisions") {
            return <BuilderComaprisonSection key={index} />;
          } else if (componentName === "RangeSection") {
            return <BuilderRangeSection key={index} />;
          } else if (componentName === "UniqueSection") {
            return <UniqueSection key={index} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default WebsiteBuilderContainer;
