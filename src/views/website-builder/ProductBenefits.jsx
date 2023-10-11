import styles from "../../styles/dashboard/websiteBuilder/websiteBuilder.module.scss";
import { BiImage } from "react-icons/bi";

const ProductBenefits = () => {
  return (
    <div className={styles.benefitsSection}>
      <div className={styles.leftSection}>
        <h2>Talk about the dream</h2>
        <p>Eaborate on features & benefits</p>
        <div className={styles.benefitList}>
          <div className={styles.individualBenefit}>
            <BiImage />
            <h4>benefit 1</h4>
            <p>Description 1</p>
          </div>
          <div className={styles.individualBenefit}>
            <BiImage />
            <h4>benefit 2</h4>
            <p>Description 2</p>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <img src="https://placehold.co/300x300" alt="placeholder" />
      </div>
    </div>
  );
};

export default ProductBenefits;
