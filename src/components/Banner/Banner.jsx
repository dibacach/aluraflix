import { useContext } from "react";
import styles from "./Banner.module.css";
import PropTypes from "prop-types";
import { VideosContext } from "../../context/VideoContext";

export default function Banner({ video }) {
  const { categorias } = useContext(VideosContext);
  const categoria = categorias.find(
    (categoria) => categoria.id === video.categoria
  );

  const style = {
    backgroundColor: categoria.color,
    border: `2px solid ${categoria.color}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div className={styles.container}>
      <img src={video.imagen} alt={video.titulo} className={styles.fondo} />
      <div className={styles.descripcion}>
        <div>
          <h1 className={styles.category} style={style}>
            {categoria.nombre.toUpperCase()}
          </h1>
          <h2>{video.titulo}</h2>
          <p>{video.descripcion}</p>
        </div>
        <img src={video.imagen} alt={video.titulo} className={styles.video} />
      </div>
    </div>
  );
}

Banner.propTypes = {
  video: PropTypes.object.isRequired,
};
