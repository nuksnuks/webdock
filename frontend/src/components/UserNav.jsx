import React from 'react'
import { Link } from 'react-router-dom'
import  '/./src/styles/MainNavbar.scss'
import { decodeToken } from "react-jwt";

const UserNav = () => {

  if (localStorage.getItem("ssoToken") === null || localStorage.getItem("ssoToken") === undefined) {
    const params = new URLSearchParams(window.location.search);

    const jwt = params.get("ssoToken");
    
    //bruger react-jwt fra linje 5 til at afkode ssoToken
    const decodedToken = decodeToken(jwt);
     
    localStorage.setItem("ssoToken", jwt); 
    localStorage.setItem('avatar',decodedToken.avatarUrl)
    localStorage.setItem('user',decodedToken.name);
    localStorage.setItem('email',decodedToken.email);
    localStorage.setItem('id',decodedToken.id);
  } else {
    
  }

  return (
    <nav>
        <Link to="/"><img src=".\src\assets\webdock-logo-positiv 3.png" alt="" /></Link>
        <div>
            <button> <a href="/./settings">Settings</a></button>
            <button onClick={() => {
              localStorage.removeItem("ssoToken"); 
              localStorage.removeItem("user");
              localStorage.removeItem("id");
              localStorage.removeItem("avatar");
              localStorage.removeItem("email");
              }
            }>
              <a href="http://localhost:5173/">Log Out</a>
            </button>
        </div>
        
      </nav>
  )
}

export default UserNav