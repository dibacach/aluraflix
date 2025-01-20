import styles from "./Category.module.css";
import PropTypes from "prop-types";
import Card from "../Card/Card";

export default function Category({ nombre, color, videos }) {
  const style = {
    backgroundColor: color,
    border: `2px solid ${color}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <>
      <div className={styles.title}>
        <h2 className={styles.category} style={style}>
          {nombre.toUpperCase()}
        </h2>
      </div>
      <div className={styles.cards}>
        {videos.map((video) => (
          <Card key={video.id} {...video} color={color} />
        ))}
      </div>
    </>
  );
}

Category.propTypes = {
  nombre: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
};
