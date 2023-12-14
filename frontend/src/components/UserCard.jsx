import React, { useState } from 'react';
import '/./src/styles/PostCard.scss';

const UserCard = ({name, role }) => {

  return (
    <>
        <div className="UserBox1">
                <div className="InfoPart">
                    <div>
                        <p>{name}</p>
                        <p>{role}</p>
                    </div> 
                </div>
               
        </div>
    </>
  )
}

export default UserCard