import { useState, useEffect, useContext } from "react";
import Button from "../Button/Button";
import styles from "./EditVideoModal.module.css";
import PropTypes from "prop-types";
import { VideosContext } from "../../context/VideoContext";
import close from "../../assets/close.png";

export default function EditVideoModal({ isOpen, onClose, videoToEdit }) {
  const { categorias } = useContext(VideosContext);

  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    imagen: "",
    video: "",
    categoria: "",
  });

  useEffect(() => {
    if (videoToEdit) {
      setFormData({
        titulo: videoToEdit?.titulo || "",
        descripcion: videoToEdit?.descripcion || "",
        imagen: videoToEdit?.imagen || "",
        video: videoToEdit?.video || "",
        categoria: videoToEdit?.categoria || "",
      });
    }
  }, [videoToEdit]);

  const [tituloError, setTituloError] = useState(false);
  const [descripcionError, setDescripcionError] = useState(false);
  const [imagenError, setImagenError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [categoriaError, setCategoriaError] = useState(false);

  if (!isOpen) return null;

  const guardarVideo = () => {
    console.log("formData", formData);
    //     if (titulo === "") setTituloError(true);
    //     else setTituloError(false);

    //     if (descripcion === "") setDescripcionError(true);
    //     else setDescripcionError(false);

    //     if (imagen === "") setImagenError(true);
    //     else setImagenError(false);

    //     if (video === "") setVideoError(true);
    //     else setVideoError(false);

    //     if (categoria === "") setCategoriaError(true);
    //     else setCategoriaError(false);

    //     if (!titulo || !descripcion || !imagen || !video || !categoria) return;

    // const videoEdited = {
    //   titulo,
    //   descripcion,
    //   imagen,
    //   video,
    //   categoria,
    // };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name, "value", value);
    // setFormData((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
  };

  const limpiarFormulario = () => {
    setFormData({
      titulo: "",
      descripcion: "",
      imagen: "",
      video: "",
      categoria: "",
    });
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close}>
          <Button
            estilo="closeButton"
            className={styles.closeButton}
            onClick={onClose}
            logo={close}
          />
        </div>
        <div className={styles.title}>
          <h1>EDITAR CARD:</h1>
        </div>
        <form className={styles.form}>
          <div className={styles.row}>
            <section
              className={tituloError ? styles.sectionError : styles.section}
            >
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                name="titulo"
                id="titulo"
                data-title
                placeholder={
                  tituloError ? "El título es obligatorio" : "ingrese el título"
                }
                className={styles.inputText}
                value={formData.titulo}
                onChange={(e) => {
                  handleChange(e);
                  setTituloError(false);
                }}
              />
            </section>
          </div>
          <div className={styles.row}>
            <section
              className={categoriaError ? styles.sectionError : styles.section}
            >
              <label htmlFor="categoria">Categoría</label>
              <select
                name="categoria"
                id="categoria"
                data-category
                className={styles.inputSelect}
                value={formData.categoria}
                onChange={(e) => {
                  handleChange(e);
                  setCategoriaError(false);
                }}
                style={
                  categoriaError
                    ? { color: "red" }
                    : formData.categoria
                    ? {}
                    : { color: "grey" }
                }
              >
                <option value="" disabled>
                  {categoriaError
                    ? "La categoría es obligatoria"
                    : "Seleccione una categoría"}
                </option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.nombre}
                  </option>
                ))}
              </select>
            </section>
          </div>
          <div className={styles.row}>
            <section
              className={imagenError ? styles.sectionError : styles.section}
            >
              <label htmlFor="imagen">Imagen</label>
              <input
                type="text"
                name="imagen"
                id="imagen"
                data-image
                placeholder={
                  imagenError
                    ? "El link de la imagen es obligatorio"
                    : "Link de la imagen"
                }
                className={styles.inputText}
                value={formData.imagen}
                onChange={(e) => {
                  handleChange(e);
                  setImagenError(false);
                }}
              />
            </section>
          </div>
          <div className={styles.row}>
            <section
              className={videoError ? styles.sectionError : styles.section}
            >
              <label htmlFor="video">Video</label>
              <input
                type="text"
                name="video"
                id="video"
                data-video
                placeholder={
                  videoError
                    ? "El link del video es obligatorio"
                    : "Link del video"
                }
                className={styles.inputText}
                value={formData.video}
                onChange={(e) => {
                  handleChange(e);
                  setVideoError(false);
                }}
              />
            </section>
          </div>
          <div className={styles.row}>
            <section
              className={
                descripcionError ? styles.sectionError : styles.section
              }
            >
              <label htmlFor="descripcion">Descripción</label>
              <textarea
                name="descripcion"
                id="descripcion"
                data-description
                placeholder={
                  descripcionError
                    ? "La descripción es obligatoria"
                    : "¿De qué se trata este vídeo?"
                }
                className={styles.inputTextMultiline}
                value={formData.descripcion}
                onChange={(e) => {
                  handleChange(e);
                  setDescripcionError(false);
                }}
              ></textarea>
            </section>
          </div>
          <div className={styles.botonera}>
            <Button
              texto="GUARDAR"
              estilo="activeAlt"
              onClick={() => guardarVideo()}
            />
            <Button texto="LIMPIAR" onClick={() => limpiarFormulario()} />
          </div>
        </form>
      </div>
    </div>
  );
}

EditVideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  videoToEdit: PropTypes.object,
};
