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
import BackgroundBox from './pages/BackgroundBox';
import CreateRequest from './components/CreateRequest';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BackgroundBox />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/single" element={<Single />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/FeatureRequest" element={<FeatureRequest />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/CreateRequest" element={<CreateRequest />} />

          

           
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
