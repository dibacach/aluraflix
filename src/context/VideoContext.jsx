import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { getVideos, deleteVideo, createVideo } from "../components/api/api";

// eslint-disable-next-line react-refresh/only-export-components
export const VideosContext = createContext();

export default function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <VideosContext.Provider
      value={{
        videos,
        loading,
        setVideos,
        agregarVideo,
        fetchVideos,
        eliminarVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

VideoProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
