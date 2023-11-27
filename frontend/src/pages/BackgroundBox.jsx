import React from 'react';
import '/./src/styles/BackgroundBox.scss';
import { Link } from 'react-router-dom'


const BackgroundBox = (props) => { //Props gør at vi kan genbruge komponentet i andre komponenter
  return (
    <div className="BackgroundBox">
      <div className="wrapper">
        <div className="title-container">
          <h1 className="title1"><Link to="/roadmap">Roadmap</Link></h1>
          <h1 className="title2"><Link to="/requests">Feature Requests</Link></h1>
        </div>
        <div className="main-container">
          {/* Din hovedcontainer */}
          <div className="content-container">
            {props.contentPlace}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBox