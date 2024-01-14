import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import SearchResults from './SearchResults';

const UserNav = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
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
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Response data:', data);
      setSearchResults(data.searchResults);
      openModal();
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
        <picture>
          <source media="(max-width: 992px)" srcset="/src/assets/webdock-logo-facebook.png"></source>
          <img src="/src/assets/webdock-logo-positiv 3.png" alt="logo" />
        </picture>
      </Link>
      <div className="search-form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search posts..."
            id="search"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>Search Results</DialogTitle>
        <DialogContent>
          {searchResults.length > 0 ? (
            <SearchResults searchResults={searchResults} />
          ) : (
            <DialogContentText>No results found.</DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div className="buttons">
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
