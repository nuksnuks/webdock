import React, { useState, useEffect } from 'react';
import '/./src/styles/PostCard.scss';

import CreateComment from '../components/CreateComment';
import CommentCard from '../components/CommentCard';
import PostCard from '../components/PostCard';
import { useParams } from 'react-router-dom';

const Post = () => {
  
  const [post, setPost] = useState(null); 
  const [comments, setComments] = useState([]); // 

  const { id } = useParams('post/');

  useEffect(() => {
   
    fetch(`http://localhost:3001/post/${ id }`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, [id]);

  useEffect(() => {
    
    fetch(`http://localhost:3001/comments/`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, [id]);

  console.log(comments)

  return (
    <>
        {post && (
          <PostCard 
            userID={post.userID}
            userImg={post.avatarURL}
            status={post.status}
            title={post.title}
            desc={post.description}
            date={post.createdAt}
            likes={post.likes} />
        )}
      <CreateComment/>
        {comments.length > 0 && ( 
          comments.filter(comment => comment.postID === post.postID) 
          .map(comment => ( 
            <CommentCard key={comment.commentID} comment={comment.description}  /> 
          ))
        )}
    </>
  );
};

export default Post;
