import Count from "./Count";
import HomeCover from "./HomeCover";
import Reviews from "./Reviews";
import Subscribe from "./Subscribe";
import UpcomingTrips from "./UpcomingTrips";
import Youtube from "./Youtube";
import tripsData from "../../utils/UpcomingTrips.js";
import styles from "../Home/Home.module.css";
export default function Home() {
  return (
    <>
      <HomeCover />
      <Count />

      <section className={styles.tripsContainer}>
        <div className={styles.upcomingTripsContainer}>
          {tripsData.map((trip) => (
            <UpcomingTrips {...trip} className={styles.upcoming} />
          ))}
        </div>
      </section>
      <section className={styles.reviewsMainContainer}>
        <Reviews />
      </section>
    </>
  );
}
