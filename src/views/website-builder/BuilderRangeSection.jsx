import styles from "../../styles/dashboard/websiteBuilder/websiteBuilder.module.scss";

const BuilderRangeSection = () => {
  return (
    <div className={styles.BuilderRangeSection}>
      <h2> Offers & Range section</h2>
      <div className={styles.offerBlock}>
        <div className={styles.offerSection}>
          <img src="https://placehold.co/200x200" alt="placeholder" />
          <h3>Prodcut 1</h3>
          <p> Description How is the product</p>
        </div>
        <div className={styles.offerSection}>
          <img src="https://placehold.co/200x200" alt="placeholder" />
          <h3>Prodcut 2</h3>
          <p> Description How is the product</p>
        </div>
        <div className={styles.offerSection}>
          <img src="https://placehold.co/200x200" alt="placeholder" />
          <h3>Prodcut 3</h3>
          <p> Description How is the product</p>
        </div>
        <div className={styles.offerSection}>
          <img src="https://placehold.co/200x200" alt="placeholder" />
          <h3>Prodcut 4</h3>
          <p> Description How is the product</p>
        </div>
        <div className={styles.offerSection}>
          <img src="https://placehold.co/200x200" alt="placeholder" />
          <h3>Prodcut 5</h3>
          <p> Description How is the product</p>
        </div>
        <div className={styles.offerSection}>
          <img src="https://placehold.co/200x200" alt="placeholder" />
          <h3>Prodcut 6</h3>
          <p> Description How is the product</p>
        </div>
      </div>
    </div>
  );
};
export default BuilderRangeSection;
