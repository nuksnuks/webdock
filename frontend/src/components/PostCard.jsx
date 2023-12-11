import React from 'react';
import '/./src/styles/PostCard.scss'
import { FaHeart, FaRegHeart, FaRegCommentAlt } from "react-icons/fa";



const PostCard = ({status, title, desc, date, likes, comments, author, avatar }) => {
    
  return (
    <>
        
        <div className="CardBox">
            <div className='heartInfo'>
                <div className="LikeFunc">
                    <FaHeart className="filledHeart"/>
                    <FaRegHeart className="heart"/>
                    <p>{likes}</p>
                </div>

                <div className="InfoPart">
                    <img src={avatar} alt={author} />
                    <div>
                        <h3>{title}</h3>
                        <h6>{desc}</h6>
                        <p>{date}</p>
                        <p>{author}</p>
                        <p>{status}</p>
                    </div>
                    
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