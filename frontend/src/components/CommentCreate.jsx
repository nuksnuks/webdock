import React, { useState } from "react";
import '/./src/styles/CommentCreate.scss';

const commentCreate = () => {
    const [comment, setComment] = useState("");
    
    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        //const userID = //Logged in userID
        //const postID = //ID of post being commented on
        
        const postcomment = {
            //userID: userID,
            //postID: postID,
            description: comment
        }
        console.log(postcomment);
        
        fetch('http://localhost:3001/Comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postcomment),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('Failed')
                }
            })
            .then(data => {
                console.log('Det virker GGWP');
                setComment("");
            })
            .catch(error => {
                console.log('DARKNESS CONSUMES YOU', error.message);
            });
    };

    return (
       <form className="commentBox" onSubmit={handleSubmit}>
            <img className="commentImg" src="/./src/assets/UserProfileImage.png" alt="Profile Image" />
            <input
                className="commentInput"
                type="text"
                value={comment}
                onChange={handleChange}
                placeholder="What do you think?"
            />
            <button type="submit">Comment</button>
        </form>
    
    );
};

export default commentCreate;