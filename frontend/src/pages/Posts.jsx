import React, { useEffect, useState } from 'react';
import '/./src/styles/post.scss'; // Importer SCSS-filen

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [showDummyData, setShowDummyData] = useState(true);

  useEffect(() => {
    // Udfør asynkron API-anmodning her
    fetch('din_api_endpoint_url')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setShowDummyData(false); // Skjul dummydata, når de faktiske data er tilgængelige
      })
      .catch((error) => {
        console.error('Fejl ved hentning af postdata:', error);
      });
  }, []); // Tømme afhængighedsarray, så dette kun kører ved montering

  return (
    <div className='post-list'>
      <h2>Post Oversigt</h2>
      {showDummyData ? (
        <ul>
          {[1, 2, 3].map((id) => (
            <li key={id}>Placeholder Post {id}</li>
          ))}
        </ul>
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
