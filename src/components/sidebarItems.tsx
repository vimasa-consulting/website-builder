import React from "react";

interface Props {
  navItem: string;
  index: number;
}

const SideBarItems: React.FC<Props> = ({ navItem, index }) => {

  const handleClick = (index: number) => {
    // const element = document.getElementsByClassName(`sidebar-nav-item${index}`);
    // element[0].classList.add('active');
    console.log(index);
  };

  return (
    <div
      className={`sidebar-nav-item sidebar-nav-item${index}`}
      onClick={() => handleClick(index)}
    >
      <h1>{navItem}</h1>
    </div>
  );
};

export default SideBarItems;
