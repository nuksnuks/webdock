import React, { useState } from "react";
import '../styles/CreateRequest.scss'

const CreateRequest = () => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [image, setImage] = useState("");
    const [post, setPost] = useState('')
   
    const handleSubmit = (e) => {
        e.preventDefault();

        const post = {title, category, description, image, tags}

        console.log(post)

        fetch('http://localhost:3001/post', {
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          //laver om til en json-string:
          body: JSON.stringify(post),
        });
  };

        
  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
        <h3>Create a post</h3>

        <label>Title</label>
        <input 
        type="text" 
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="category1">Category</label>
        <select 
        id="category1" 
        name="category" 
        onChange={(e) => setCategory(e.target.value)}>
            <option value='Dashboard Features'>Dashboard Features</option>
            <option value='Documentation'>Documentation</option>
            <option value='Billing Feature'>Billing Feature</option>
            <option value='Networking'>Networking</option>
            <option value='Heardware and Products'>Heardware and Products</option>
            <option value='Perfect Server Stack'>Perfect Server Stack</option>
            <option value='Mobile App'>Mobile App</option>
            <option value='Webdock API'>Webdock API</option>
            <option value='Competition'>Competition</option>
            <option value='Uncategorized'>Uncategorized</option>
            {category}
        </select>

        <label htmlFor="description">Description</label>
        <textarea 
            name="description" 
            id="description" 
            cols="30" 
            rows="10"
            required 
            value= {description}
            onChange={(e) => setDescription(e.target.value)}>
                
        </textarea>

        <label htmlFor="tags">Keywords</label>
        <input 
          type="text" 
          name="tags"
          value={tags}
                onChange={(e) => setTags(e.target.value.split(' ').toString())}>
        </input>

        <div>
            <label htmlFor="image">Upload Image</label>
            <input 
                type="file" 
                name="image" 
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            ></input>
        </div>

        <input 
        type="submit" value="Submit" onClick={(e) => setPost}></input>
        <p>{post}</p>
    </form>
 
    </div>
  )
}

export default CreateRequest
