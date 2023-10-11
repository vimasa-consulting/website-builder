import styles from "../../styles/dashboard/websiteBuilder/builderHeader.module.scss";
const BuilderImage = () => {
  return (
    <div className={styles.imageContainer}>
      <p>I am Image Section</p>
      <div className={styles.imageSection}>
        <img src="https://placehold.co/600x400" />
      </div>
    </div>
  );
};

export default BuilderImage;
