import React from "react";

interface Props {
  checkBoxName: string;
}

const CheckBox: React.FC<Props> = ({ checkBoxName }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" /> {checkBoxName}
    </div>
  );
};

export default CheckBox;
