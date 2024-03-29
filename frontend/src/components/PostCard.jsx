import React, { useState, useEffect } from "react";
import '/./src/styles/PostCard.scss'
import '/./src/styles/Roadmap.scss'
import { FaHeart, FaRegHeart, FaRegCommentAlt } from "react-icons/fa";
import { useParams, useLocation } from "react-router-dom";




const PostCard = ({status, title, desc, date, likes, comments, userName, avatar }) => {
    const [liked, setLiked] = useState(false);
    const { id } = useParams("post/:id")
    const location = useLocation();

    useEffect(() => {
        fetch(`http://localhost:3001/post/${id}/like`)
            .then((liked) => console.log(JSON.stringify(liked)))
            .then(data => setLiked(liked));
    }, [title]);

    const handleLike = () => {
        setLiked(!liked);
        fetch(`http://localhost:3001/post/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ postId: id })
        });
    }
    console.log(liked)
  return (
    <>
        
        <div className="CardBox">
            <div className='heartInfo'>
                <div className="LikeFunc" onClick={handleLike}>
                    {liked ? <FaHeart className="filledHeart"/> : <FaRegHeart className="heart"/>}
                    <p>{likes}</p>
                </div>

                <div className="InfoPart">
                        {location.pathname !== '/' && <img src={avatar} alt={userName} loading="lazy"/>}
                    <div>
                          <h3>{title}</h3>
                          <div className={`dot dot-${status ? status.toLowerCase().replace(' ', '-') : ''}`}><b>{status}</b></div>
                        <i>{new Date(date).toLocaleDateString()}</i>
                        <p className="userName">{userName}</p>
                        <p>{desc}</p>
                        
                    </div>
                    
                </div>
            </div>

             {location.pathname !== `/post/${id}` && (
                    <div className="CommentNum">
                        <FaRegCommentAlt />
                        <p>{comments}</p>
                    </div>
                )}
        </div>
    </>
  )
}

export default PostCard