import React from "react";

interface Props {
  pointsArray: Array<any>;
}

const ListOfPoints: React.FC<Props> = ({ pointsArray }) => {
  return (
    <>
      {pointsArray.length &&
        pointsArray.map((item, i) => {
          <div>
            <li key={i}>{item}</li>
          </div>;
        })}
    </>
  );
};

export default ListOfPoints;
