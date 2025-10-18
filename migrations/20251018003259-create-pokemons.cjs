module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    await db.collection('pokemons').insertMany([
      {
        "codigo": 1,
        "nome": "bulbasaur",
        "tipo_primario": 1,
        "tipo_secundario": 2
      },
      {
        "codigo": 2,
        "nome": "ivysaur",
        "tipo_primario": 1,
        "tipo_secundario": 2
      },
      {
        "codigo": 3,
        "nome": "venusaur",
        "tipo_primario": 1,
        "tipo_secundario": 2
      },
      {
          "codigo": 4,
          "nome": "charmander",
          "tipo_primario": 3,
          "tipo_secundario": null
      },
      {
          "codigo": 5,
          "nome": "charmeleon",
          "tipo_primario": 3,
          "tipo_secundario": null
      },
      {
          "codigo": 6,
          "nome": "charizard",
          "tipo_primario": 3,
          "tipo_secundario": 7
      },
      {
          "codigo": 7,
          "nome": "squirtle",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 8,
          "nome": "wartortle",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 9,
          "nome": "blastoise",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 10,
          "nome": "caterpie",
          "tipo_primario": 5,
          "tipo_secundario": null
      },
      {
          "codigo": 11,
          "nome": "metapod",
          "tipo_primario": 5,
          "tipo_secundario": null
      },
      {
          "codigo": 12,
          "nome": "butterfree",
          "tipo_primario": 5,
          "tipo_secundario": 7
      },
      {
          "codigo": 13,
          "nome": "weedle",
          "tipo_primario": 5,
          "tipo_secundario": 2
      },
      {
          "codigo": 14,
          "nome": "kakuna",
          "tipo_primario": 5,
          "tipo_secundario": 2
      },
      {
          "codigo": 15,
          "nome": "beedrill",
          "tipo_primario": 5,
          "tipo_secundario": 2
      },
      {
          "codigo": 16,
          "nome": "pidgey",
          "tipo_primario": 6,
          "tipo_secundario": 7
      },
      {
          "codigo": 17,
          "nome": "pidgeotto",
          "tipo_primario": 6,
          "tipo_secundario": 7
      },
      {
          "codigo": 18,
          "nome": "pidgeot",
          "tipo_primario": 6,
          "tipo_secundario": 7
      },
      {
          "codigo": 19,
          "nome": "rattata",
          "tipo_primario": 6,
          "tipo_secundario": null
      },
      {
          "codigo": 20,
          "nome": "raticate",
          "tipo_primario": 6,
          "tipo_secundario": null
      },
      {
          "codigo": 21,
          "nome": "spearow",
          "tipo_primario": 6,
          "tipo_secundario": 7
      },
      {
          "codigo": 22,
          "nome": "fearow",
          "tipo_primario": 6,
          "tipo_secundario": 7
      },
      {
          "codigo": 23,
          "nome": "ekans",
          "tipo_primario": 2,
          "tipo_secundario": null
      },
      {
          "codigo": 24,
          "nome": "arbok",
          "tipo_primario": 2,
          "tipo_secundario": null
      },
      {
          "codigo": 25,
          "nome": "pikachu",
          "tipo_primario": 18,
          "tipo_secundario": null
      },
      {
          "codigo": 26,
          "nome": "raichu",
          "tipo_primario": 18,
          "tipo_secundario": null
      },
      {
          "codigo": 27,
          "nome": "sandshrew",
          "tipo_primario": 11,
          "tipo_secundario": null
      },
      {
          "codigo": 28,
          "nome": "sandslash",
          "tipo_primario": 11,
          "tipo_secundario": null
      },
      {
          "codigo": 29,
          "nome": "nidoran-f",
          "tipo_primario": 2,
          "tipo_secundario": null
      },
      {
          "codigo": 30,
          "nome": "nidorina",
          "tipo_primario": 2,
          "tipo_secundario": null
      },
      {
          "codigo": 31,
          "nome": "nidoqueen",
          "tipo_primario": 2,
          "tipo_secundario": 11
      },
      {
          "codigo": 32,
          "nome": "nidoran-m",
          "tipo_primario": 2,
          "tipo_secundario": null
      },
      {
          "codigo": 33,
          "nome": "nidorino",
          "tipo_primario": 2,
          "tipo_secundario": null
      },
      {
          "codigo": 34,
          "nome": "nidoking",
          "tipo_primario": 2,
          "tipo_secundario": 11
      },
      {
          "codigo": 35,
          "nome": "clefairy",
          "tipo_primario": 17,
          "tipo_secundario": null
      },
      {
          "codigo": 36,
          "nome": "clefable",
          "tipo_primario": 17,
          "tipo_secundario": null
      },
      {
          "codigo": 37,
          "nome": "vulpix",
          "tipo_primario": 3,
          "tipo_secundario": null
      },
      {
          "codigo": 38,
          "nome": "ninetales",
          "tipo_primario": 3,
          "tipo_secundario": null
      },
      {
          "codigo": 39,
          "nome": "jigglypuff",
          "tipo_primario": 6,
          "tipo_secundario": 17
      },
      {
          "codigo": 40,
          "nome": "wigglytuff",
          "tipo_primario": 6,
          "tipo_secundario": 17
      },
      {
          "codigo": 41,
          "nome": "zubat",
          "tipo_primario": 2,
          "tipo_secundario": 7
      },
      {
          "codigo": 42,
          "nome": "golbat",
          "tipo_primario": 2,
          "tipo_secundario": 7
      },
      {
          "codigo": 43,
          "nome": "oddish",
          "tipo_primario": 1,
          "tipo_secundario": 2
      },
      {
          "codigo": 44,
          "nome": "gloom",
          "tipo_primario": 1,
          "tipo_secundario": 2
      },
      {
          "codigo": 45,
          "nome": "vileplume",
          "tipo_primario": 1,
          "tipo_secundario": 2
      },
      {
          "codigo": 46,
          "nome": "paras",
          "tipo_primario": 5,
          "tipo_secundario": 1
      },
      {
          "codigo": 47,
          "nome": "parasect",
          "tipo_primario": 5,
          "tipo_secundario": 1
      },
      {
          "codigo": 48,
          "nome": "venonat",
          "tipo_primario": 5,
          "tipo_secundario": 2
      },
      {
          "codigo": 49,
          "nome": "venomoth",
          "tipo_primario": 5,
          "tipo_secundario": 2
      },
      {
          "codigo": 50,
          "nome": "diglett",
          "tipo_primario": 11,
          "tipo_secundario": null
      },
      {
          "codigo": 51,
          "nome": "dugtrio",
          "tipo_primario": 11,
          "tipo_secundario": null
      },
      {
          "codigo": 52,
          "nome": "meowth",
          "tipo_primario": 6,
          "tipo_secundario": null
      },
      {
          "codigo": 53,
          "nome": "persian",
          "tipo_primario": 6,
          "tipo_secundario": null
      },
      {
          "codigo": 54,
          "nome": "psyduck",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 55,
          "nome": "golduck",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 56,
          "nome": "mankey",
          "tipo_primario": 8,
          "tipo_secundario": null
      },
      {
          "codigo": 57,
          "nome": "primeape",
          "tipo_primario": 8,
          "tipo_secundario": null
      },
      {
          "codigo": 58,
          "nome": "growlithe",
          "tipo_primario": 3,
          "tipo_secundario": null
      },
      {
          "codigo": 59,
          "nome": "arcanine",
          "tipo_primario": 3,
          "tipo_secundario": null
      },
      {
          "codigo": 60,
          "nome": "poliwag",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 61,
          "nome": "poliwhirl",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 62,
          "nome": "poliwrath",
          "tipo_primario": 4,
          "tipo_secundario": 8
      },
      {
          "codigo": 63,
          "nome": "abra",
          "tipo_primario": 9,
          "tipo_secundario": null
      },
      {
          "codigo": 64,
          "nome": "kadabra",
          "tipo_primario": 9,
          "tipo_secundario": null
      },
      {
          "codigo": 65,
          "nome": "alakazam",
          "tipo_primario": 9,
          "tipo_secundario": null
      },
      {
          "codigo": 66,
          "nome": "machop",
          "tipo_primario": 8,
          "tipo_secundario": null
      },
      {
          "codigo": 67,
          "nome": "machoke",
          "tipo_primario": 8,
          "tipo_secundario": null
      },
      {
          "codigo": 68,
          "nome": "machamp",
          "tipo_primario": 8,
          "tipo_secundario": null
      },
      {
          "codigo": 69,
          "nome": "bellsprout",
          "tipo_primario": 1,
          "tipo_secundario": 2
      },
      {
          "codigo": 70,
          "nome": "weepinbell",
          "tipo_primario": 1,
          "tipo_secundario": 2
      },
      {
          "codigo": 71,
          "nome": "victreebel",
          "tipo_primario": 1,
          "tipo_secundario": 2
      },
      {
          "codigo": 72,
          "nome": "tentacool",
          "tipo_primario": 4,
          "tipo_secundario": 2
      },
      {
          "codigo": 73,
          "nome": "tentacruel",
          "tipo_primario": 4,
          "tipo_secundario": 2
      },
      {
          "codigo": 74,
          "nome": "geodude",
          "tipo_primario": 10,
          "tipo_secundario": 11
      },
      {
          "codigo": 75,
          "nome": "graveler",
          "tipo_primario": 10,
          "tipo_secundario": 11
      },
      {
          "codigo": 76,
          "nome": "golem",
          "tipo_primario": 10,
          "tipo_secundario": 11
      },
      {
          "codigo": 77,
          "nome": "ponyta",
          "tipo_primario": 3,
          "tipo_secundario": null
      },
      {
          "codigo": 78,
          "nome": "rapidash",
          "tipo_primario": 3,
          "tipo_secundario": null
      },
      {
          "codigo": 79,
          "nome": "slowpoke",
          "tipo_primario": 4,
          "tipo_secundario": 9
      },
      {
          "codigo": 80,
          "nome": "slowbro",
          "tipo_primario": 4,
          "tipo_secundario": 9
      },
      {
          "codigo": 81,
          "nome": "magnemite",
          "tipo_primario": 18,
          "tipo_secundario": 16
      },
      {
          "codigo": 82,
          "nome": "magneton",
          "tipo_primario": 18,
          "tipo_secundario": 16
      },
      {
          "codigo": 83,
          "nome": "farfetchd",
          "tipo_primario": 6,
          "tipo_secundario": 7
      },
      {
          "codigo": 84,
          "nome": "doduo",
          "tipo_primario": 6,
          "tipo_secundario": 7
      },
      {
          "codigo": 85,
          "nome": "dodrio",
          "tipo_primario": 6,
          "tipo_secundario": 7
      },
      {
          "codigo": 86,
          "nome": "seel",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 87,
          "nome": "dewgong",
          "tipo_primario": 4,
          "tipo_secundario": 12
      },
      {
          "codigo": 88,
          "nome": "grimer",
          "tipo_primario": 2,
          "tipo_secundario": null
      },
      {
          "codigo": 89,
          "nome": "muk",
          "tipo_primario": 2,
          "tipo_secundario": null
      },
      {
          "codigo": 90,
          "nome": "shellder",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 91,
          "nome": "cloyster",
          "tipo_primario": 4,
          "tipo_secundario": 12
      },
      {
          "codigo": 92,
          "nome": "gastly",
          "tipo_primario": 13,
          "tipo_secundario": 2
      },
      {
          "codigo": 93,
          "nome": "haunter",
          "tipo_primario": 13,
          "tipo_secundario": 2
      },
      {
          "codigo": 94,
          "nome": "gengar",
          "tipo_primario": 13,
          "tipo_secundario": 2
      },
      {
          "codigo": 95,
          "nome": "onix",
          "tipo_primario": 10,
          "tipo_secundario": 11
      },
      {
          "codigo": 96,
          "nome": "drowzee",
          "tipo_primario": 9,
          "tipo_secundario": null
      },
      {
          "codigo": 97,
          "nome": "hypno",
          "tipo_primario": 9,
          "tipo_secundario": null
      },
      {
          "codigo": 98,
          "nome": "krabby",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 99,
          "nome": "kingler",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 100,
          "nome": "voltorb",
          "tipo_primario": 18,
          "tipo_secundario": null
      },
      {
          "codigo": 101,
          "nome": "electrode",
          "tipo_primario": 18,
          "tipo_secundario": null
      },
      {
          "codigo": 102,
          "nome": "exeggcute",
          "tipo_primario": 1,
          "tipo_secundario": 9
      },
      {
          "codigo": 103,
          "nome": "exeggutor",
          "tipo_primario": 1,
          "tipo_secundario": 9
      },
      {
          "codigo": 104,
          "nome": "cubone",
          "tipo_primario": 11,
          "tipo_secundario": null
      },
      {
          "codigo": 105,
          "nome": "marowak",
          "tipo_primario": 11,
          "tipo_secundario": null
      },
      {
          "codigo": 106,
          "nome": "hitmonlee",
          "tipo_primario": 8,
          "tipo_secundario": null
      },
      {
          "codigo": 107,
          "nome": "hitmonchan",
          "tipo_primario": 8,
          "tipo_secundario": null
      },
      {
          "codigo": 108,
          "nome": "lickitung",
          "tipo_primario": 6,
          "tipo_secundario": null
      },
      {
          "codigo": 109,
          "nome": "koffing",
          "tipo_primario": 2,
          "tipo_secundario": null
      },
      {
          "codigo": 110,
          "nome": "weezing",
          "tipo_primario": 2,
          "tipo_secundario": null
      },
      {
          "codigo": 111,
          "nome": "rhyhorn",
          "tipo_primario": 11,
          "tipo_secundario": 10
      },
      {
          "codigo": 112,
          "nome": "rhydon",
          "tipo_primario": 11,
          "tipo_secundario": 10
      },
      {
          "codigo": 113,
          "nome": "chansey",
          "tipo_primario": 6,
          "tipo_secundario": null
      },
      {
          "codigo": 114,
          "nome": "tangela",
          "tipo_primario": 1,
          "tipo_secundario": null
      },
      {
          "codigo": 115,
          "nome": "kangaskhan",
          "tipo_primario": 6,
          "tipo_secundario": null
      },
      {
          "codigo": 116,
          "nome": "horsea",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 117,
          "nome": "seadra",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 118,
          "nome": "goldeen",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 119,
          "nome": "seaking",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 120,
          "nome": "staryu",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 121,
          "nome": "starmie",
          "tipo_primario": 4,
          "tipo_secundario": 9
      },
      {
          "codigo": 122,
          "nome": "mr-mime",
          "tipo_primario": 9,
          "tipo_secundario": 17
      },
      {
          "codigo": 123,
          "nome": "scyther",
          "tipo_primario": 5,
          "tipo_secundario": 7
      },
      {
          "codigo": 124,
          "nome": "jynx",
          "tipo_primario": 12,
          "tipo_secundario": 9
      },
      {
          "codigo": 125,
          "nome": "electabuzz",
          "tipo_primario": 18,
          "tipo_secundario": null
      },
      {
          "codigo": 126,
          "nome": "magmar",
          "tipo_primario": 3,
          "tipo_secundario": null
      },
      {
          "codigo": 127,
          "nome": "pinsir",
          "tipo_primario": 5,
          "tipo_secundario": null
      },
      {
          "codigo": 128,
          "nome": "tauros",
          "tipo_primario": 6,
          "tipo_secundario": null
      },
      {
          "codigo": 129,
          "nome": "magikarp",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 130,
          "nome": "gyarados",
          "tipo_primario": 4,
          "tipo_secundario": 7
      },
      {
          "codigo": 131,
          "nome": "lapras",
          "tipo_primario": 4,
          "tipo_secundario": 12
      },
      {
          "codigo": 132,
          "nome": "ditto",
          "tipo_primario": 6,
          "tipo_secundario": null
      },
      {
          "codigo": 133,
          "nome": "eevee",
          "tipo_primario": 6,
          "tipo_secundario": null
      },
      {
          "codigo": 134,
          "nome": "vaporeon",
          "tipo_primario": 4,
          "tipo_secundario": null
      },
      {
          "codigo": 135,
          "nome": "jolteon",
          "tipo_primario": 18,
          "tipo_secundario": null
      },
      {
          "codigo": 136,
          "nome": "flareon",
          "tipo_primario": 3,
          "tipo_secundario": null
      },
      {
          "codigo": 137,
          "nome": "porygon",
          "tipo_primario": 6,
          "tipo_secundario": null
      },
      {
          "codigo": 138,
          "nome": "omanyte",
          "tipo_primario": 10,
          "tipo_secundario": 4
      },
      {
          "codigo": 139,
          "nome": "omastar",
          "tipo_primario": 10,
          "tipo_secundario": 4
      },
      {
          "codigo": 140,
          "nome": "kabuto",
          "tipo_primario": 10,
          "tipo_secundario": 4
      },
      {
          "codigo": 141,
          "nome": "kabutops",
          "tipo_primario": 10,
          "tipo_secundario": 4
      },
      {
          "codigo": 142,
          "nome": "aerodactyl",
          "tipo_primario": 10,
          "tipo_secundario": 7
      },
      {
          "codigo": 143,
          "nome": "snorlax",
          "tipo_primario": 6,
          "tipo_secundario": null
      },
      {
          "codigo": 144,
          "nome": "articuno",
          "tipo_primario": 12,
          "tipo_secundario": 7
      },
      {
          "codigo": 145,
          "nome": "zapdos",
          "tipo_primario": 18,
          "tipo_secundario": 7
      },
      {
          "codigo": 146,
          "nome": "moltres",
          "tipo_primario": 3,
          "tipo_secundario": 7
      },
      {
          "codigo": 147,
          "nome": "dratini",
          "tipo_primario": 14,
          "tipo_secundario": null
      },
      {
          "codigo": 148,
          "nome": "dragonair",
          "tipo_primario": 14,
          "tipo_secundario": null
      },
      {
          "codigo": 149,
          "nome": "dragonite",
          "tipo_primario": 14,
          "tipo_secundario": 7
      },
      {
          "codigo": 150,
          "nome": "mewtwo",
          "tipo_primario": 9,
          "tipo_secundario": null
      }
    ])
  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db, client) {
    await db.collection('pokemons').deleteMany({});
  }
};
