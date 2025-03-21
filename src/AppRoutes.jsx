import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoProvider from "./context/VideoContext";
import Home from "./pages/Home/Home";
import BasePage from "./pages/BasePage/BasePage";
import NewVideo from "./pages/NewVideo/NewVideo";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasePage />,
    children: [
      {
        path: "/aluraflix",
        element: <Home />,
      },
      {
        path: "/aluraflix/nuevo",
        element: <NewVideo />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function AppRoutes() {
  return (
    <VideoProvider>
      <RouterProvider router={router} />
    </VideoProvider>
  );
}
