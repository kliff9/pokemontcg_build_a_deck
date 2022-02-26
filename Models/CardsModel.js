import mongoose from 'mongoose';

const Card_Schema = new mongoose.Schema(
  {


    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    MoveName:{ type: String},
    Damage: { type: String},
    energy: [String],
    description: { type: String, required: true },



  },
  {
    timestamps: true,
  }
);
const Card = mongoose.model('Card', Card_Schema);

export default Card;