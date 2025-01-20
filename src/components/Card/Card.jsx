import { useContext } from "react";
import styles from "./Card.module.css";
import PropTypes from "prop-types";
import { VideosContext } from "../../context/VideoContext";
import Button from "../Button/Button";
import trash from "../../assets/trash.png";
import pencil from "../../assets/pencil.png";

export default function Card({ id, imagen, color, openModal }) {
  const { eliminarVideo } = useContext(VideosContext);

  const style = {
    border: `4px solid ${color}`,
  };

  const styleImagen = {
    borderBottom: `4px solid ${color}`,
  };

  return (
    <div key={id} className={styles.container} style={style}>
      <img
        src={imagen}
        className={styles.imagen}
        alt="imagen"
        style={styleImagen}
      />
      <div className={styles.botonera}>
        <Button
          texto="BORRAR"
          logo={trash}
          estilo="iconInactive"
          onClick={() => eliminarVideo(id)}
        />
        <Button
          texto="EDITAR"
          logo={pencil}
          estilo="iconInactive"
          onClick={() => openModal(id)}
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
