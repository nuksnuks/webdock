
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';


function SsoCallback() {


 const [userData, setUserData] = useState(null); // Initialize userData state as null

 const TokenDataContext = createContext(null);

const fetchData = async () => { 
    try { 
      const urlParams = new URLSearchParams(window.location.search);

      const ssoToken = urlParams.get('ssoToken');

      const response = await fetch("http://localhost:3000/verify", { 
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ ssoToken }),
      });

      const fetchedUserData = await response.json();
      if (!userData) {
        setUserData(fetchedUserData);
 }
   localStorage.setItem('token', ssoToken);
   
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  
  useEffect(() => {
      if (!userData) {
        fetchData();
        window.location.href = "/roadmap"
      } 
  }, []);



  return  <div>
      {userData && (
        <div>
          <p>User Data:</p>
          <p>Name: {userData.name}</p>
          <p>Mail: {userData.email}</p>

        </div>
      )}
    </div>

}

export default SsoCallback;