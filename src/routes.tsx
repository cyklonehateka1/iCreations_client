import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/project",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Project />,
      },
    ],
  },
  {
    path: "/services",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Services />,
      },
    ],
  },
]);

export default router;
