import React, { useState } from 'react';

function email() {
    const [message, setMessage] = useState('');

    const setPost = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
    };

    return (
        <form onSubmit={setPost}>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
            />
            <input 
                type="submit" 
                value="Submit"
            />
        </form>
    );
}

export default email;
