import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "../components/SidebarMenu";
import Header from "./Header";
import  '/./src/styles/App.scss'

const Layout = () => {
  return (
    <>
      <Header/>
      <SidebarMenu />
      <Outlet/>
    </>
  )
};

export default Layout;