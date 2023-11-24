import React from 'react';
import '/./src/styles/FeatureRequest.scss';
import PostCard from '../components/PostCard';
import jsonData from '../assets/data/dummyData.json';

const FeatureRequest = () => {
  return (
    <>
      <div className="featurerequest">
        <div className="FeaturerequestsContent">
          {jsonData.map((item) => (
            <PostCard key={item.id} status={item.status} title={item.title} desc={item.desc} date={item.date} likes={item.likes.length} comments={item.comments.length} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureRequest;
