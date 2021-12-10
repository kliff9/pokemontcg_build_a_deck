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
      const idtest = '61b20eeed25292360531d3c1'
      const deck = await Deck.findById(req.params.id);
      if (deck) {
        res.send(deck);
      } else {
        res.status(404).send({ message: 'Product Not Found'   });
      }
    })
  );


export default deck_Router