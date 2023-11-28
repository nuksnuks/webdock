import React from "react";
import Header from "./Header";
import { Link, Outlet, useLocation } from 'react-router-dom';
import  '/./src/styles/App.scss';

const Layout = () => {
  const location = useLocation();
  const isGlobalComponentPage = location.pathname === '/GlobalComponent';

  return (
    <>
      <Header/>
      <div className="FrontPage">
            <div className="wrapper">
              <div className="title-container">
                <h1 className={`title1 ${isGlobalComponentPage ? 'global-component-page' : ''}`}><Link to="/roadmap">Roadmap</Link></h1>
                <h1 className={`title2 ${isGlobalComponentPage ? 'global-component-page' : ''}`}><Link to="/GlobalComponent">Feature Requests</Link></h1>
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
