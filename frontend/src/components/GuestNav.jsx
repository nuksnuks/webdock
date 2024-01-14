import React from 'react'
import { Link } from 'react-router-dom'
import  '/./src/styles/MainNavbar.scss'

const GuestNav = () => {
  return (
    <nav>
        <Link to="/">
        
        <picture>
          <source media="(max-width: 992px)" srcset="/src/assets/webdock-logo-facebook.png"></source>
          <img src="/src/assets/webdock-logo-positiv 3.png" alt="logo" />
        </picture>
        



        </Link>
        <div className="buttons">
            <button> <a href="https://webdock.io/en/login?companyID=ucl_feedback_tool&redirect=http://localhost:5173">Sign In</a></button>
            <button> <a href="https://webdock.io/en/login?companyID=ucl_feedback_tool&redirect=http://localhost:5173">Sign Up</a></button>
        </div>
        
      </nav>
  )
}

export default GuestNav