import styles from "./Banner.module.css";
import fondo from "../../assets/fondo.png";

export default function Banner() {
  return (
    <div className={styles.container}>
      <img src={fondo} alt="fondo" className={styles.fondo} />
    </div>
  );
}
