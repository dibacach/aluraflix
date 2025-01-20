import { useContext, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import styles from "./Home.module.css";
import { VideosContext } from "../../context/VideoContext";
import EditVideoModal from "../../components/EditVideoModal/EditVideoModal";

export default function Home() {
  const { videos, loading, categorias, getVideoSelected, videoToEdit } =
    useContext(VideosContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (id) => {
    getVideoSelected(id);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

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
          openModal={openModal}
        />
      ))}
      <EditVideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Modal Title"
        videoToEdit={videoToEdit}
      >
        <p>This is the content of the modal. You can put anything here.</p>
        <button onClick={closeModal} style={{ marginTop: "10px" }}>
          Close Modal
        </button>
      </EditVideoModal>
    </div>
  );
}
