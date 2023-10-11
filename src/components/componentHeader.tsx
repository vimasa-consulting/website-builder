import React from "react";
import styles from "../styles/dashboard/componentHeader.module.scss";

interface Props {
  heading: string;
}

const ComponentHeader: React.FC<Props> = ({ heading }) => {
  return (
    <div className="component-header">
      <h1 className={styles.dashboardQa}>{heading}</h1>
    </div>
  );
};

export default ComponentHeader;
