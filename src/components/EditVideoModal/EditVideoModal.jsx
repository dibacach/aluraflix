import { useState, useEffect, useContext } from "react";
import Button from "../Button/Button";
import styles from "./EditVideoModal.module.css";
import PropTypes from "prop-types";
import { VideosContext } from "../../context/VideoContext";
import close from "../../assets/close.png";

export default function EditVideoModal({ isOpen, onClose, videoToEdit }) {
  const { categorias, actualizarVideo } = useContext(VideosContext);

  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    imagen: "",
    video: "",
    categoria: "",
  });

  const [formDataError, setFormDataError] = useState({
    titulo: false,
    descripcion: false,
    imagen: false,
    video: false,
    categoria: false,
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

    if (isOpen)
      setFormDataError({
        titulo: false,
        descripcion: false,
        imagen: false,
        video: false,
        categoria: false,
      });
  }, [videoToEdit, isOpen]);

  if (!isOpen) return null;

  const guardarVideo = async () => {
    if (!formData.titulo)
      setFormDataError((prev) => ({
        ...prev,
        titulo: true,
      }));
    else
      setFormDataError((prev) => ({
        ...prev,
        titulo: false,
      }));

    if (!formData.descripcion)
      setFormDataError((prev) => ({
        ...prev,
        descripcion: true,
      }));
    else
      setFormDataError((prev) => ({
        ...prev,
        descripcion: false,
      }));

    if (!formData.imagen)
      setFormDataError((prev) => ({
        ...prev,
        imagen: true,
      }));
    else
      setFormDataError((prev) => ({
        ...prev,
        imagen: false,
      }));

    if (!formData.video)
      setFormDataError((prev) => ({
        ...prev,
        video: true,
      }));
    else
      setFormDataError((prev) => ({
        ...prev,
        video: false,
      }));

    if (!formData.categoria)
      setFormDataError((prev) => ({
        ...prev,
        categoria: true,
      }));
    else
      setFormDataError((prev) => ({
        ...prev,
        categoria: false,
      }));

    if (
      !formData.titulo ||
      !formData.descripcion ||
      !formData.imagen ||
      !formData.video ||
      !formData.categoria
    )
      return;

    await actualizarVideo(videoToEdit.id, formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
              className={
                formDataError.titulo ? styles.sectionError : styles.section
              }
            >
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                name="titulo"
                id="titulo"
                data-title
                placeholder={
                  formDataError.titulo
                    ? "El título es obligatorio"
                    : "ingrese el título"
                }
                className={styles.inputText}
                value={formData.titulo}
                onChange={(e) => {
                  handleChange(e);
                  setFormDataError({ ...formDataError, titulo: false });
                }}
              />
            </section>
          </div>
          <div className={styles.row}>
            <section
              className={
                formDataError.categoria ? styles.sectionError : styles.section
              }
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
                  setFormDataError({ ...formDataError, categoria: false });
                }}
                style={
                  formDataError.categoria
                    ? { color: "red" }
                    : formData.categoria
                    ? {}
                    : { color: "grey" }
                }
              >
                <option value="" disabled>
                  {formDataError.categoria
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
              className={
                formDataError.imagen ? styles.sectionError : styles.section
              }
            >
              <label htmlFor="imagen">Imagen</label>
              <input
                type="text"
                name="imagen"
                id="imagen"
                data-image
                placeholder={
                  formDataError.imagen
                    ? "El link de la imagen es obligatorio"
                    : "Link de la imagen"
                }
                className={styles.inputText}
                value={formData.imagen}
                onChange={(e) => {
                  handleChange(e);
                  setFormDataError({ ...formDataError, imagen: false });
                }}
              />
            </section>
          </div>
          <div className={styles.row}>
            <section
              className={
                formDataError.video ? styles.sectionError : styles.section
              }
            >
              <label htmlFor="video">Video</label>
              <input
                type="text"
                name="video"
                id="video"
                data-video
                placeholder={
                  formDataError.video
                    ? "El link del video es obligatorio"
                    : "Link del video"
                }
                className={styles.inputText}
                value={formData.video}
                onChange={(e) => {
                  handleChange(e);
                  setFormDataError({ ...formDataError, video: false });
                }}
              />
            </section>
          </div>
          <div className={styles.row}>
            <section
              className={
                formDataError.descripcion ? styles.sectionError : styles.section
              }
            >
              <label htmlFor="descripcion">Descripción</label>
              <textarea
                name="descripcion"
                id="descripcion"
                data-description
                placeholder={
                  formDataError.descripcion
                    ? "La descripción es obligatoria"
                    : "¿De qué se trata este vídeo?"
                }
                className={styles.inputTextMultiline}
                value={formData.descripcion}
                onChange={(e) => {
                  handleChange(e);
                  setFormDataError({ ...formDataError, descripcion: false });
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
