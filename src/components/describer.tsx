import React from "react";

interface Props {
  heading: string;
  subheading: string;
  iconUrl: string;
}

const Describer: React.FC<Props> = ({ heading, subheading, iconUrl }) => {
  return (
    <div className="describer">
      <div className="describer-item">
        <img src={iconUrl} alt="icon"/>
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
      </div>
    </div>
  );
};

export default Describer;
