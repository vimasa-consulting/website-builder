import WebsiteBuilderHeader from "./websitebuilderheader";
import BuilderSidebar from "./wesbitebuildersidebar";
import WebsiteBuilderContainer from "./websitebuildercontainer";

const WebsiteDashboard = () => {
  return (
    <div className="website-builder-dashboard">
      <div className="website-builder-dashboard-item">
        <WebsiteBuilderHeader />
        <div className="website-builder-dashboard-container">
          <BuilderSidebar />
          <WebsiteBuilderContainer />
        </div>
      </div>
    </div>
  );
};

export default WebsiteDashboard;
