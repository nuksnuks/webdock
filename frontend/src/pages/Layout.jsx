import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import SidebarMenu from "../components/SidebarMenu";

const Layout = () => {
  return (
    <>
      <Nav />
      <SidebarMenu />

      <Outlet />
    </>
  )
};

export default Layout;