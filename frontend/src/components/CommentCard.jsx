import React, { useState, useEffect } from 'react';
import '/./src/styles/CommentCard.scss'
import { FaHeart, FaRegHeart,  FaReply , FaEdit  } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const CommentCard = ({ userName, likes, description, avatar, commentId }) => {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        // Fetch the initial state of the like from the database when the component mounts
        fetch(`http://localhost:3001/comments/${commentId}`)
            .then(response => response.json())
            .then(data => setIsLiked(data.likedComment));
    }, [commentId]);

    const handleLike = () => {
        setIsLiked(!isLiked);

        // Send a PUT request to the server when the like button is clicked
        fetch(`http://localhost:3001/comments/${commentId}/like`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ likedComment: !isLiked }),
        });
    };
  
  return (
      <>
        <div className="commentCard">
            <div className="box">
                <div className="userInfo">
              <div className='heart-button' onClick={handleLike}>
            {isLiked ? <FaHeart className="filledHeart"/> : <FaRegHeart className="heart"/>}
            
        </div>   
              <img src={avatar} alt="Profile Image" loading="lazy" />
                    <div className="user">
                          <h3> {userName} </h3>
                          <p>{description}</p>
                    </div>
                </div>
                
                <div className="commentActions">
                   <p> <FaReply /> Reply </p>
                    <p> <FaEdit /> Edit </p>
                    <p><MdDeleteForever /> Delete </p>
                    
                </div>
            </div>
        </div>
      </>
    )
  };
export default CommentCard