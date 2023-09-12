import React, { useEffect, useState } from "react";
import projects from "../assets/dashboard/icons/projects.svg";
import domain from "../assets/dashboard/icons/domain.svg";
import settings from "../assets/dashboard/icons/settings.svg";
import analytics from "../assets/dashboard/icons/analytics.svg";
// import tips&tricks from "../assets/dashboard/icons/tips&tricks.svg";
// import domain from "../assets/dashboard/icons/domain.svg";

interface Props {
  navItem: string;
  index: number;
}

const SideBarItems: React.FC<Props> = ({ navItem, index }) => {
  const [modifiedName, setModifiedName] = useState("");
  const handleClick = (index: number) => {
    // const element = document.getElementsByClassName(`sidebar-nav-item${index}`);
    // element[0].classList.add('active');
    console.log(index);
  };

  useEffect(() => {
    setModifiedName(navItem.toLowerCase().split(" ").join("-"));
  }, []);
  console.log("Mo", modifiedName);

  return (
    <div
      className={`sidebar-nav-item sidebar-nav-item${index}`}
      onClick={() => handleClick(index)}
    >
      {/* <img src={`/${modifiedName}.svg`} alt={modifiedName} /> */}
      <h1>{navItem}</h1>
    </div>
  );
};

export default SideBarItems;
