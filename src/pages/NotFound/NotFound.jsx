import error404 from "../../assets/404.webp";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <p>La página que buscas no existe</p>
      <img src={error404} alt="404" className={styles.error} />
    </div>
  );
}
