import data from "../data.js";
import mongoose from 'mongoose';
import express from 'express'
import expressAsyncHandler from 'express-async-handler'; 
import Deck from '../Models/DecksModel.js'


const deck_Router = express.Router()
deck_Router.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const decks = await Deck.find({});

      res.send(decks);
    })
  );


  deck_Router.get(
    '/seed',
    expressAsyncHandler(async (req, res) => { 
      await Deck.remove({}); 
      const createDeck = await Deck.insertMany(data.PokemonCards);
      res.send({ createDeck });
    })
  );

  deck_Router.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const deck = await Deck.findById(req.params.id);
      if (deck) {
        res.send(deck);
      } else {
        res.status(404).send({ message: 'Product Not Found'   });
      }
    })
  );

  deck_Router.put(
    '/_deck',
    expressAsyncHandler(async (req, res) => {
      const deckk = await deckk.findById(req.deckk._id);
      if (deckk) {
        deckk.name = req.body.name || deckk.name;
        deckk.email = req.body.email || deckk.email;
        if (req.body.password) {
          deckk.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updateddeckk = await deckk.save();
        res.send({
          _id: updateddeckk._id,
          name: updateddeckk.name,
          email: updateddeckk.email,
          isAdmin: updateddeckk.isAdmin,
          token: generateToken(updateddeckk),
        });
      }
    })
  );

export default deck_Router