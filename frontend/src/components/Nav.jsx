import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
          <li>
            <Link to="/"><img src=".\src\assets\webdock-logo-positiv 3.png" alt="" /></Link>
          </li>
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
          <li>
            <Link to="/posts">Feature Requests</Link>
          </li>
          <li>
            <Link to="/single">Settings</Link>
          </li>
          <li>
            <Link to="/">Frontpage</Link>
          </li>
          <button> Sign In </button>
          <button> Sign Up </button>
        </ul>
        
      </nav>
  )
}

export default Nav