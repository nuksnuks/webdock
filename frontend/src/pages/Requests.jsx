import React, { useEffect, useState } from "react";
import '/./src/styles/featurerequest.scss'; // Importer SCSS-filen
import { FiHeart } from "react-icons/fi";

function Requests() {
  const [featureRequests, setFeatureRequests] = useState([]);

  useEffect(() => {
    // Replace 'your_api_endpoint_url' with the actual API endpoint URL
    fetch("http://localhost:3066/users")
      .then((response) => response.json())
      .then((data) => {
        // Update featureRequests state with fetched data
        setFeatureRequests(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <div className="main-feature-container">
      <div className="left-feature-section">
        {/* -----feature-item----- */}
        {featureRequests.map((request) => (
          <div key={request.id} className="feature-request-item">
            <div className="top-section-feature">
              <span className="status-feature">{request.status}</span>
              <span className="count-feature">{request.count}</span>
            </div>
            <div className="main-content-feature">
              <div className="vote-feature">
                <span className="rate-feature">
                  <FiHeart className="fiheart-icon-feature" />
                </span>
                <span className="vote-count-feature">{request.likes}</span>
              </div>

              <div className="right-content-feature">
                <div className="top-section-feature" id="top-feature">
                  <span className="status-feature">{request.status}</span>
                  <span className="count-feature">{request.count}</span>
                </div>
                <div className="bottom-section-feature">
                  <h3 className="title-feature">{request.title}</h3>
                  <p className="description-feature">{request.description}</p>
                </div>
              </div>
            </div>
            <div className="footer-feature">
              <p>{`Created by ${request.createdBy}, ${request.createdDate}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Requests;
