// Import necessary dependencies
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link, Outlet, useLocation } from 'react-router-dom';
import  '/./src/styles/App.scss';
import { decodeToken } from "react-jwt";
import AdminModal from '../components/AdminPopup';

const params = new URLSearchParams(window.location.search);
  

if (params.has("ssoToken")) {

  const jwt = params.get("ssoToken");

  const decodedToken = decodeToken(jwt);
  localStorage.setItem("ssoToken", jwt);
  localStorage.setItem("avatar", decodedToken.avatarURL);
  localStorage.setItem("user", decodedToken.name);
  localStorage.setItem("email", decodedToken.email);
  localStorage.setItem("id", decodedToken.id);

  

  console.log(decodedToken.avatarUrl)
  console.log(decodedToken.name)
  console.log(decodedToken.email)
  console.log(decodedToken.id)
}

// Rest of the code...


const Layout = () => {

  const [users, setUsers] = useState([]); 

  useEffect(() => {
    
    fetch(`http://localhost:3001/users/`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log('Error fetching data:', error));
  });

  const admins = users.find(users=> users.role === 'admin');
  const isLoggedIn = Boolean(localStorage.getItem("ssoToken"));

  const location = useLocation();
  const isGlobalComponentPage = location.pathname === '/post';
  const isPostPage = location.pathname === '/posts';
  const isPostPage2 = location.pathname === '/CreateRequest';
  const isPostPage3 = location.pathname === '/settings';

  return (
    <>
      <Header/>
      <div className="FrontPage">
            <div className="wrapper">
            <h1>Hello {localStorage.getItem("user")}{admins && isLoggedIn ? <AdminModal/> : <></>}</h1>
              <div className="title-container">
                {!isPostPage && !isPostPage2  && !isPostPage3 &&  (
                <>
                  <h2 className={`title1 ${isGlobalComponentPage ? 'global-component-page' : ''}`}><Link to="/">Roadmap</Link></h2>
                  <h2 className={`title2 ${isGlobalComponentPage ? 'global-component-page' : ''}`}><Link to="/post">Feature Requests</Link></h2>
                </>
                )}
                {(isPostPage || isPostPage2 || isPostPage3 ) && (
                  <h2 className="title3"><Link to="/">Back</Link></h2>
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
