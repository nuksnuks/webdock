import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Roadmap</Link>
          </li>
          <li>
            <Link to="/roadmap">Feature Requests</Link>
          </li>
          <li>
            <Link to="/single">Single Request</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;