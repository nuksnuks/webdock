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
            <button> <a href="https://webdock.io/en/login?companyID=ucl_feedback_tool&redirect=http://localhost:5174" target='_blank'>Sign In</a></button>
            <button> <a href="https://webdock.io/en/login?companyID=ucl_feedback_tool&redirect=http://localhost:5174" target='_blank'>Sign Up</a></button>
        </div>
        
      </nav>
  )
}

export default Nav