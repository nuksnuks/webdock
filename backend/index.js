const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const postmark = require("postmark");


const app = express();

const client = new postmark.ServerClient("c3d41965-18a4-479f-a591-4369b7f5952c");


app.use(cors());
app.use(express.json());

app.use('/', router);

app.post('/send-email', function(req, res) {
    const { message } = req.body;
    client.sendEmail({
        "From": "uclfeedback@webdock.io",
        "To": "m.n.dimon@outlook.com",
        "Subject": "Webdock New Feature Request",
        "TextBody": message })
    .then(() => res.status(200).json({ message: 'Email sent successfully' }))
    .catch(err => console.error(err));
});


//"backend landing page"

// app.get('/', async (req,res) =>{
//   try {
//     res.send('Velkommen til the Matrix. <br> gå til: <a href="http://localhost:3001/users">users </a> <br> gå til: <a href="http://localhost:3001/post">posts </a>');
//   } catch (error) {
//     res.status(500).send('kunne ikke hente eller finde data')
//   }
// });

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

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
