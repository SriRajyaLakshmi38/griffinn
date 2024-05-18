import styles from "./Home.module.css";
import StarIcon from "@mui/icons-material/Star";

export default function Review({ name, review }) {
  return (
    <>
      <h2 className={styles.reviewName}>{name}</h2>
      <p className={styles.rating}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </p>
      <p className={styles.reviewDescription}>{review}</p>
    </>
  );
}
