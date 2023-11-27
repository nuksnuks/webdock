import React from 'react';
import '/./src/styles/post.scss';
import SinglePostCard from '../components/SinglePostCard';
import jsonData from '../assets/data/dummyData.json';
import BackgroundBox from './BackgroundBox';



const Post = () => {
  const targetUserID = "1"; // Her er selve id'et det er dog statisk lige nu, så for at hente det id for den specifikke post skal der laves en if function

  return (
    <>
      {jsonData.filter(item => item.userID === targetUserID).map((item) => (
        //.filter henter et specifikt array her hvor .map henter hele json array
        <BackgroundBox // Henter global component
        contentPlace = { //contentPlace er fra main i BackgroundBox(global Design)
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