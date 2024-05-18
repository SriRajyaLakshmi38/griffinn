import styles from "./AboutUs.module.css";
import { founderInfo } from "../../utils/Aboutus";

export default function Founder() {
  return (
    <div className={styles.founderContainer}>
      <p className={styles.heading}>About Founder</p>
      <div className={styles.founderSubContainer}>
        <img src="" alt="" />

        {founderInfo.map(({ title, description }) => {
          return (
            <div className={styles.founderInfoContainer}>
              {<p className={styles.founderInfoHeading}>{title}</p>}
              {<p className={styles.founderInfoText}>{description}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
