import React from 'react';
import '/./src/styles/post.scss'

const SinglePostCard = ({ status, title, name, desc, date, likes, userImg }) => {
  return (
    <>
        <div className="singlePostCard">
            <div className="box">
                <div className="LikeFunc">
                    <img src="/./src/assets/heart.png" alt="heart icon" />
                    <h5><b>{likes}</b></h5>
                </div>
                {/* I infoPart bliver indholdet af post indsat dynamisk. tingene i tubor klammerne henter den info man fortæller den skal hente i jsondata.map, det hvor man bruger post cards. */}
                <div className="InfoPart">
                    <h2>{title}</h2>
                    <h5 className="statusBox">{status}</h5>
                    <p>{desc}</p>
                    <div className="createdUser">
                        <img src="/./src/assets/UserProfileImage.png" alt="" />
                        <p><b>{name}</b>  Posted about {date}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default SinglePostCard

