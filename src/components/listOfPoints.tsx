import React from "react";

interface Props {
  pointsArray: Array<any>;
}

const ListOfPoints: React.FC<Props> = ({ pointsArray }) => {
  return (
    <ul className="list-of-points">
      {pointsArray.length &&
        pointsArray.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
    </ul>
  );
};

export default ListOfPoints;
