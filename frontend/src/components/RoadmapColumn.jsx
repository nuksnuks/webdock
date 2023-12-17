import React from 'react';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';


const RoadmapColumn = ({status, posts}) => {
  const statusClass = {
    "Planned": "roadmapColumnPlanned",
    "In Progress": "roadmapColumnProgress",
    "Completed": "roadmapColumnCompleted"
  };

  
  const filteredPosts = posts.filter(item => item.status === status);

  return (
    <div className="roadmapColumn">
      <div className={statusClass[status]}>
        <div className="dot"></div>
        <h2>{status}</h2>
      </div>
      <div className="roadmapContent">
        {filteredPosts.map((item) => (
          <Link to={`/post/${item.postID}`} key={item.postID}>
          <PostCard 
            key={item.postID} 
            title={item.title} 
            desc={item.description} 
            date={item.createdAt} 
            likes={item.likes} 
            comments={item.comments}  
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoadmapColumn;
