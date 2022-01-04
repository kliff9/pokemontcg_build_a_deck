import data from "../data.js";
import mongoose from 'mongoose';
import express from 'express'
import expressAsyncHandler from 'express-async-handler'; 
import Card from '../Models/CardsModel.js'


const card_Router = express.Router()
card_Router.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const card = await Card.find({});

      res.send(card);
    })
  );


 card_Router.get(
    '/seed',
    expressAsyncHandler(async (req, res) => { 
      await Card.remove({}); 
      const createcards = await Card.insertMany(data.pokecard);
      res.send({ createcards });
    })
  );

  card_Router.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      // console.log('card Id BN', req.params._id);
      const _card = await Card.findById(req.params.id);
      if (_card) {
        res.send(_card);
      } else {
        res.status(404).send({ message: 'Card Not Found'   });
      }
    })
  );

  card_Router.delete(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      console.log(req.params.id);
      // if( !mongoose.Types.ObjectId.isValid(req.params._id) ) return false;

      const card = await Card.findById(req.params.id);
      if (card) {
        const delete_card = await card.deleteOne();
        res.send({ message: 'Card Deleted', card: delete_card });
      } else {
        res.status(404).send({ message: 'Card Not Found' });
      }
    })
  );

export default card_Router