import express from 'express'
import mongoose from 'mongoose';
import data from './data.js';
import card_Router from './Router/CardsRouter.js';
import deck_Router from './Router/DecksRouter.js';
import user_Router from './Router/UserRouter.js';

import path from 'path'

const app = express();
const port =  process.env.PORT || 8000;



mongoose.connect("mongodb+srv://kliff01:kliff01@e-com.qk1or.mongodb.net/E-comDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/E-com', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(express.json()); // all request that contain data would be translated in node app
app.use(express.urlencoded({ extended: true }));

app.use('/api/decks', deck_Router);
app.use('/api/cards', card_Router);
app.use('/api/players', user_Router);


//  app.get('/api/decks', (req, res) => {
//    res.send(data.PokemonCards); // Only Show the Actual database with no variables
//    });

app.get('/hello', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

const __dirname = path.resolve();


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Frontend/build")));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'build', 'index.html'))
  }) 
  } else {
   app.get('/', (req, res) => {
     res.send('Server is ready');
   });
  }
app.get('/test', (req, res) => {
    res.send('Test Server is ready');
  });