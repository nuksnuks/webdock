import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SsoLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the Identity Provider's login page.
    window.location.href = 'http://webdock.io/en/login?companyID=ucl_feedback_tool&redirect=http://localhost:5173/ssocallback';

  }, []);

  return <div>Redirecting to SSO login...</div>;
}

export default SsoLogin;