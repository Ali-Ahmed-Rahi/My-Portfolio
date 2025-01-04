import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import ContactMe from "../Page/ContactMe";
import Project from "../components/Home/Project";
import Skills from "../components/Home/Skills";
import Experience from "../components/Home/Experience";
import About from "../Page/About";


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
        element: <About></About>
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
        path: "/experience",
        element: <Experience></Experience>
      },
      
    ],
  },
 
]);
