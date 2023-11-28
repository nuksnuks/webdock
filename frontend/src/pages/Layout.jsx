import React from "react";
import Header from "./Header";
import { Link, Outlet } from 'react-router-dom';
import  '/./src/styles/App.scss';

const Layout = () => {
  return (
    <>
      <Header/>
      <div className="FrontPage">
            <div className="wrapper">
              <div className="title-container">
                <h1 className="title1"><Link to="/roadmap">Roadmap</Link></h1>
                <h1 className="title2"><Link to="/GlobalComponent">Feature Requests</Link></h1>
              </div>
              <div className="main-container">
              <Outlet/>
                <div className="content-container">
                  
                </div>
              </div>
            </div>
          </div>
    </>
  )
};

export default Layout;