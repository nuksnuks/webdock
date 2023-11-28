import React from 'react'
import  '/./src/styles/Roadmap.scss'
import PostCard from '../components/PostCard'
import jsondata from '../assets/data/dummyData.json';

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
            {/* Her indsætter vi vores jsondataCard, og fortæller den hvilke værdier den skal sætte ind, hvor den skal finde de her værdier og hvor de skal sættes ind.  */}
            {jsondata.filter(item => item.status === "planned").map((item) => (
              <PostCard title={jsondata.title} desc={jsondata.description} date={jsondata.createdAt} likes={jsondata.likeStatus.length} comments={jsondata.commentId.length} ></PostCard>
            ))}
          </div>
        </div>
        <div className="roadmapColumn">
          <div className="roadmapColumnProgress">
              <div className="dot"></div>
              <h2>In Progress</h2>
          </div>
          <div className="roadmapContent">
            {/* Her indsætter vi vores jsondataCard, og fortæller den hvilke værdier den skal sætte ind, hvor den skal finde de her værdier og hvor de skal sættes ind.  */}
            {jsondata.filter(item=> item.status === "progress").map((item) => (
              <PostCard title={jsondata.title} desc={jsondata.description} date={jsondata.createdAt} likes={jsondata.likeStatus.length} comments={jsondata.commentId.length} ></PostCard>
            ))}
          </div>
        </div>
        <div className="roadmapColumn">
            <div className="roadmapColumnCompleted">
              <div className="dot"></div>
              <h2>Completed</h2></div>
          <div className="roadmapContent">
            {/* Her indsætter vi vores jsondataCard, og fortæller den hvilke værdier den skal sætte ind, hvor den skal finde de her værdier og hvor de skal sættes ind.  */}
            {jsondata.filter(item => item.status === "completed").map((item) => (
              <PostCard title={jsondata.title} desc={jsondata.description} date={jsondata.createdAt} likes={jsondata.likeStatus.length} comments={jsondata.commentId.length} ></PostCard>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Roadmap