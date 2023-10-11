import React, { useState } from "react";
import styles from "../../styles/dashboard/websiteBuilder/websiteBuilder.module.scss";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className={styles.starRatingSection}>
      <div className={styles.starRatingBlock}>
        <div className={styles.starRate}>
          {[...Array(5)].map((star, i) => {
            i += 1;
            return (
              <button
                type="button"
                key={i}
                className={
                  i <= (hover || rating) ? styles.hoverOn : styles.hoverOff
                }
                onClick={() => setRating(i)}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(i)}
              >
                <span className={styles.dd} key={i}>
                  &#9733;{" "}
                </span>
              </button>
            );
          })}
        </div>
        <div className={styles.score}>
          <p>4.5/5 (2400 Reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default StarRating;
