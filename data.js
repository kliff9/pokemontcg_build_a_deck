import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "2kliff",
      gender: "Male",
      birthday: "August 23",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Eren",
      gender: "Male",
      birthday: "October 23",
      email: "Eren@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],

  PokemonCards: [
    {
      Deck_Name: "Deck 1",
      Deck_img: "/img/MasterBallDeck.png",
      Cards: [
        {
          name: "Articuno",
          type: "water",
          image: "/img/Articuno.jpg",
          MoveName:" Ice Blast",
          Damage: "50",
          energy: ["water", "water"],
          description:
            "Flip a coin. If heads the defending pokemon is now frozen",
        },
      ],
    },
    {
      Deck_Name: "Deck 2",
      Deck_img: "/img/MasterBallDeck.png",
      Cards: [
        {
          name: "Articuno",
          type: "water",
          image: "/img/Articuno.jpg",
          MoveName:" Ice Blast",
          Damage: "50",
          energy: ["water", "water"],
          description:
            "Flip a coin. If heads the defending pokemon is now frozen",
        },
  
      ],
    },
    
  ],
  pokecard: [
    {
      name: "Zaptos",
      type: "electric",
      image: "/img/ZAptos450.jpg",
      MoveName:"Zap Strike",
      Damage: "70",
      energy: ["electric", "electric"],
      description:
        "Flip a coin. If head Adds 30 Damage",
    },
    {
      name: "Articuno",
      type: "water",
      image: "/img/Articuno.jpg",
      MoveName:" Ice Blast",
      Damage: "50",
      energy: ["water", "water"],
      description:
        "Flip a coin. If heads the defending pokemon is now frozen",
    },
    {
      name: "Lugia",
      type: "normal",
      image: "/img/Lugia.jpg",
      MoveName:"AeroBlast",
      Damage: "110",
      energy: ["normal", "normal", "normal"],
      description:
        " ",
    },
    {
      name: "Moltres",
      type: "fire",
      MoveName:"FlameThrower ",
      Damage: "110",
      image: "/img/Moltres.jpg",
      energy: ["fire", "fire", "fire"],
      description:
        "If the Defending Pokemon has a similar typing, Add 20 Damage",
    },
    {
      name: "Ho-oh",
      type: "fire",
      image: "/img/Ho-oh.jpg",
      MoveName:"Flame Wing",
      Damage: "100",
      energy: ["fire", "fire"],
      description:
        "Flip a coin. If tails, discard an energy card",
    },
    {
      name: "Entei",
      type: "fire",
      image: "/img/Entei.jpg",
      energy: ["fire"],
      MoveName:"Flame tackle",
      Damage: "40",
      description:
        "The Pokemon is now burned. If the defending pokemon is burned then add 20 Damage to the attack",
    },
    {
      name: "Raikou",
      type: "electric",
      image: "/img/Raikou.jpg",
      MoveName:"SparkShock",
      Damage: "120",
      energy: ["electric", "electric"],
      description:
        "This Attack does 30 Damage to itself.",
    },
    {
      name: "Suicune",
      type: "water",
      image: "/img/Suicune.jpg",
      MoveName:"Surf",
      Damage: "80",
      energy: ["water", "water", "water"],
      description:
        "Flip a coin. If head Adds 80 Damage",
    },
        {
      name: "Electric",
      type: "electric",
      image: "/img/Electric.jpg",
      MoveName:" ",
      Damage: " ",
      energy: [],
      description:" ",
    },
        {
      name: "Fire",
      type: "fire",
      image: "/img/Fire.jpg",
      MoveName:" ",
      Damage: " ",
      energy: [],
      description:" ",
    },
    {
      name: "Water",
      type: "water",
      image: "/img/Water.jpg",
      MoveName:" ",
      Damage: " ",
      energy: [],
      description:" ",
    },
    {
      name: "Normal",
      type: "normal",
      image: "/img/Normal.jpg",
      MoveName:" ",
      Damage: " ",
      energy: [],
      description:" ",
    },
  ],
};
export default data;
//  export const PokemonDeck =
//  [
//     {
//         id: 4,
//         name: "Zaptos",
//         cards: PokemonCards

//     },    {
//         id: 5,
//         name: "Zaptoss",
//         cards: PokemonCards

//     }
//  ]
// }
