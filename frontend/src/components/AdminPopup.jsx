import React, { useState, useEffect } from "react";
import '/./src/styles/Roadmap.scss';
import '/./src/styles/globals.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 860,
  bgcolor: 'background.paper',
  border: '2px solid $grey1',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function AdminModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [users, setUsers] = useState([]); 
  useEffect(() => {
    
    fetch(`http://localhost:3001/users/`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log('Error fetching data:', error));
  });

  return (
    <div>
      <button className='adminBtn' onClick={handleOpen}>Manage Admins</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="changeList">
            <div className="adminList">
              <ul>
                <h1>Admins</h1>
                {users.filter(users => users.role === 'admin').map(users => {
                  return <li key={(`users-${(users.usersID)}`)}><input type="checkbox"/><span>{users.name}</span></li>
                })}
                
              </ul>
              <button className="removeAdmin">Remove Admin</button>
            </div>
            <br/>
            <div className="userList">
              <ul>
                <h1>Users</h1>
                {users.filter(users => users.role === 'user').map(users => {
                  return <li key={(`users-${(users.usersID)}`)}><input type="checkbox"/><span>{users.name}</span></li>
                })}  
              </ul>
              <button className="makeAdmin">Make Admin</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>  
  );
};
