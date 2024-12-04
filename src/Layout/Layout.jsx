import { Outlet } from "react-router-dom";
import Navbar from "../Shered/Navbar";
import Footer from "../Shered/Footer";

const Layout = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar></Navbar>
        <div className="min-h-screen">
        <Outlet></Outlet>
        </div>
        <Footer></Footer> 
      </div>
    </>
  );
};

export default Layout;
