import React, { useEffect } from "react";
import Header from "./Header";
import { Link, Outlet, useLocation } from 'react-router-dom';
import  '/./src/styles/App.scss';
import { decodeToken } from "react-jwt";

//søger efter parameter i URL'en

const params = new URLSearchParams(window.location.search);

if (params.has("ssoToken") ) {
  const jwt = params.get("ssoToken");
  console.log(jwt)

  //bruger react-jwt fra linje 5 til at afkode ssoToken
  const decodedToken = decodeToken(jwt);

  console.log(decodedToken.avatarUrl)
  console.log(decodedToken.name)
  console.log(decodedToken.email)
  console.log(decodedToken.id)
   
  
  localStorage.setItem('avatar',decodedToken.avatarUrl)
  localStorage.setItem('user',decodedToken.name);
  localStorage.setItem('email',decodedToken.email);
  localStorage.setItem('id',decodedToken.id);

} else {
  const params = "guest";
  console.log(params)
  localStorage.removeItem('user');
  localStorage.removeItem('email');
  localStorage.removeItem('id');
}



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
