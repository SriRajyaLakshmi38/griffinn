import styles from "./Home.module.css";

import homeImg from "../../assets/homeImg.jpg";

export default function HomeCover() {
  return (
    <div id={styles.homeCoverContainer}>
      <figure id={styles.homeImgContainer}>
        <img src={homeImg} alt="" />
      </figure>
      <p id={styles.homeText}>
        DIVE AND EXPLORE THE WORLD OF ADVENTURE AT GRIFF INN
      </p>
      <div className={`${styles.arrow} ${styles.arrowFirst}`}></div>
      <div className={`${styles.arrow} ${styles.arrowSecond}`}></div>
    </div>
  );
}
