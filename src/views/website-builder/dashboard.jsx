import WebsiteBuilderHeader from "./websitebuilderheader";
import BuilderSidebar from "./wesbitebuildersidebar";
import WebsiteBuilderContainer from "./websitebuildercontainer";
import { useState } from "react";

const WebsiteDashboard = () => {
  const [componentName, setComponentName] = useState([]);
  return (
    <div className="website-builder-dashboard">
      <div className="website-builder-dashboard-item">
        <WebsiteBuilderHeader />
        <div className="website-builder-dashboard-container">
          <BuilderSidebar componentPropArray={setComponentName} />
          <WebsiteBuilderContainer componentPropArray={componentName} />
        </div>
      </div>
    </div>
  );
};

export default WebsiteDashboard;
