import ComponentHeader from "../../components/componentHeader";
import ComponentSubHeader from "../../components/componentSubheader";

const GetStarted = () => {
  return (
    <div className="smart-builder">
      <div className="smart-builder-item">
      <ComponentHeader heading={"Product Name"} />
      <ComponentSubHeader
          subheading={"Help our experts build your page"}
          specialWord=""
        />
        <p>
            Answer a set of questions based on marketing strategy & user experience.
        </p>
        <button className="smart-builder"> Use Smart Builder </button>
        
      </div>
    </div>
  );
};

export default GetStarted;
