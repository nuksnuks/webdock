import React from 'react'
import '/./src/styles/CommentCard.scss'


const CommentCard = ({ userName, role, likes, comments }) => {
    return (
      <>
        <div className="commentCard">
            <div className="box">
                <div className="userInfo">
                    <img src="/./src/assets/UserProfileImage.png" alt="Profile Image" />
                    <div className="user">
                        <h2> {userName} </h2>
                        <h5> {role} </h5>
                    </div>
                </div>
                <div className="comment">
                    <p> {comments} </p>
                </div>
                <div className="commentActions">
                    <h5><img src="/./src/assets/replyIcon.png" alt="Reply Icon" /> Reply </h5>
                    <h5><img src="/./src/assets/editIcon.png" alt="Edit Icon" /> Edit </h5>
                    <h5><img src="/./src/assets/deleteIcon.png" alt="Delete Icon" /> Delete </h5>
                    <h5><img src="/./src/assets/heart.png" alt="Heart Icon" /> {likes} Like </h5>
                </div>
            </div>
        </div>
      </>
    )
  }
export default CommentCard