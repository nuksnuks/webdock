import React from 'react'
import  '/./src/styles/Roadmap.scss'
import PostCard from '../components/PostCard'

const Roadmap = () => {
    return (
    <>
      <div className="roadmap">
        <div className="roadmapColumn">
          <div className="roadmapColumnPlanned">
              <div className="dot"></div>
              <h2>Planned</h2>
          </div>
          <div className="roadmapContent">
            {/* Her indsætter vi vores PostCard, og fortæller den hvilke værdier den skal sætte ind, hvor den skal finde de her værdier og hvor de skal sættes ind.  */}
            <PostCard title={Post.title} desc={Post.description} date={Post.createdAt} likes={Post.likeStatus.length} comments={Post.commentId.length} ></PostCard>
          </div>
        </div>
        <div className="roadmapColumn">
          <div className="roadmapColumnProgress"> In Progress </div>
          <div className="roadmapContent">
            {/* Her indsætter vi vores PostCard, og fortæller den hvilke værdier den skal sætte ind, hvor den skal finde de her værdier og hvor de skal sættes ind.  */}
            <PostCard title={Post.title} desc={Post.description} date={Post.createdAt} likes={Post.likeStatus.length} comments={Post.commentId.length} ></PostCard>
          </div>
        </div>
        <div className="roadmapColumn">
          <div className="roadmapColumnCompleted"> Completed </div>
          <div className="roadmapContent">
            {/* Her indsætter vi vores PostCard, og fortæller den hvilke værdier den skal sætte ind, hvor den skal finde de her værdier og hvor de skal sættes ind.  */}
            <PostCard title={Post.title} desc={Post.description} date={Post.createdAt} likes={Post.likeStatus.length} comments={Post.commentId.length} ></PostCard>
          </div>
        </div>
      </div>
    </>
  )
}


export default Roadmap