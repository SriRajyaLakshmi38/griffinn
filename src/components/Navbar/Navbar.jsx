import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

export default function Navbar() {
  const check = useRef();

  function handleClick() {
    check.current.checked = false;
  }

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbarContainer} ${styles.container}`}>
        <input type="checkbox" ref={check} />
        <div className={styles.hamburgerLines}>
          <span className={`${styles.line} ${styles.line1}`}></span>
          <span className={`${styles.line} ${styles.line2}`}></span>
          <span className={`${styles.line} ${styles.line3}`}></span>
        </div>
        <div className={styles.menuItems}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : styles.li)}
            to="/"
            onClick={handleClick}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : styles.li)}
            to="/aboutus"
            onClick={handleClick}
          >
            Explore Griff Inn
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : styles.li)}
            to="/gallery"
            onClick={handleClick}
          >
            Gallery
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : styles.li)}
            to="/contactus"
            onClick={handleClick}
          >
            Contact Us
          </NavLink>
        </div>
        <h1 className={styles.logo}>GRIFF INN</h1>
      </div>
    </nav>
  );
}
