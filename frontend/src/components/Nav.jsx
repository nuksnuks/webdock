import React from 'react'
import { Link } from 'react-router-dom'
import  '/./src/styles/MainNavbar.scss'

const Nav = () => {
  return (
    <nav>
        <Link to="/"><img src=".\src\assets\webdock-logo-positiv 3.png" alt="" /></Link>
        {/*<ul>
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
          <li>
            <Link to="/requests">Feature Requests</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/">Frontpage</Link>
          </li>
        </ul> */}
        <div>
            <button> Sign In </button>
            <button> Sign Up </button>
        </div>
        
      </nav>
  )
}

export default Nav