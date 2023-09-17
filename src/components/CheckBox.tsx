import React, { useState } from "react";

interface Props {
  checkBoxName: string;
}

const CheckBox: React.FC<Props> = ({ checkBoxName }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />{" "}
      {checkBoxName}
    </div>
  );
};

export default CheckBox;
