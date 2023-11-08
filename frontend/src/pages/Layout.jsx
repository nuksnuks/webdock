import { Outlet, Link } from "react-router-dom";
import  '/./src/styles/MainNavbar.scss'

const Layout = () => {
  return (
    <>
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
            <Link to="/single">Frontpage</Link>
          </li>
          <button> Sign In </button>
          <button> Sign Up </button>
        </ul>
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;