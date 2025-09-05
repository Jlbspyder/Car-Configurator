import { Outlet } from "react-router-dom";
import Footer from '../components/homepage/footer/Footer';
import CpoNavbar from '../components/CpoNavbar';


const CpoLayout = () => {
  return (
    <>
      <CpoNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default CpoLayout
