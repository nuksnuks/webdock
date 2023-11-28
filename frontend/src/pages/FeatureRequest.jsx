import React, { useState, useEffect } from 'react';
import '../styles/FeatureRequest.scss';
import PostCard from '../components/PostCard';

const FeatureRequest = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    fetch('http://localhost:3001/post')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, []); 

  return (
    <div className="featurerequest">
      <div className="FeaturerequestsContent">
        {posts.map((item) => (
          <PostCard
            key={item.postID}
            status={item.status}
            title={item.title}
            desc={item.description}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureRequest;