import React from "react";

interface Props {
  heading: string;
}

const PointerBoxes: React.FC<Props> = ({ heading }) => {
  return (
    <div className="box-pointer">
      <div className="box-pointer-item">{heading}</div>
    </div>
  );
};

export default PointerBoxes;
