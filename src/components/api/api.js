export const getVideos = async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/dibacach/aluraflix/videos"
  );
  const data = await response.json();
  return data;
};

export const getCategorias = async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/dibacach/aluraflix/categorias"
  );
  const data = await response.json();
  return data;
};

export const createVideo = async (video) => {
  const response = await fetch(
    "https://my-json-server.typicode.com/dibacach/aluraflix/videos",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(video),
    }
  );
  const data = await response.json();
  return data;
};

export const updateVideo = async (video) => {
  const response = await fetch(
    `https://my-json-server.typicode.com/dibacach/aluraflix/videos/${video.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(video),
    }
  );
  const data = await response.json();
  return data;
};

export const deleteVideo = async (id) => {
  const response = await fetch(
    `https://my-json-server.typicode.com/dibacach/aluraflix/videos/${id}`,
    {
      method: "DELETE",
    }
  );
  const data = await response.json();
  return data;
};
