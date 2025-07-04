import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Drag from "../drag/Drag";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Drag />,
      },
      {
        path: "/tailwind",
        element: <h1>Tailwind</h1>,
      },
      {
        path: "/framer-motion",
        element: <h1>Framer Motion</h1>,
      },
    ],
  },
]);
