import React from "react";
import '/./src/styles/Settings.scss'
import ellipse from "../assets/UserProfileImage.png";
import group from "../assets/Group 14.png";
import profile from "../assets/UserProfileImage.png";
import settingsm from "../assets/settings.png";
import Ellipse from "../assets/Ellipsesm 106.png";
import Groupsm from "../assets/Groupsm.png";

const AccountSetting = () => {
  return (
    <div className="mainConterAll">
      {/* for mobile device */}
      <div className="mobileContainer">
        <div className="consm">
          <div className="topsm">
            <img src={profile} alt="profile" className="imagefsm" />
          </div>
          <div className="bottomsm">Webdock</div>
        </div>
        <div className="mainbodysm">
          <div className="settingsm">
            <img src={settingsm} alt="" />
            <span>Settings</span>
          </div>
          <div className="muploading">
            <img src={Ellipse} alt="Ellipse" />
            <label
              className="mlebalsm"
              style={{ cursor: "pointer" }}
              htmlFor="inputTag"
            >
              <span className="labelingsm">Upload Image</span>
              <input id="inputTag" type="file" />
            </label>
          </div>
          <div className="minfo">
            <span className="minfo1">Email :</span>
            <span className="minfo2">abdalrhmanaldarra@gmail.com</span>
          </div>
          <div className="minfo">
            <span className="minfo1">Name :</span>
            <span className="minfo2">Abd Alrhman Al Darra</span>
          </div>
          {/* -------------------- */}
          <div className="lastinfsm">
            <h3>Account Settings</h3>
            <div className="editpsm">
              <span>Edit profile</span>
              <img src={Groupsm} alt="Groupsm" />
            </div>
            <div className="editpsm">
              <span>Change password</span>
              <img src={Groupsm} alt="Groupsm" />
            </div>
            <div className="Editpsm">
              <span className="editptsm">Push <br/> notification</span>
              <span className="editplsm">
                <label className="switchsm">
                  <input type="checkbox" />
                  <span className="slidersm roundsm"></span>
                </label>
              </span>
            </div>
            <div className="Editpsm">
              <span className="editptsm">Dark mode</span>
              <span className="editplsm">
                <label className="switchsm">
                  <input type="checkbox" checked />
                  <span className="slidersm roundsm"></span>
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* For desktop device */}
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
                  <img src={ellipse} alt="profile" className="imagef" />
                </div>
                <label className="uploadimg" style={{ cursor: "pointer" }}>
                  <span className="labeling">Upload Image</span>
                  <input id="inputTag" type="file" />
                </label>
              </div>
              <div className="pname">
                <span className="hpname">Name:</span>
                <span className="hpdetail">Abd Alrhman Al Darra</span>
              </div>
              <div className="pemail">
                <span className="hpname">Email:</span>
                <span className="hpdetail">abdalrhmanaldarra@gmail.com</span>
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
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </span>
                </div>
                <div className="Editp">
                  <span className="editpt">Dark mode</span>
                  <span className="editpl">
                    <label className="switch">
                      <input type="checkbox" checked />
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