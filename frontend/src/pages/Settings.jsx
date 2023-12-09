import { decodeToken } from "react-jwt";
import React, { useState, useEffect } from 'react';
import '/./src/styles/Settings.scss';
import group from "../assets/Group 14.png";

const AccountSetting = () => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Extract the SSO token from local storge and the URL
        
        const ssoToken = localStorage.getItem("ssoToken");
        

        if (ssoToken) {
          const decodedToken = decodeToken(ssoToken);
          

          setName(decodedToken.name || 'Default Name');
          setImageUrl(decodedToken.avatarUrl || '/default-image-url.png');
          setEmail(decodedToken.email || '');
        } else {
          // If no SSO token, fetch user details from the backend
          const response = await fetch('http://localhost:3001/users/22474');

          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }

          const data = await response.json();

          setName(data.name || 'Default Name');
          setImageUrl(data.avatarUrl || '/default-image-url.png');
          setEmail(data.email || '');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageChange = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    try {
      const response = await fetch('/api/update-user-image', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle success, maybe update state or show a success message
      } else {
        throw new Error('Failed to update user image');
      }
    } catch (error) {
      console.error('Error updating user image:', error);
    }
  };


  return (
    <div className="mainConterAll">
      <div className="rootContainer">
        <div className="container">
          <div className="rootbody">
            <div className="content">
              <div className="account">
                <h1 className="accset">Account Settings</h1>
                <p className="accdetail">
                  Webdock.io settings to update your feedback
                  profile.
                </p>
              </div>
              <div className="profile">
                <div className="top">
                  <img src={imageUrl} alt="profile" className="imagef" />
                </div>
                <label className="uploadimg" style={{ cursor: "pointer" }}>
                  <span className="labeling">Upload Image</span>
                  <input id="inputTag" type="file" />
                </label>
              </div>
              <div className="pname">
                <span className="hpname">Name:</span>
                <span className="hpdetail">{name}</span>
              </div>
              <div className="pemail">
                <span className="hpname">Email:</span>
                <span className="hpdetail">{email}</span>
              </div>
              <div className="accountbottom">
                <h3 className="aheader">Account</h3>
                <div className="Editp">
                  <span className="editpt">Edit profile</span>
                  <span className="editpl">
                    <img src={group} alt="" />
                  </span>
                </div>
                <div className="Editp">
                  <span className="editpt">change password</span>
                  <span className="editpl">
                    <img src={group} alt="" />
                  </span>
                </div>
                <div className="Editp">
                  <span className="editpt">Push notification</span>
                  <span className="editpl">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </span>
                </div>
                <div className="Editp">
                  <span className="editpt">Dark mode</span>
                  <span className="editpl">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;