import React from "react";

interface Props {
  heading: string;
  description: string;
}

const UpgradePlan: React.FC<Props> = ({ heading, description }) => {
  return (
    <div className="upgrade-plan">
      <div className="upgrade-plan-item">
        <h1>{heading}</h1>
        <p>{description}</p>
        <button>Find a plan</button>
      </div>
    </div>
  );
};

export default UpgradePlan;
