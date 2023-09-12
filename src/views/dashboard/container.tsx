import ComponentHeader from "../../components/componentHeader";
import ComponentSubHeader from "../../components/componentSubheader";
import ListOfPoints from "../../components/listOfPoints";
import wizard from "../../assets/dashboard/wizard.png";

const MainContainer = () => {
  const points = [
    "Answer our expert crafted questions",
    "Get a personalised page built for your goals",
    "Add powerful copy & images to finish the page",
  ];

  return (
    <div className="main-container">
      <div className="main-container-items">
        <ComponentHeader heading={"Hi , what are you building today?"} />
        {/* temporary placeholder */}
        <div className="videoSection">
          <div className="temp-placeholder"></div>
          <img src={wizard} alt="wizard" />
        </div>
        <div className="call-to-action">
          <button className="smart-builder"> Use Smart Builder </button>
          <button className="build-it">Build it YourSelf </button>
        </div>
        <ComponentSubHeader
          subheading={"Build in 5 mins with "}
          specialWord={"Smart Builder"}
        />
        <ListOfPoints pointsArray={points} />
      </div>
    </div>
  );
};

export default MainContainer;
