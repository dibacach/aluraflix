// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getCategorias, createVideo } from "../../components/api/api";
import styles from "./NewVideo.module.css";
// import Button from "../../components/Button/Button";
import NewVideoForm from "../../components/NewVideoForm/NewVideoForm";

export default function NewVideo() {
  // const [categorias, setCategorias] = useState([]);
  // const [titulo, setTitulo] = useState("");
  // const [descripcion, setDescripcion] = useState("");
  // const [imagen, setImagen] = useState("");
  // const [video, setVideo] = useState("");
  // const [categoria, setCategoria] = useState("");

  // const [tituloError, setTituloError] = useState(false);
  // const [descripcionError, setDescripcionError] = useState(false);
  // const [imagenError, setImagenError] = useState(false);
  // const [videoError, setVideoError] = useState(false);
  // const [categoriaError, setCategoriaError] = useState(false);

  // const fetchCategorias = async () => {
  //   const data = await getCategorias();
  //   setCategorias(data);
  // };

  // useEffect(() => {
  //   fetchCategorias();
  // }, []);

  // const limpiarFormulario = () => {
  //   setTitulo("");
  //   setDescripcion("");
  //   setImagen("");
  //   setVideo("");
  //   setCategoria("");
  // };

  // const guardarVideo = async () => {
  //   if (titulo === "") setTituloError(true);
  //   else setTituloError(false);

  //   if (descripcion === "") setDescripcionError(true);
  //   else setDescripcionError(false);

  //   if (imagen === "") setImagenError(true);
  //   else setImagenError(false);

  //   if (video === "") setVideoError(true);
  //   else setVideoError(false);

  //   if (categoria === "") setCategoriaError(true);
  //   else setCategoriaError(false);

  //   if (!titulo || !descripcion || !imagen || !video || !categoria) return;

  //   const nuevoVideo = {
  //     titulo,
  //     descripcion,
  //     imagen,
  //     video,
  //     categoria,
  //   };

  //   createVideo(nuevoVideo);
  // const navigate = useNavigate();
  // navigate("/");
  // };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>NUEVO VIDEO</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </div>
      <div className={styles.subtitle}>
        <h3>Crear Tarjeta</h3>
      </div>
      {/* <form className={styles.form}>
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
              value={titulo}
              onChange={(e) => {
                setTitulo(e.target.value);
                setTituloError(false);
              }}
            />
          </section>
          <section
            className={categoriaError ? styles.sectionError : styles.section}
          >
            <label htmlFor="categoria">Categoría</label>
            <select
              name="categoria"
              id="categoria"
              data-category
              className={styles.inputSelect}
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
                setCategoriaError(false);
              }}
              style={
                categoriaError
                  ? { color: "red" }
                  : categoria
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
              value={imagen}
              onChange={(e) => {
                setImagen(e.target.value);
                setImagenError(false);
              }}
            />
          </section>
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
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            />
          </section>
        </div>
        <div className={styles.row}>
          <section
            className={descripcionError ? styles.sectionError : styles.section}
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
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </section>
        </div>
        <div className={styles.botonera}>
          <Button
            texto="GUARDAR"
            activo={true}
            onClick={() => guardarVideo()}
          />
          <Button texto="LIMPIAR" onClick={() => limpiarFormulario()} />
        </div>
      </form> */}
      <NewVideoForm />
    </div>
  );
}
