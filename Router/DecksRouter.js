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
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const deckId = req.params.id;
      const deck = await Deck.findById(deckId);
      if (deck) {
        // deck.Deck_Name = req.body.Deck_Name;
        // deck.Deck_img = req.body.Deck_img;
        deck.Cards = req.body.Cards; 
        const updated_deck = await deck.save();
        res.send({ message: 'deck Updated', deck: updated_deck });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );
    

  deck_Router.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const deck = new Deck({
      Deck_Name: req.body.Deck_Name,
      Deck_img: req.body.Deck_img,
      Cards: []
    })
    const new_created_deck = await deck.save();
    res.send({ message: 'Deck Created', deck: new_created_deck });

  }));



  deck_Router.delete(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      console.log(req.params.id);
      // if( !mongoose.Types.ObjectId.isValid(req.params._id) ) return false;

      const deck = await Deck.findById(req.params.id);
      if (deck) {
        const delete_deck = await deck.deleteOne();
        res.send({ message: 'Deck Deleted', deck: delete_deck });
      } else {
        res.status(404).send({ message: 'Deck Not Found' });
      }
    })
  );

export default deck_Router