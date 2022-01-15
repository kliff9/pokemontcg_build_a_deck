import mongoose from "mongoose";

const Deck_Schema = new mongoose.Schema(
  {
    Deck_Name: { type: String, required: true, unique: true },
    Deck_img: { type: String },
    Cards: [
      {
        name: { type: String },
        image: { type: String },
        type: { type: String },
        energy: [String],
        description: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Deck = mongoose.model("Deck", Deck_Schema);

export default Deck;
