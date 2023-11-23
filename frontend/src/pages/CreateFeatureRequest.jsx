import React from "react";
import  '/./src/styles/CreateFeatureRequest.scss'
import picture from "../assets/Picture.png";



const createFeatureRequest = () => {
  return (
    <div className="mobiledevise">
      <div className="mobile">
        <div className="headersm">
          <h3 className="headerVasm">Create feature request</h3>
        </div>

        <div className="footerrigntsm">
          <div className="titlesm">
            <label className="labelsm" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              name="title"
              id="titlesm"
              className="titleinputsm"
              placeholder="Short, descriptive title"
            />
          </div>
          <div className="categorysm">
            <label className="labelsm" htmlFor="categorysm">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="categorysm"
              className="categoryinpsm"
              placeholder="Selected Category"
            />
          </div>
          <div className="detailssm">
            <label className="labelsm" htmlFor="details">
              DETAILS
            </label>
            <textarea name="details" id="detailssm" placeholder="Any additional details" cols="30" rows="10">
              {/* Any additional details */}
            </textarea>
          </div>
          <div className="endsm">
            <div className="fileaddsm">
              <img src={picture} alt="" />
            </div>
            <div className="postsm">
              <button className="submitsm">Create Post</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rootContainer">
        <div className="container">
          <div className="rightside">
            <div className="header">
              <h3 className="headerVa">Create feature request</h3>
              <div className="peaceofline"></div>
            </div>
            <div className="footer">
              <div className="footerrignt">
                <div className="title">
                  <label className="label" htmlFor="title">
                    TITLE
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="titleinput"
                    placeholder="Short, descriptive title"
                  />
                </div>
                <div className="category">
                  <label className="label" htmlFor="category">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Selected Category"
                  />
                </div>
                <div className="details">
                  <label className="label" htmlFor="details">
                    DETAILS
                  </label>
                  <textarea name="details" id="details" cols="30" rows="10">
                    Any additional details
                  </textarea>
                </div>
                <div className="end">
                  <div className="fileadd">
                    <img src={picture} alt="" />
                  </div>
                  <div className="post">
                    <button className="submit">Create Post</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createFeatureRequest;