import styles from "../../styles/dashboard/websiteBuilder/websiteBuilder.module.scss";
import { BiImage } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <div className={styles.worksSection}>
      <h2>How It Works</h2>
      <div className={styles.bottomSection}>
        <div className={styles.eachSection}>
          <div className={styles.benefitList}>
            <div className={styles.individualBenefit}>
              <BiImage />
              <h4>benefit 1</h4>
              <p>Description 1</p>
            </div>
          </div>
          <img src="https://placehold.co/300x300" alt="placeholder" />
        </div>
        <div className={styles.eachSection}>
          <div className={styles.benefitList}>
            <div className={styles.individualBenefit}>
              <BiImage />
              <h4>benefit 2</h4>
              <p>Description 2</p>
            </div>
          </div>
          <img src="https://placehold.co/300x300" alt="placeholder" />
        </div>
        <div className={styles.eachSection}>
          <div className={styles.benefitList}>
            <div className={styles.individualBenefit}>
              <BiImage />
              <h4>benefit 2</h4>
              <p>Description 2</p>
            </div>
          </div>
          <img src="https://placehold.co/300x300" alt="placeholder" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
