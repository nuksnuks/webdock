import React from "react";
import { Link } from "react-router-dom"; 
import add from "../assets/Add (1).png";
import Request from "../assets/Request Service.png";
import Process from "../assets/Process Improvement.png";
import User from "../assets/User Account.png";
import setting from "../assets/Settings.png";
import  '/./src/styles/Sidebar.scss'

const Sidebar = () => {
  return (
    <div className="leftside">
      <Link to="/CreateFeatureRequest">
        <span className="menupicture">
          <img src={add} alt="add" />
          <span>Suggest</span>
        </span>
      </Link>
      <Link to="/featurerequest">
        <span className="menupicture">
          <img src={Request} alt="Request" />
          <span>Features</span>
        </span>

      </Link>
      <Link to="/roadmap">
        <span className="menupicture">
          <img src={Process} alt="Request" />
          <span>Roadmap</span>
        </span>
      </Link>
      
      <Link to="/settings">
        <span className="menupicture">
          <img src={setting} alt="setting" />
          <span>Settings</span>
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;