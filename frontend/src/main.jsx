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
import CreateRequest from './components/CreateRequest';
import GlobalComponent from './components/GlobalComponent';
// SSO
import SsoLogin from './components/ssoComponents/ssoLogin';
import SsoCallback from './components/ssoComponents/ssoCallback';
import { TokenProvider } from './contexts/TokenContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenProvider>
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
          <Route path="/CreateFeatureRequest" element={<CreateRequest />} />
          <Route path="/GlobalComponent" element={<GlobalComponent />} />
          <Route path="/ssologin" element={<SsoLogin/>} />
          <Route path="/ssocallback" element={<SsoCallback/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </TokenProvider>
  </React.StrictMode>,
)
