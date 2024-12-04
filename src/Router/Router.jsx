import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";

import ContactMe from "../Page/ContactMe";
import Projects from "../Page/Projects";
import Experiences from "../Page/Experiences";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <ContactMe></ContactMe>,
      },
      {
        path: "/exp",
        element: <Experiences></Experiences>,
      },
    ],
  },
]);
