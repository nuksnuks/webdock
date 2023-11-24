import React from 'react';
import '/./src/styles/post.scss';
import SinglePostCard from '../components/SinglePostCard';
import jsonData from '../assets/data/dummyData.json';


const Post = () => {
  
  return (
    <>
      

        {jsonData.map((item) => (

            <div className="request">
              <SinglePostCard 
                userID={item.userID}
                userImg={item.userImg}
                status={item.status}
                title={item.title}
                desc={item.desc}
                date={item.date}
                likes={item.likes.length} />
            </div>
            ))}
        
    
    
    
    
    </>
  );
};

export default Post