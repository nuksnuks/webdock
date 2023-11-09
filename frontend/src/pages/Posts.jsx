// Importer useState og useEffect for at kunne oprette komponenter så vi kan bruge de her hooks
import React, { useEffect, useState } from 'react';
import '/./src/styles/post.scss'; // Importer SCSS-filen


//Selve listen over de posts bliver defineret her i en arrow
const PostList = () => {
  //Bruger her hooks usestate
  // Posts indeholder et array af postdata og setPosts er en funktion som bruges til at opdatere posts
  const [posts, setPosts] = useState([]);
  //Show dummydata (Skal laves om når vi har databasen) viser dataen og setDD viser det
  const [showDummyData, setShowDummyData] = useState(true);


  //useEffect udfører API anmodning
  useEffect(() => {
    //Fetch henter til den url vi får fra webdock.
    fetch('din_api_endpoint_url')
      .then((response) => response.json())
      .then((data) => {
        //behandling af responsdataen og indlæses her i posts ved at kalde setPosts
        setPosts(data);
        setShowDummyData(false); // Skjul dummydata, når de faktiske data er tilgængelige
      
        //Generer og indstiller dummy brugernavne
        const dummyUsernames = ["UserA", "UserB", "UserC"]; // Erstat med dine egne dummy brugernavne
      setUsernames(dummyUsernames);
      })
      .catch((error) => {
        console.error('Fejl ved hentning af postdata:', error);
      });
  }, []); // Tom dependency array, køres ved databsens opbygning

//Her render vi komponentets indhold baseret på vores Dummy Data
  return (
    <div className='post-list'>
      <h2>Activity Feed</h2> {showDummyData ? (
        <div className='post-container'>
          <ul>
            {[1, 2, 3].map((id) => (
              <li key={id} className='post-item'>
              <img src="/src/assets/avatar.jpg" alt="" className="user-image"/>
              Placeholder Post {id}</li>
            ))}
          </ul>
        </div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
