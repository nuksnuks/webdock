import React, { useState, useEffect } from "react";
import '../styles/CreateRequest.scss'

const CreateRequest = () => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [image, setImage] = useState("");
    const [post, setPost] = useState('');
    const [isUser, setIsUser] = useState(false);

    const name = localStorage.getItem('user');
    const email = localStorage.getItem('email');
    const id = localStorage.getItem('id');

    const userData = {name, email, id}

     // Use the useEffect hook to check the localStorage for the "user" key
     useEffect(() => {
      // If the "user" key exists, set the isUser state to true
      if (localStorage.getItem('user')) {
        setIsUser(true);
      }
      // Otherwise, set the isUser state to false
      else {
        setIsUser(false);
      }
    }, []);

    
   
    const handleSubmit = (e) => {
        
        e.preventDefault();

        const post = {title, category, description, image, tags, id}

        console.log(post)

        fetch('http://localhost:3001/post', {
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          //laver om til en json-string:
          body: JSON.stringify(post),
        })
        .then(response => {
          if (response.ok) {
            return response.json(); 
          } else {
            console.log('failed')
          }
        })
        .then(data => {
          console.log('Davids big brain fik det til at virke!', data); 
        })
        .catch(error => {
          console.log('Major failure!', error.message);
        })
        .then(fetch('http://localhost:3001/users',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          //laver om til en json-string:
          body: JSON.stringify(userData),
        }))
          };
        
  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
        <h3>Create a post</h3>

        <label htmlFor="title">Title</label>
        <input 
        type="text" 
        name="title"
        id="title"
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
          id="tags"
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
        type="submit" value="Submit" id="button" onClick={(e) => setPost} disabled={!isUser}></input>
        <p>{post}</p>
    </form>
 
    </div>
  )
}

export default CreateRequest