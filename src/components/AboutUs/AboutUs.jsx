import styles from "./AboutUs.module.css";
import { aboutInfo } from "../../utils/Aboutus";
import MissionVission from "./MissionVission";
import Founder from "./Founder";

export default function AboutUs() {
  return (
    <section className={styles.container}>
      <p className="mainHeading">ABOUT US</p>
      <div id={styles.infoContainer}>
        {aboutInfo.map(({ title = "", description }) => {
          return (
            <div className={styles.info} key={title}>
              {title && (
                <span className={styles.infoTitle}>{title + ": "}</span>
              )}

              {<span className={styles.infoDescription}>{description}</span>}
            </div>
          );
        })}
      </div>
      <MissionVission />
      <div id={styles.founderContainer}>
        <img src="" alt="" />
        <Founder />
      </div>
    </section>
  );
}
