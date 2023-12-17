import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import '../styles/admin.scss'

export default function AdminPage() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
          .then((response) => response.json())
          .then((data) => setUsers(data))
          .catch((error) => console.log('Error fetching data:', error));
      }, []); 

      const handleAdminChange = (userId, currentRole) => {
        const newRole = currentRole === 'admin' ? 'user' : 'admin';
        fetch(`http://localhost:3001/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role: newRole }),
        })
        .then(() => {
            setUsers(users.map(user => user.userID === userId ? { ...user, role: newRole } : user));
            location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="UserBox">
            <h2>Users</h2>
            {users.map((item) => (
                <div className="AdminPart" key={item.name}>
                    <UserCard 
                        name={item.name} 
                        role={item.role}
                    />
                    <button 
                        className='change' 
                        onClick={() => handleAdminChange(item.userID, item.role)}>
                            {item.role === 'admin' ? 'Make User' : 'Make Admin'}
                    </button>
                </div>
            ))}
        </div>
    );
};
