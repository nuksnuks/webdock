import React from 'react'
import { Link } from 'react-router-dom'
import  '/./src/styles/MainNavbar.scss'

const UserNav = () => {
  return (
    <nav>
        <Link to="/"><img src=".\src\assets\webdock-logo-positiv 3.png" alt="" /></Link>
        <div>
            <button> <a href="./settings" target='_blank'>Settings</a></button>
            <button> <a href="./">Log out</a></button>
        </div>
        
      </nav>
  )
}

export default UserNav