import styles from "./Header.module.css";
import LogoMain from "../../assets/LogoMain.png";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoMain} alt="logo" className={styles.logo} />
      <div className={styles.botonera}>
        <Button texto="HOME" estilo="active" accion="/" />
        <Button texto="NUEVO VIDEO" accion="/nuevo" />
      </div>
    </header>
  );
}
