import React, { useState }  from "react";
import  '/./src/styles/CreateFeatureRequest.scss'
import picture from "../assets/Picture.png";



const CreateFeatureRequest = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");

  const createPost = async () => {
    try {
      const response = await fetch("davidsserver.vps.webdock.cloud:8080/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category,
          details,
        }),
      });

      if (response.ok) {
        // Reset form or handle success as needed
        setTitle("");
        setCategory("");
        setDetails("");
        alert("Post created successfully!");
      } else {
        console.error("Failed to create post");
        alert("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Error creating post");
    }
  };

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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="detailssm">
            <label className="labelsm" htmlFor="details">
              DETAILS
            </label>
            <textarea name="details" id="detailssm" placeholder="Any additional details" cols="30" rows="10" value={details}
              onChange={(e) => setDetails(e.target.value)}>
              {/* Any additional details */}
            </textarea>
          </div>
          <div className="endsm">
            <div className="fileaddsm">
              <img src={picture} alt="" />
            </div>
            <div className="postsm">
              <button className="submitsm"onClick={createPost}> Create Post</button>
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="details">
                  <label className="label" htmlFor="details">
                    DETAILS
                  </label>
                  <textarea name="details" id="details" cols="30" rows="10"> value={details}
                  onChange={(e) => setDetails(e.target.value)}
                    Any additional details
                  </textarea>
                </div>
                <div className="end">
                  <div className="fileadd">
                    <img src={picture} alt="" />
                  </div>
                  <div className="post">
                    <button className="submit" onClick={createPost}> Create Post</button>
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

export default CreateFeatureRequest;
