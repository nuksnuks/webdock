import { Outlet, Link } from "react-router-dom";
import  '/./src/styles/MainNavbar.scss'
import Nav from "../components/Nav";

const Layout = () => {
  return (
    <>
      <Nav /> 

      <Outlet />
    </>
  )
};

export default Layout;