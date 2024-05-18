import { youtube } from "../../utils/Home";
import styles from "./Home.module.css";

export default function Youtube() {
  return (
    <>
      <p className={styles.youtubeHeading}>Glimpse to perceive</p>
      <div className={styles.youtubeContainer}>
        {youtube.map(({ videoUrl }) => {
          return (
            <div className={styles.videoContainer} key={videoUrl}>
              <iframe
                src={videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </>
  );
}
