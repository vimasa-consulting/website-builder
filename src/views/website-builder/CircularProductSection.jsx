import styles from "../../styles/dashboard/websiteBuilder/websiteBuilder.module.scss";
import { BiImage } from "react-icons/bi";

const CircularProductSection = () => {
  return (
    <div className={styles.circularSection}>
      <div className={styles.centerText}>
        <h2>Unique Product Section</h2>
      </div>
      <div className={styles.circularBlock}>
        <div className={styles.circle}>
          <BiImage />
        </div>
        <h4>Product 1</h4>
        <p>Sub Text</p>
      </div>
      <div className={styles.circularBlock}>
        <div className={styles.circle}>
          <BiImage />
        </div>
        <h4>Product 2</h4>
        <p>Sub Text</p>
      </div>
      <div className={styles.circularBlock}>
        <div className={styles.circle}>
          <BiImage />
        </div>
        <h4>Product 3</h4>
        <p>Sub Text</p>
      </div>
      <div className={styles.circularBlock}>
        <div className={styles.circle}>
          <BiImage />
        </div>
        <h4>Product 4</h4>
        <p>Sub Text</p>
      </div>
      <div className={styles.circularBlock}>
        <div className={styles.circle}>
          <BiImage />
        </div>
        <h4>Product 5</h4>
        <p>Sub Text</p>
      </div>
      <div className={styles.circularBlock}>
        <div className={styles.circle}>
          <BiImage />
        </div>
        <h4>Product 6</h4>
        <p>Sub Text</p>
      </div>
    </div>
  );
};

export default CircularProductSection;
