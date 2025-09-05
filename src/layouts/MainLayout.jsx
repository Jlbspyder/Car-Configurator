import { Outlet } from "react-router-dom";
import Navbar from "../components/homepage/navbar/Navbar";
import Footer from "../components/homepage/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
