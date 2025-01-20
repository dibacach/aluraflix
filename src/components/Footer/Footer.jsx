import styles from "./Footer.module.css";
import LogoMain from "../../assets/LogoMain.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={LogoMain} alt="logo" className={styles.logo} />
    </footer>
  );
}
