import styles from "./Home.module.css";
export default function UpcomingTrips({ src, location, title, date }) {
  return (
    <div className={styles.upcomingTripCard}>
      <figure className={styles.utImgDiv}>
        <img src={src} alt={title} />
      </figure>
      <div className={styles.tripsDetailsDiv}>
        <p>{location}</p>
        <div className={styles.tripsDates}>
          <p className={styles.tripsDate}>{date}</p>
          <button className={styles.tripsBtn}>Get Details</button>
        </div>
      </div>
    </div>
  );
}
