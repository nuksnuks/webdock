import React from 'react';
import '/./src/styles/post.scss';
import SinglePostCard from '../components/SinglePostCard';
import jsonData from '../assets/data/dummyData.json';
import BackgroundBox from './BackgroundBox';


const Post = () => {
  const targetUserID = "1"; // Change this to the userID you want to target

  return (
    <>
      {jsonData.filter(item => item.userID === targetUserID).map((item) => (
        //.filter henter et specifikt array her hvor .map henter hele json array
        <BackgroundBox
        contentPlace = {
          <SinglePostCard 
            userID={item.userID}
            userImg={item.userImg}
            status={item.status}
            title={item.title}
            desc={item.desc}
            date={item.date}
            likes={item.likes.length} />
        }
        />
      ))}
    </>
  );
};

export default Post