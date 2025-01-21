import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import {
  getVideos,
  deleteVideo,
  createVideo,
  getCategorias,
  updateVideo,
} from "../components/api/api";

// eslint-disable-next-line react-refresh/only-export-components
export const VideosContext = createContext();

export default function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoToEdit, setVideoToEdit] = useState(null);

  const fetchCategorias = async () => {
    try {
      const data = await getCategorias();
      setCategorias(data);
    } catch (error) {
      console.error("Error al obtener categorias", error);
    }
  };

  const fetchVideos = async () => {
    try {
      const data = await getVideos();
      setVideos(data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener videos", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
    fetchCategorias();
  }, []);

  const agregarVideo = async (nuevoVideo) => {
    try {
      const videoAdded = await createVideo(nuevoVideo);
      setVideos((prevVideos) => [...prevVideos, videoAdded]);
    } catch (error) {
      console.error("Error al agregar video", error);
    }
  };

  const eliminarVideo = async (id) => {
    try {
      await deleteVideo(id);
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    } catch (error) {
      console.error("Error al agregar video", error);
    }
  };

  const actualizarVideo = async (id, updatedVideo) => {
    try {
      updatedVideo.id = id;
      await updateVideo(updatedVideo);
      setVideos((prevVideos) =>
        prevVideos.map((video) => (video.id === id ? updatedVideo : video))
      );
    } catch (error) {
      console.error("Error al actualizar video", error);
    }
  };

  const getVideoSelected = (id) => {
    try {
      const video = videos.find((video) => video.id === id);
      setVideoToEdit(video);
    } catch (error) {
      console.error("Error al obtener categoria", error);
    }
  };

  return (
    <VideosContext.Provider
      value={{
        videos,
        loading,
        setVideos,
        agregarVideo,
        fetchVideos,
        eliminarVideo,
        categorias,
        getVideoSelected,
        videoToEdit,
        actualizarVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

VideoProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
