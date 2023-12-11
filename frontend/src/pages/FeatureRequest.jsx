import React, { useState, useEffect } from 'react';
import '../styles/FeatureRequest.scss';
import PostCard from '../components/PostCard';
import { Link, useParams } from 'react-router-dom';

const FeatureRequest = () => {

  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('All'); 

  useEffect(() => {

    fetch('http://localhost:3001/post')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log('Error fetching data:', error));
  
  }, []); 


  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
    <h2>{filter}</h2>
    <div className='filter'>
      <label htmlFor="filter">Status</label>
      <select name="filter" id="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Under Review">Under Review</option>
        <option value="Planned">Planned</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Closed">Closed</option>
      </select>
    </div>
    <div className='requests'>
    

        
        {posts.filter(item => filter === 'All' || item.status === filter) 
        .map((item) => (
            
            <Link to={`/post/${item.postID}`} key={item.postID}>
              <PostCard
                key={item.postID} 
                status={item.status}
                title={item.title}
                desc={item.description}
                date={item.createdAt}
                author={item.name}
              />
            </Link>
          
        ))}
      
    </div>   
    <button className='newRequest'>
      <Link to="/CreateRequest">New Request</Link>
    </button>
    
    </>
    
  ); 
};

export default FeatureRequest;
