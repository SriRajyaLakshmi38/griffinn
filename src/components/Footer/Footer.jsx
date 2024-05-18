// import styles from "./Footer.module.css";
import footerIcons from "../../utils/footer";
import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../../assets/logo.jpeg";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.icons}>
        {footerIcons.map(({ src, title }) => {
          return (
            <figure key={title}>
              <img src={src} alt={title} />
            </figure>
          );
        })}
      </section>
      <section className={styles.company}>
        <div>
          <div className={styles.companyname}>
            <figure className={styles.logoContainer}>
              <img src={logo} alt="companyImage"></img>
            </figure>
            <h2>Griff INN Adventures</h2>
          </div>
          <p>Grifinn Travels Pvt. Ltd.</p>
          <p>
            Swamy Narayana Nagar, Gurram Guda, Injapur, Hyderabad, Telangana,
            India 500070
          </p>
          <p>Life changing travel experiences curated by us</p>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/griffinn360adventure">
              <InstagramIcon className={styles.icon} />
            </a>
            <a href="https://Wa.me/+919010100595">
              <WhatsAppIcon className={styles.icon} />
            </a>
            <a href="https://www.youtube.com/@Griffinn360adventures">
              <YouTubeIcon className={styles.icon} />
            </a>
          </div>
        </div>
        <div>
          <div className={styles.quick}>
            <h2>Quick Links</h2>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>Explore Griff Inn</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={styles.touch}>
          <div>
            <h2>Get in Touch</h2>
          </div>
          <div>
            <div>
              <table>
                <tr>
                  <td>
                    <div>
                      <strong>Email</strong>
                    </div>
                  </td>
                  <td>
                    <p>griffin@gmail.com</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <strong>Manvi (Ops)</strong>
                    </div>
                  </td>
                  <td>
                    <p>+91 91033 67397</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <strong>Pulkit (Ops)</strong>
                    </div>
                  </td>
                  <td>
                    <p>+91 80767 43337</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <strong>Kajal</strong>
                    </div>
                  </td>
                  <td>
                    <p>+91 93548 67970</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <strong>Anany</strong>
                    </div>
                  </td>
                  <td>
                    <p>+91 93548 67970</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
