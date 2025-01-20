import styles from "./NewVideo.module.css";
import NewVideoForm from "../../components/NewVideoForm/NewVideoForm";

export default function NewVideo() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>NUEVO VIDEO</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </div>
      <div className={styles.subtitle}>
        <h3>Crear Tarjeta</h3>
      </div>
      <NewVideoForm />
    </div>
  );
}
