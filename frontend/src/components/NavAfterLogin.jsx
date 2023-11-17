import React from "react";
import  '/./src/styles/NavAfterLogin.scss'
import doorbell from "../assets/Doorbell.png";
import search from "../assets/Search.png";
import maleuser from "../assets/Male Usersm.png";
import menu from "../assets/Menu.png";


const NavAfterLogin = ({ isMobile }) => {
  return (
    <nav className={isMobile ? 'navbar' : 'navbardk'}>
      {isMobile ? (
        <>
          <div className="menu1">
            <img src={menu} alt="menu" />
          </div>
          <div className="menu2sm">
            <button>Create</button>
            <img src={doorbellsm} alt="doorbell" />
            <img src={maleuser} alt="maleuser" />
          </div>
        </>
      ) : (
        <>
          <Link to="/"><img src=".\src\assets\webdock-logo-positiv 3.png" alt="" /></Link>
          <div className="unorder">
            <a href="">
              <img src={MaleUser} alt="MaleUser" />
            </a>
            <a href="">
              <img src={doorbell} alt="doorbell" />
            </a>
            <a className="last">
              <li id="li1">Search...</li>
              <li>
                <img src={search} alt="search" />
              </li>
            </a>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavAfterLogin;
