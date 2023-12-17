import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';

const SearchResults = ({ searchResults }) => {
  return (
    <div className="search-results">
      {searchResults.map((post) => (
        <div key={post.postID}>
          <Link to={`/post/${post.postID}`}>
            <PostCard
              title={post.title}
              desc={post.description}
              date={post.date}
              likes={post.likes}
              comments={post.comments}
              userName={post.userName}
              avatar={post.avatar}
              status={post.status}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
