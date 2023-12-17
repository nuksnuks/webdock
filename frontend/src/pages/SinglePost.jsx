import React, { useState, useEffect } from 'react';
import '/./src/styles/PostCard.scss';
import '/./src/styles/globals.scss';

import CreateComment from '../components/CreateComment';
import CommentCard from '../components/CommentCard';
import PostCard from '../components/PostCard';
import { useParams } from 'react-router-dom';
import BasicModal from '../components/Popup';

const Post = () => {
  
  const [post, setPost] = useState(null); 
  const [comments, setComments] = useState([]); 
  const [users, setUsers] = useState([]); 
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

  useEffect(() => {
    
    fetch(`http://localhost:3001/users/`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, [id]);

  const user = post && users.find(user => user.userID === post.userID);
  const loggedInUser = users.find(user => user.email === localStorage.getItem("email"));
  const isAdmin = loggedInUser && loggedInUser.role === 'admin';
  const isLoggedIn = Boolean(localStorage.getItem("ssoToken"));

  return (
    <>
        {isAdmin && isLoggedIn && post ? <BasicModal id={post.postID} title={post.title} description={post.description} /> : <></>}
        {post && (
          <PostCard 
            userName={user ? user.name : 'Unknown User'}
            userID={post.userID}
            avatar={user.avatarUrl}
            status={post.status}
            title={post.title}
            desc={post.description}
            date={post.createdAt}
            likes={post.likes} 
            />
        )}
      <CreateComment/>
      {comments.length > 0 && ( 
        comments.filter(comment => post && comment.postID === post.postID).map(comment => { 
          const commentUser = users.find(user => user.userID === comment.userID);
          return (
            <CommentCard
              key={comment.commentID}
              userName={commentUser ? commentUser.name : 'Unknown User'}
              likes={comment.commentLikeAmount}
              description={comment.description}
            />
          );
        })
      )}
  </>
  );
};

export default Post;
