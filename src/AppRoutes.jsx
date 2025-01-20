// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoProvider from "./context/VideoContext";
import Home from "./pages/Home/Home";
import BasePage from "./pages/BasePage/BasePage";
import NewVideo from "./pages/NewVideo/NewVideo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasePage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "nuevo",
        element: <NewVideo />,
      },
    ],
  },
]);

export default function AppRoutes() {
  return (
    <VideoProvider>
      <RouterProvider router={router} />;
    </VideoProvider>
  );
}
