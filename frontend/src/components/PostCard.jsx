import React from 'react';
import '/./src/styles/PostCard.scss'
import { FaHeart, FaRegHeart, FaRegCommentAlt } from "react-icons/fa";


const PostCard = ({ title, desc, date, likes, comments }) => {
  return (
    <>
        <div className="CardBox">
            <div className='heartInfo'>
                <div className="LikeFunc">
                    <FaHeart />
                    <FaRegHeart />
                    <p>{likes}</p>
                </div>

                <div className="InfoPart">
                    <h3>{title}</h3>
                    <h6>{desc}</h6>
                    <p>{date}</p>
                </div>
            </div>

            <div className="CommentNum">
                <FaRegCommentAlt />
                <p>{comments}</p>
            </div>
        </div>
    </>
  )
}

export default PostCard