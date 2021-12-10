import mongoose from 'mongoose';


const Deck_Schema = new mongoose.Schema(
  {
    // deck: {type: mongoose.Schema.Types.ObjectId},
    Deck_Name: { type: String, required: true, unique: true },
    Deck_img: { type: String, required: true },
    Cards: [{
    // deck: { type: mongoose.Schema.Types.ObjectId,
    //    ref: 'Card',
    //  required: true,
    // },
        name: { type: String, required: true },
        image: { type: String, required: true },
        type: { type: String, required: true },
        energy: [String],
        description: { type: String, required: true },
    }],


  },
  {
    timestamps: true,
  }
);
const Deck = mongoose.model('Deck', Deck_Schema);

export default Deck;