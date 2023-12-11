import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";

import FrontPage from './pages/FrontPage';
import Layout from './pages/Layout';
import AdminPage from './pages/AdminPage';
import FeatureRequest from './pages/FeatureRequest';
import Settings from './pages/Settings';
import CreateRequest from './components/CreateRequest';
import CreateComment from './components/CreateComment';
import SinglePost from './pages/SinglePost';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FrontPage />} />
          <Route path="/post" element={<FeatureRequest/>} />
          <Route path="/post/:id" element={<SinglePost/>} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/CreateRequest" element={<CreateRequest />} />
          
          <Route path="/CommentCreate" element={<CreateComment />} />

           
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
