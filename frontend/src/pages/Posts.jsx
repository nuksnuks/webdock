import React from 'react';
import '/./src/styles/post.scss';
import SinglePostCard from '../components/SinglePostCard';
import jsonData from '../assets/data/dummyData.json';

const Post = () => {
  const targetUserID = "1";

  return (
    <>
      {jsonData.filter(item => item.userID === targetUserID).map((item) => (
        <SinglePostCard 
          userID={item.userID}
          userImg={item.userImg}
          status={item.status}
          title={item.title}
          desc={item.desc}
          date={item.date}
          likes={item.likes.length} />
      ))}
    </>
  );
};

export default Post;