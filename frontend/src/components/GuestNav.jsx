import React from 'react'
import { Link } from 'react-router-dom'
import  '/./src/styles/MainNavbar.scss'

const GuestNav = () => {
  return (
    <nav>
        <Link to="/"><img src=".\src\assets\webdock-logo-positiv 3.png" alt="" /></Link>
        <div>
            <button> <a href="https://webdock.io/en/login?companyID=ucl_feedback_tool&redirect=http://localhost:5173">Sign In</a></button>
            <button> <a href="https://webdock.io/en/login?companyID=ucl_feedback_tool&redirect=http://localhost:5173">Sign Up</a></button>
        </div>
        
      </nav>
  )
}

export default GuestNav