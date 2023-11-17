import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";

import FrontPage from './pages/FrontPage';
import Posts from './pages/Posts';
import Roadmap from './pages/Roadmap';
import Single from './pages/Single';
import Layout from './pages/Layout';
import AdminPage from './pages/AdminPage';
import Requests from './pages/Requests';
import Settings from './pages/Settings';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FrontPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/single" element={<Single />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/Settings" element={<Settings />} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <Route path="/CreateFeatureRequest" element={<CreateFeatureRequest />} />
>>>>>>> parent of 8ef88e3 (Revert "commit all files")

          

           
=======
>>>>>>> ae6a8d24d22c1be3a3ce42573ab125c0d544c251
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
