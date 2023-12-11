import React, { useState, useEffect } from 'react';
import '../styles/FeatureRequest.scss';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';


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
          <Link to={`/post/${item.postID}`} key={item.postID} style={{ textDecoration: 'none', color: 'inherit' }}>
          <PostCard
          status={item.status}
          title={item.title}
            desc={item.description}
            date={item.date}
            likes={item.likes}
            comments={item.comments}
          />
        </Link>
        ))}
      </div>
      <button className='newRequest'><Link to="/CreateFeatureRequest">New Request</Link></button>
    </div>
    
    
  ); 
};

export default FeatureRequest;