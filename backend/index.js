const express = require('express');
const sequelize = require('sequelize');
const connection = require('./config/database');
const syncModels  = require('./models/app');
const cors = require('cors');
routes = require('./routes');

syncModels({ force: true })

const app = express();
app.use(cors());
app.use(express.json());

//"backend landing page"

app.get('/', async (req,res) =>{
  try {
    res.send('Velkommen til the Matrix. <br> gå til: <a href="http://localhost:3001/users">users </a> <br> gå til: <a href="http://localhost:3001/post">posts </a>');
  } catch (error) {
    res.status(500).send('kunne ikke hente eller finde data')
  }
});

//User data

app.get('/users', async (req,res) =>{
  try {
    const posts = await User.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


//Post data

// app.get('/post:id', postController.getPostById);


// app.get('/post', async (req,res) =>{
//   try {
//     const posts = await Post.findAll();
//     res.status(201).json(posts);
//   } catch (error) {
//     res.status(500).send('kunne ikke hente eller finde data')
//   }
// });

// app.post('/post', async (req, res) => {
//   try {
//     const post = await Post.create({
//       status: 'Under Review',
//       category: req.body.category,
//       title: req.body.title,
//       description: req.body.description,
//       tag: req.body.tags,
//       image: req.body.image
//     });
//     res.status(201).json(post);
//   } catch (error) {
//     res.status(500).send(error.message); 
//   }
// });

app.use(routes);
//app.use('/admin', adminRoutes);


const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
