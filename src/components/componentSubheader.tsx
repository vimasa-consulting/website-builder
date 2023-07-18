import React from "react";

interface Props {
  subheading: string;
}

const ComponentSubHeader: React.FC<Props> = ({ subheading}) => {
  return (
    <div className="component-header">
        <h1>{subheading}</h1>
    </div>
  );
};

export default ComponentSubHeader;
