import React from "react";
import checkmark from "../assets/dashboard/checkmark.png";
interface Props {
  pointsArray: Array<any>;
}

const ListOfPoints: React.FC<Props> = ({ pointsArray }) => {
  return (
    <ul className="list-of-points">
      {pointsArray.length &&
        pointsArray.map((item, i) => {
          return (
            <div className="listElement">
              <img src={checkmark} alt="check" />
              <li key={i}>{item}</li>
            </div>
          );
        })}
    </ul>
  );
};

export default ListOfPoints;
