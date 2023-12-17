import React, { useState, useEffect } from 'react';
import '../styles/FeatureRequest.scss';
import PostCard from '../components/PostCard';
import { Link, useParams } from 'react-router-dom';

const FeatureRequest = () => {

  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('All'); 
  const [users, setUsers] = useState([]); 
  

  useEffect(() => {

    fetch('http://localhost:3001/post')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log('Error fetching data:', error));
  
  }, []); 

  useEffect(() => {
    
    fetch(`http://localhost:3001/users/`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, [id]);


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
.map((post) => {
  const user = users.find(user => user.userID === post.userID);
  return (
    <Link to={`/post/${post.postID}`} key={post.postID}>
      {post && (
      <PostCard
        key={post.postID} 
        status={post.status}
        title={post.title}
        desc={post.description}
        date={post.createdAt}
        userName={user ? user.name : ''}
      />)}
    </Link>
  );
})}
      
    </div>   
    <button className='newRequest'>
      <Link to="/CreateRequest">New Request</Link>
    </button>
    
    </>
    
  ); 
};

export default FeatureRequest;
