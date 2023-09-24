import styles from "../../styles/dashboard/websiteBuilder/websiteBuilder.module.scss";
import { BiImage } from "react-icons/bi";

const KeyFeatures = () => {
  return (
    <div className={styles.KeyFeaturesSection}>
      <div className={styles.indiviSection}>
        <div className={styles.leftSection}>
          <h3> Feature 1</h3>
          <p> Describe the feature eaborate</p>
        </div>
        <div className={styles.rightSection}>
          <img src="https://placehold.co/400x400" alt="placeholder" />
        </div>
      </div>
      <div className={styles.indiviSection}>
        <div className={styles.rightSection}>
          <img src="https://placehold.co/400x400" alt="placeholder" />
        </div>
        <div className={styles.leftSection}>
          <h3> Feature 1</h3>
          <p> Describe the feature eaborate</p>
        </div>
      </div>
      <div className={styles.indiviSection}>
        <div className={styles.leftSection}>
          <h3> Feature 1</h3>
          <p> Describe the feature eaborate</p>
        </div>
        <div className={styles.rightSection}>
          <img src="https://placehold.co/400x400" alt="placeholder" />
        </div>
      </div>
    </div>
  );
};
export default KeyFeatures;
