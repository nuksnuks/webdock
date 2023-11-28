import React, { useState, useEffect } from 'react';
import '/./src/styles/post.scss';
import SinglePostCard from '../components/SinglePostCard';

const Post = () => {
  //const targetUserID = 13; //Target id 1 da vi ikke har SSO endnu
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    fetch('http://localhost:3001/post')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, []); 

  return (
    <>
      {posts.filter(item => item.postID === 13).map((item) => (
        <SinglePostCard 
          userID={item.userID}
          userImg={item.userImg}
          status={item.status}
          title={item.title}
          desc={item.description}
          date={item.date}
          likes={item.likes} />
      ))}
    </>
  );
};

export default Post;