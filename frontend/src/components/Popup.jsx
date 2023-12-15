import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  // your styles
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(''); // add a state for the status

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/post/${ id }`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
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

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
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
              <input type="text" value={title} onChange={e => setStatus(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
};