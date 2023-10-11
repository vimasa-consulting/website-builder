import styles from "../../styles/dashboard/websiteBuilder/websiteBuilder.module.scss";
import { BiImage } from "react-icons/bi";

const UniqueSection = () => {
  return (
    <div className={styles.uniqueSection}>
      <h2>Catchy Header about user's unique</h2>
      <p>Quietly placed paragraph</p>
      <div className={styles.uniqueBlock}>
        <div className={styles.uspBlock}>
          <div className={styles.circularIcon}>
            <BiImage />
          </div>
          <h4>Personal use case</h4>
          <p>Describe hw your product works</p>
        </div>
        <div className={styles.uspBlock}>
          <div className={styles.circularIcon}>
            <BiImage />
          </div>
          <h4>Personal use case</h4>
          <p>Describe hw your product works</p>
        </div>
        <div className={styles.uspBlock}>
          <div className={styles.circularIcon}>
            <BiImage />
          </div>
          <h4>Personal use case</h4>
          <p>Describe hw your product works</p>
        </div>
      </div>
    </div>
  );
};
export default UniqueSection;
