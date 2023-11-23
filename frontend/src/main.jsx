import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";

import FrontPage from './pages/FrontPage';
import Posts from './pages/Posts';
import Roadmap from './pages/Roadmap';
import Single from './pages/Single';
import Layout from './pages/Layout';
import AdminPage from './pages/AdminPage';
import FeatureRequest from './pages/FeatureRequest';
import Settings from './pages/Settings';
import CreateFeatureRequest from './pages/CreateFeatureRequest';



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
          <Route path="/FeatureRequest" element={<FeatureRequest />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/CreateFeatureRequest" element={<CreateFeatureRequest />} />

          

           
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
