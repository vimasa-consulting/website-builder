import React from "react";

interface Props {
  radioButtonName: string;
}

const RadioButton: React.FC<Props> = ({ radioButtonName }) => {
  return (
    <div className="radio-button">
      <input type="radio" /> {radioButtonName}
    </div>
  );
};

export default RadioButton;
