export const getVideos = async () => {
  const response = await fetch("http://localhost:3000/videos");
  const data = await response.json();
  return data;
};

export const getCategorias = async () => {
  const response = await fetch("http://localhost:3000/categorias");
  const data = await response.json();
  return data;
};

export const createVideo = async (video) => {
  const response = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
  const data = await response.json();
  return data;
};

export const updateVideo = async (video) => {
  const response = await fetch(`http://localhost:3000/videos/${video.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
  const data = await response.json();
  return data;
};

export const deleteVideo = async (id) => {
  const response = await fetch(`http://localhost:3000/videos/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
