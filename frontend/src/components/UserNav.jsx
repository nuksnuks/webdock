import { Link } from 'react-router-dom';
import '/./src/styles/MainNavbar.scss';
import { decodeToken } from 'react-jwt';
import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import Modal from 'react-modal';


const UserNav = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    Modal.setAppElement('#root'); // Set the app element for this modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery);

    try {
      const response = await fetch(`http://localhost:3001/post/search?query=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
      openModal(); // Open the modal when there are search results
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('ssoToken') === null || localStorage.getItem('ssoToken') === undefined) {
      const params = new URLSearchParams(window.location.search);
      const jwt = params.get('ssoToken');
      const decodedToken = decodeToken(jwt);

      localStorage.setItem('ssoToken', jwt);
      localStorage.setItem('avatar', decodedToken.avatarUrl);
      localStorage.setItem('user', decodedToken.name);
      localStorage.setItem('email', decodedToken.email);
      localStorage.setItem('id', decodedToken.id);
    }
  }, []);

  return (
    <nav>
      <Link to="/">
        <img src=".\src\assets\webdock-logo-positiv 3.png" alt="" />
      </Link>
      <div className="search-form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Search Results"
>
<h2>Search Results</h2>
{searchResults.length > 0 ? (
  <div className="search-results">
    {searchResults.map((post) => (
      <Link to={`/post/${post.postID}`} key={post.postID}>
        {/* Wrap PostCard in Link */}
        <PostCard
          title={post.title}
          desc={post.description}
          likes={post.likes}
          postId={post.postID} // Pass postID as a prop
        />
      </Link>
    ))}
  </div>
) : (
  <p>No results found.</p>
)}
<button onClick={closeModal}>Close</button>
      </Modal>
      <div>
        <button>
          <a href="/./settings">Settings</a>
        </button>
        <button
          onClick={() => {
            localStorage.removeItem('ssoToken');
            localStorage.removeItem('user');
            localStorage.removeItem('id');
            localStorage.removeItem('avatar');
            localStorage.removeItem('email');
          }}
        >
          <a href="http://localhost:5173/">Log Out</a>
        </button>
      </div>
    </nav>
  );
};

export default UserNav;
