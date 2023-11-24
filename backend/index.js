const sequelize = require('sequelize');
const connection = require('./config/database');
const syncModels  = require('./Models/index');
const express = require('express');
const cors = require('cors');
const Post = require('./Models/postModel');

const app = express();
app.use(cors());
app.use(express.json());

// Test the connection
connection
  .authenticate()
  .then(() => {
    console.log('Connection established!');
  })
  .catch((err) => {
    console.error('Unable to connect:', err);
  });

// Sync models
syncModels();

app.get('/post', async (req,res) =>{
  try {
    const posts = await Post.findAll();
    res.status(201).json(posts);
  } catch (error) {
    res.status(500).send('kunne ikke hente eller finde data')
  }
});

app.post('/post', async (req, res) => {
  try {
    const post = await Post.create({
      Category: req.body.category,
      title: req.body.title,
      description: req.body.description,
      image: req.body.image
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).send(error.message); 
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
