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


export default card_Router