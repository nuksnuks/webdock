import React from 'react';
import '/./src/styles/post.scss'

const SinglePostCard = ({ status, title, desc, date, likes, userImg }) => {
  return (
    <>
        <div className="singlePostCard">
            <div className="box">
                <div className="LikeFunc">
                    <img src="/./src/assets/heart.png" alt="heart icon" />
                    <h5><b>{likes}</b></h5>
                <img src="/./src/assets/User Account.png" alt="" />  
                </div>
                {/* I infoPart bliver indholdet af post indsat dynamisk. tingene i tubor klammerne henter den info man fortæller den skal hente i jsondata.map, det hvor man bruger post cards. */}
                <div className="InfoPart">
            <h2 numberoflines={1}>{title}</h2>
            <h5 className="statusBox">{status}</h5>
                    <p>{desc}</p>
                    <h5><b>{date}</b></h5>
                </div>
            </div>

        </div>
    </>
  )
}

export default SinglePostCard