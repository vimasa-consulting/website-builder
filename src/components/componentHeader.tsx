import React from "react";

interface Props {
  heading: string;
}

const ComponentHeader: React.FC<Props> = ({ heading}) => {
  return (
    <div className="component-header">
        <h1>{heading}</h1>
    </div>
  );
};

export default ComponentHeader;
