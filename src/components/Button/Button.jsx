import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button({
  logo,
  texto,
  accion,
  onClick,
  estilo = "inactive",
}) {
  const buttonSubstyle = {
    active: {
      border: "2px solid var(--color-activo)",
      color: "var(--color-activo)",
      backgroundColor: "var(--color-secundario)",
    },
    inactive: {
      backgroundColor: "var(--color-secundario)",
      color: "var(--color-inactivo)",
      border: "2px solid var(--color-inactivo)",
    },
    iconInactive: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "120px",
      alignItems: "center",
      backgroundColor: "var(--color-secundario)",
      color: "var(--color-inactivo)",
      padding: "10px",
      marginLeft: "10px",
      marginRight: "10px",
    },
    activeAlt: {
      border: "2px solid var(--color-activo)",
      color: "var(--color-inactivo)",
      backgroundColor: "var(--color-secundario)",
    },
    closeButton: {
      backgroundColor: "var(--color-secundario)",
      color: "var(--color-inactivo)",
      width: "52px",
      height: "52px",
    },
  };

  return (
    <Link
      className={styles.btn}
      style={buttonSubstyle[estilo]}
      to={accion}
      onClick={onClick}
    >
      {logo && <img src={logo} alt="logo" className={styles.logo} />}
      {texto && <>{texto}</>}
    </Link>
  );
}

Button.propTypes = {
  logo: PropTypes.string,
  texto: PropTypes.string,
  //   activo: PropTypes.bool,
  accion: PropTypes.string,
  onClick: PropTypes.func,
  estilo: PropTypes.string,
};
