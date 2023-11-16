import React from 'react';
import '/./src/styles/Roadmap.scss'

const PostCard = ({ title, desc, date, likes, comments }) => {
  return (
    <>
        <div className="CardBox">
            <div className="LikeFunc">
                <img src="" alt="" />
                <p>{likes}</p>
            </div>

            <div className="InfoPart">
                <h4 numberOfLines={1}>{title}</h4>
                <h6>{desc}</h6>
                <p>{date}</p>
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