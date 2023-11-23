import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import  '/./src/styles/App.scss'

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
};

export default Layout;