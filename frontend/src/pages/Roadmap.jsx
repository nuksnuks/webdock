import React from 'react'
import  '/./src/styles/Roadmap.scss'

const Roadmap = () => {
    console.log("1")
    return (
    <>
      <div className="roadmap">
        <div className="roadmapColumn">
          <div className="roadmapColumnPlanned"> Planned </div>
          <div className="roadmapContent">
          </div>
        </div>
        <div className="roadmapColumn">
          <div className="roadmapColumnProgress"> In Progress </div>
          <div className="roadmapContent">
          </div>
        </div>
        <div className="roadmapColumn">
          <div className="roadmapColumnCompleted"> Completed </div>
          <div className="roadmapContent">
          </div>
        </div>
      </div>
    </>
  )
}

export default Roadmap