import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import styles from "./Home.module.css";
import { VideosContext } from "../../context/VideoContext";

export default function Home() {
  const { videos, loading, categorias } = useContext(VideosContext);

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
