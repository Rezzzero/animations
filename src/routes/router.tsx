import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Main } from "../pages/Main";
import { Tailwind } from "../pages/Tailwind";
import { FramerMotion } from "../pages/FramerMotion";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/tailwind",
        element: <Tailwind />,
      },
      {
        path: "/framer-motion",
        element: <FramerMotion />,
      },
    ],
  },
]);
