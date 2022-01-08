import bcrypt from "bcryptjs";
// Hashing is called one way because it's practically impossible to get the original text from a hash.

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
          name: "Zaptos",
          type: "electric",
          image: "/img/ZAptos450.jpg",
          energy: ["electric", "electric", "electric", "electric"],
          description: "Description Text",
        },
      ],
    },
    {
      Deck_Name: "Deck 3",
      Deck_img: "/deck_select_img/Red_Deck_3.jfif",
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
          name: "Zaptos",
          type: "electric",
          image: "/img/ZAptos450.jpg",
          energy: ["electric", "electric", "electric", "electric"],
          description: "Description Text",
        },
      ],
    },
    {
      Deck_Name: "Deck 4",
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
          name: "Zaptos",
          type: "electric",
          image: "/img/ZAptos450.jpg",
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
      name: "Zaptoss",
      type: "electric",
      image: "/img/ZAptos450.jpg",
      energy: ["electric", "electric"],
      description:
        "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
    },
    {
      name: "Zaptosss",
      type: "electric",
      image: "/img/ZAptos450.jpg",
      energy: ["electric", "electric", "electric"],
      description:
        "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
    },
    {
      name: "Zaptossss",
      type: "electric",
      image: "/img/ZAptos450.jpg",
      energy: ["electric", "electric", "electric", "electric"],
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
