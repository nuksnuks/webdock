import React from 'react'
import '/./src/styles/CommentCard.scss'
import { FaHeart, FaRegHeart,  FaReply , FaEdit  } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const CommentCard = ({ userName, role, likes, description }) => {
    return (
      <>
        <div className="commentCard">
            <div className="box">
                <div className="userInfo">
                    <img src="/./src/assets/UserProfileImage.png" alt="Profile Image" />
                    <div className="user">
                        <h2> {userName} </h2>
                    </div>
                </div>
                <div className="comment">
                   <p>{description}</p>
                </div>
                <div className="commentActions">
                    <FaReply />
                    <FaEdit />
                    <MdDeleteForever />
                    <div className='heart-button'>
                      <FaHeart className="filledHeart"/>
                      <FaRegHeart className="heart"/>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  };
export default CommentCard