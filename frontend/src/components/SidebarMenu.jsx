import React from "react";
import { Link } from "react-router-dom"; 
import add from "../assets/Add (1).png";
import Request from "../assets/Request Service.png";
import Process from "../assets/Process Improvement.png";
import setting from "../assets/Settings.png";
import  '/./src/styles/Sidebar.scss'

const Sidebar = () => {
  return (
    <div className="container">
        <div className="element">
          <Link to="/CreateFeatureRequest">
            <img src={add} alt="add" />
            <p>Suggest</p>
          </Link>
        </div>
      
        <div className="element">
          <Link to="/requests">
            <img src={Request} alt="Request" />
            <span>Features</span>
          </Link>
        </div>
      
        <div className="element">
          <Link to="/roadmap">
            <img src={Process} alt="Request" />
            <span>Roadmap</span>
          </Link>
        </div>
      
        <div className="menupicture">
            <Link to="/settings">
              <img src={setting} alt="setting" />
              <span>Settings</span>
            </Link>
        </div>
      </div>
      
  );
};

export default Sidebar;
