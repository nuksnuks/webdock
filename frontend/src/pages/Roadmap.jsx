import React from 'react'
import  '/./src/styles/Roadmap.scss'
import PostCard from '../components/PostCard'
import jsonData from '../assets/data/dummyData.json'

const Roadmap = () =>{ 
    return (
    <>
      <div className="roadmap">
        <div className="roadmapColumn">
          <div className="roadmapColumnPlanned">
            <div className="dot"/>
            <h1>Planned</h1> 
          </div>
          <div className="roadmapContent">
            {/* Her sætter vi post card op. Først mapper vi vores data i post card. Følgende kode er lavet med dummy data, skal rettes så data hentes fra database senere. */}
            {jsonData.map((item) => (
              <PostCard key={item.id} title={item.title} desc={item.desc} date={item.date} likes={item.likes.length} comments={item.comments.length} />
            ))}
          </div>
        </div>
        <div className="roadmapColumn">
          <div className="roadmapColumnProgress">
            <div className="dot"/>
            <h1>In Progress</h1> 
          </div>
          <div className="roadmapContent">
            {jsonData.map((item) => (
              <PostCard key={item.id} title={item.title} desc={item.desc} date={item.date} likes={item.likes.length} comments={item.comments.length} />
            ))}
          </div>
        </div>
        <div className="roadmapColumn">
          <div className="roadmapColumnCompleted">
            <div className="dot"/>
            <h1>Completed</h1>
          </div>
          <div className="roadmapContent">
            {jsonData.map((item) => (
              <PostCard key={item.id} title={item.title} desc={item.desc} date={item.date} likes={item.likes.length} comments={item.comments.length} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Roadmap
