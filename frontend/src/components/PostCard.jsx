import React from 'react';
import '/./src/styles/Roadmap.scss'

const PostCard = ({ status, title, desc, date, likes, comments, userID }) => {
  return (
    <>
        <div className="postCard">
            <div className="box">
                <div className="LikeFunc">
                    <img src="/./src/assets/heart.png" alt="heart icon" />
                    <h5><b>{likes}</b></h5>
                </div>
                {/* I infoPart bliver indholdet af post indsat dynamisk. tingene i tubor klammerne henter den info man fortæller den skal hente i jsondata.map, det hvor man bruger post cards. */}
                <div className="InfoPart">
                    <h5 className="statusBox">{status}</h5>
                    <h2 numberOfLines={1}>{title}</h2>
                    <p>{desc}</p>
                    <h5><b>{date}</b></h5>
                </div>
            </div>
            <div className="CommentNum">
                <img src="/./src/assets/Comments.png" alt="" />
                <h5>{comments}</h5>
            </div>
        </div>
    </>
  )
}

export default PostCard