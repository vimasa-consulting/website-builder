import styles from "../../styles/dashboard/websiteBuilder/websiteBuilder.module.scss";

const HeroBanner = () => {
  return (
    <div className={styles.herobannerSection}>
      <div className={styles.leftSection}>
        <h1>Talk about the dream</h1>
        <p>Eaborate on features & benefits</p>
        <button>Offer CTA</button>
      </div>
      <div className={styles.rightSection}>
        <img src="https://placehold.co/600x300" alt="placeholder" />
      </div>
    </div>
  );
};

export default HeroBanner;
