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
          name: "Zaptos",
          type: "electric",
          image: "/img/ZAptos450.jpg",
          energy: ["electric", "electric"],
          description: "Description Text",
        },
        {
          name: "Zaptos",
          type: "electric",
          image: "/img/ZAptos450.jpg",
          energy: ["electric", "electric"],
          description: "Description Text",
        },
      ],
    },
    {
      Deck_Name: "Deck 2",
      Deck_img: "/img/MasterBallDeck.png",
      Cards: [
        {
          name: "Zaptos",
          type: "electric",
          image: "/img/ZAptos450.jpg",
          energy: ["electric", "electric"],
          description: "Description Text",
        },
        {
          name: "Zaptos",
          type: "electric",
          image: "/img/ZAptos450.jpg",
          energy: ["electric", "electric"],
          description: "Description Text",
        },
        {
          name: "Zaptos",
          type: "electric",
          image: "/img/ZAptos450.jpg",
          energy: ["electric", "electric", "electric"],
          description: "Description Text",
        },
        {
          name: "Zaptos",
          type: "electric",
          image: "/img/ZAptos450.jpg",
          energy: ["electric", "electric", "electric", "electric"],
          description: "Description Text",
        },
        {
          name: "Moltres",
          type: "electric",
          image: "/img/Moltres.jpg",
          energy: ["electric", "electric", "electric", "electric"],
          description: "Description Text",
        },
      ],
    },
    
  ],
  pokecard: [
    {
      name: "Zaptos",
      type: "electric",
      image: "/img/ZAptos450.jpg",
      energy: ["electric", "electric"],
      description:
        "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
    },
    {
      name: "Articuno",
      type: "water",
      image: "/img/Articuno.jpg",
      energy: ["water", "water"],
      description:
        "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
    },
    {
      name: "Lugia",
      type: "normal",
      image: "/img/Lugia.jpg",
      energy: ["normal", "normal", "normal"],
      description:
        "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
    },
    {
      name: "Moltres",
      type: "fire",
      image: "/img/Moltres.jpg",
      energy: ["fire", "fire", "fire"],
      description:
        "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
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
