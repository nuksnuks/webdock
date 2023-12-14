import React, { useState, useEffect } from "react";
import '/./src/styles/PostCard.scss'
import { FaHeart, FaRegHeart, FaRegCommentAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";




const PostCard = ({status, title, desc, date, likes, comments, userName, avatar }) => {
    const [liked, setLiked] = useState(false);
    const {id} = useParams("post/:id")

    useEffect(() => {
        fetch(`http://localhost:3001/post/${id}`)
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
                    <img src={avatar} alt={userName} />
                    <div>
                        <h3>{title}</h3>
                        <h6>{desc}</h6>
                        <p>{date}</p>
                        <p>{userName}</p>
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