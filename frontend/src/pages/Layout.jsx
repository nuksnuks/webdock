import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import SidebarMenu from "../components/SidebarMenu";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header/>
      <SidebarMenu />

      <Outlet />
    </>
  )
};

export default Layout;