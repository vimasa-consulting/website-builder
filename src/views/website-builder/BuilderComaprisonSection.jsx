import styles from "../../styles/dashboard/websiteBuilder/websiteBuilder.module.scss";

const BuilderComaprisonSection = () => {
  return (
    <div className={styles.comparisionSection}>
      <div className={styles.leftSection}>
        <h3>Compare 1</h3>
        <img src="https://placehold.co/400x400" alt="placeholder" />
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
      </div>
      <div className={styles.median}></div>
      <div className={styles.leftSection}>
        <h3>Compare 2</h3>
        <img src="https://placehold.co/400x400" alt="placeholder" />
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
      </div>
    </div>
  );
};

export default BuilderComaprisonSection;
