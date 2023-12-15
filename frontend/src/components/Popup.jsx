import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import '/./src/styles/globals.scss';

const style = {
  // your styles
};

export default function BasicModal({ id, title: initialTitle, description: initialDescription, status: initialStatus }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [status, setStatus] = useState(initialStatus);  // Add this line

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = {id, title, description, status};  // Include status here
    console.log(postData)

    try {
      const response = await fetch(`http://localhost:3001/posts/${ id }`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      const data = await response.json();

      if (data) {
        alert('Post updated successfully');
      } else {
        alert('Post not found');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault(); // Prevents delete from running with update

    try {
      const response = await fetch(`http://localhost:3001/posts/${ id }`, {
        method: 'DELETE',
      });

      const data = await response.json();
      console.log(data);  // Log the response data

      if (data) {
        alert('Post deleted successfully');
      } else {
        alert('Post not found');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  return (
    <div>
      <button className='EditButton' onClick={handleOpen}>Edit post</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
              Description:
              <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            </label>
            <label>  {/* Add this block */}
              Status:
              <select value={status} onChange={e => setStatus(e.target.value)}>
                <option value="Under Review">Under Review</option>
                <option value="Planned">Planned</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Closed">Closed</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
            <button type="button" onClick={handleDelete}>Delete this post</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};