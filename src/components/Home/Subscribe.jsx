import styles from "./Home.module.css";

export default function Subscribe() {
  return (
    <div id={styles.subscribeContainer}>
      <p className={styles.subscribeHeading}>
        Subscirbe to get our latest updates
      </p>
      <form action="">
        <input
          type="email"
          name="email"
          id={styles.email}
          placeholder="Enter your email id:"
        />
        <input type="submit" value="Subscribe" id={styles.subscribeBtn} />
      </form>
    </div>
  );
}
