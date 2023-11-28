import React, {useState, useEffect} from 'react'
import  '/./src/styles/Roadmap.scss'
import PostCard from '../components/PostCard'
import { Link } from 'react-router-dom';

const Roadmap = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    fetch('http://localhost:3001/post')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, []); 
    return (
    <>
      <div className="roadmap">
        <div className="roadmapColumn">
          <div className="roadmapColumnPlanned">
              <div className="dot"></div>
              <h2>Planned</h2>
          </div>
          <div className="roadmapContent">
            {/* Her indsætter vi vores data fra database tabellen post, og fortæller den hvilke værdier den skal sætte ind, hvor den skal finde de her værdier og hvor de skal sættes ind.  */}
            {posts.filter(item => item.status === "Planned").map((item) => (
              <PostCard key={item.postID} title={item.title} desc={item.description} date={item.date} likes={item.likes} comments={item.comments} ></PostCard>
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
            {posts.filter(item => item.status === "Under Review").map((item) => (
              <PostCard key={item.postID} title={item.title} desc={item.description} date={item.date} likes={item.likes} comments={item.comments} ></PostCard>
            ))}
          </div>
        </div>
        <div className="roadmapColumn">
            <div className="roadmapColumnCompleted">
              <div className="dot"></div>
              <h2>Completed</h2></div>
          <div className="roadmapContent">
            {/* Her indsætter vi vores jsondataCard, og fortæller den hvilke værdier den skal sætte ind, hvor den skal finde de her værdier og hvor de skal sættes ind.  */}
            {posts.filter(item => item.status === "Under Review").map((item) => (
              <PostCard key={item.postID} title={item.title} desc={item.description} date={item.date} likes={item.likes} comments={item.comments} ></PostCard>
            ))}
          </div>
        </div>
      </div>
      
      <button className='newRequest'><Link to="/CreateFeatureRequest">New Request</Link></button>
    
    </>
  )
}

export default Roadmap