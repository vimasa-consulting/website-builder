import React from "react";

interface Props {
  subheading: string;
  specialWord: string;
}

const ComponentSubHeader: React.FC<Props> = ({ subheading, specialWord }) => {
  return (
    <div className="component-sub-header">
      <h1>
        {subheading} <span>{specialWord}</span>
      </h1>
    </div>
  );
};

export default ComponentSubHeader;
