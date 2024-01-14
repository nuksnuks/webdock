import React, { useState } from "react";
import '/./src/styles/CommentCreate.scss';
import { FaHeart, FaRegHeart,  FaReply , FaEdit  } from "react-icons/fa";
import { useParams } from "react-router-dom";

const CreateComment = () => {
    const [comment, setComment] = useState("");

    const {id} = useParams("post/:id")
    
    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const postcomment = {
            userID: localStorage.getItem("id"),
            postID: id,
            description: comment,
        }
        console.log(postcomment);
        
        fetch(`http://localhost:3001/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postcomment),
        })
        .then(response => {
            if (response.ok) {
                return response.json({id});
                
            } else {
                console.log('Failed')
            }
        })
        .catch(error => {
            console.log('DARKNESS CONSUMES YOU', error.message);
        });
        
        location.reload();
        
    };

    return (
       <form className="commentBox" onSubmit={handleSubmit}>
            <img 
                className="commentImg" 
                src={localStorage.getItem("avatar")} 
                alt="Profile Image" 
            />
            <input
                className="commentInput"
                type="text"
                id="comment-input"
                name="comment-input"
                value={comment}
                onChange={handleChange}
                placeholder="What do you think?"
            />
            <button type="submit">Comment</button>
        </form>

    );
};

export default CreateComment;