// Import necessary dependencies
import React, { useEffect } from "react";
import Header from "./Header";
import { Link, Outlet, useLocation } from 'react-router-dom';
import  '/./src/styles/App.scss';
import { decodeToken } from "react-jwt";

// Extract and handle SSO token
const params = new URLSearchParams(window.location.search);

if (params.has("ssoToken")) {
  const jwt = params.get("ssoToken");

  // Decode and store in local storage
  const decodedToken = decodeToken(jwt);
  localStorage.setItem("ssoToken", jwt);
  localStorage.setItem("avatar", decodedToken.avatarUrl);
  localStorage.setItem("user", decodedToken.name);
  localStorage.setItem("email", decodedToken.email);
  localStorage.setItem("id", decodedToken.id);

  

  console.log(decodedToken.avatarUrl)
  console.log(decodedToken.name)
  console.log(decodedToken.email)
  console.log(decodedToken.id)
} else {
  // Handle when there is no SSO token
  localStorage.removeItem("ssoToken");
  localStorage.removeItem("user");
  localStorage.removeItem("email");
  localStorage.removeItem("id");
}

// Rest of the code...


const Layout = () => {
  const location = useLocation();
  const isGlobalComponentPage = location.pathname === '/GlobalComponent';
  const isPostPage = location.pathname === '/posts';
  const isPostPage2 = location.pathname === '/CreateFeatureRequest';
  const isPostPage3 = location.pathname === '/settings';

  return (
    <>
      <Header/>
      <div className="FrontPage">
            <div className="wrapper">
              <div className="title-container">
                {!isPostPage && !isPostPage2  && !isPostPage3 &&  (
                <>
                <h2 className={`title1 ${isGlobalComponentPage ? 'global-component-page' : ''}`}><Link to="/roadmap">Roadmap</Link></h2>
                <h2 className={`title2 ${isGlobalComponentPage ? 'global-component-page' : ''}`}><Link to="/GlobalComponent">Feature Requests</Link></h2>
                </>
                )}
                {(isPostPage || isPostPage2 || isPostPage3 ) && (
                  <h2 className="title3"><Link to="/roadmap">Back</Link></h2>
                )}
              </div>
              <div className="main-container">
              <Outlet/>
              </div>
            </div>
          </div>
    </>
  )
};

export default Layout;
