import React from 'react';
import '/./src/styles/FrontPage.scss';
import { Link } from 'react-router-dom'
import FeatureRequest from '../pages/FeatureRequest';

    const GlobalComponent = () => {
        return (
            <div className="FrontPage">
              <div className="wrapper">
                <div className="title-container">
                  <h1 className="title1"><Link to="/roadmap">Roadmap</Link></h1>
                  <h1 className="title2"><Link to="/FeatureRequest">Feature Requests</Link></h1>
                </div>
                <div className="main-container">
                 <FeatureRequest/>
                  <div className="content-container">
                    
                  </div>
                </div>
              </div>
            </div>
          );
      };
      
      
      export default GlobalComponent