import React from 'react';
import '/./src/styles/PostCard.scss'

const PostCard = ({ title, desc, date, likes, comments }) => {
  return (
    <>
        <div className="CardBox">
            <div className="LikeFunc">
                <img src="" alt="" />
                <p>{likes}</p>
            </div>

            <div className="InfoPart">
                <h3 numberOfLines={1}>{title}</h3>
                <h6 numberOfLines={1}>{desc}</h6>
                <p numberOfLines={1}>{date}</p>
            </div>

            <div className="CommentNum">
                <img src="" alt="" />
                <p>{comments}</p>
            </div>
        </div>
    </>
  )
}

export default PostCard