import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";

import ContactMe from "../Page/ContactMe";
import Experiences from "../Page/Experiences";
import Project from "../components/Home/Project";
import Skills from "../components/Home/Skills";
import Ab from "../components/Home/Ab";

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
        path: "/about",
        element: <Ab></Ab>
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/projects",
        element: <Project></Project>
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
