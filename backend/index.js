const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());

app.use('/', router);

// lavet til en .env fil og flyttet til "config"-mappen
// .env
// const privateKey = 'e389bb7b-dc58-4b0b-8f54-dac159d5a609';

// 
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// vores backend landing page
const port = 3001;
app.get('/', async (req,res) =>{
    try {
      res.send(`Velkommen til the Matrix. <br> gå til: <a href="http://localhost:${port}/users">users </a> <br> gå til: <a href="http://localhost:${port}/post">posts </a>`);
    } catch (error) {
      res.status(500).send('kunne ikke hente eller finde data')
    }
  });


// 
// app.post('/verify', async (req, res) => {
//     const { ssoToken } = req.body;
//     const user = jwt.verify(ssoToken, privateKey);
//     console.log(user);
//     res.json(user);
// });


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

//User data

// app.get('/users', async (req,res) =>{
//   try {
//     const posts = await User.findAll();
//     res.json(posts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });


//Post data

// app.get('/post:id', postController.getPostById);
// app.get('/post', postController.getAllPosts);
// app.post('/post',postController.createPost);

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



