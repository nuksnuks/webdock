import React from 'react';
import '/./src/styles/FeatureRequest.scss'
import PostCard from '../components/PostCard';
import Post from '../../../backend/Models/PostModel';

const FeatureRequest = () => {
  return (
    <>
      <div className="featurerequest">
        <div className="FeaturerequestsContent">
          <PostCard
            status={Post.status}
            title={Post.title}
            desc={Post.description}
            date={Post.createdAt}
            likes={Post.likeStatus.length}
            comments={Post.commentId.length}
          ></PostCard>
        </div>
      </div>
    </>
  );
};

export default FeatureRequest;
