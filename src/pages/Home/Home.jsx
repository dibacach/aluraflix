import { useState, useEffect, useContext } from "react";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import styles from "./Home.module.css";
import { getCategorias } from "../../components/api/api";
import { VideosContext } from "../../context/VideoContext";

export default function Home() {
  const [categorias, setCategorias] = useState([]);
  const { videos, loading } = useContext(VideosContext);

  const fetchCategorias = async () => {
    const data = await getCategorias();
    setCategorias(data);
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  if (loading) return <div>Cargando...</div>;
  const featuredVideo = videos[0];

  return (
    <div className={styles.container}>
      {featuredVideo && <Banner video={featuredVideo} />}
      {categorias.map((categoria) => (
        <Category
          key={categoria.id}
          {...categoria}
          videos={videos.filter((video) => video.categoria === categoria.id)}
        />
      ))}
    </div>
  );
}
