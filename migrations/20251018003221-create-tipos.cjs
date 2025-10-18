module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    await db.collection('tipos').insertMany([
      {
        "codigo": 1,
        "nome": "grass"
      },
      {
        "codigo": 2,
        "nome": "poison"
      },
      {
        "codigo": 3,
        "nome": "fire"
      },
      {
        "codigo": 4,
        "nome": "water"
      },
      {
        "codigo": 5,
        "nome": "bug"
      },
      {
        "codigo": 6,
        "nome": "normal"
      },
      {
        "codigo": 7,
        "nome": "flying"
      },
      {
        "codigo": 8,
        "nome": "fighting"
      },
      {
        "codigo": 9,
        "nome": "psychic"
      },
      {
        "codigo": 10,
        "nome": "rock"
      },
      {
        "codigo": 11,
        "nome": "ground"
      },
      {
        "codigo": 12,
        "nome": "ice"
      },
      {
        "codigo": 13,
        "nome": "ghost"
      },
      {
        "codigo": 14,
        "nome": "dragon"
      },
      {
        "codigo": 15,
        "nome": "dark"
      },
      {
        "codigo": 16,
        "nome": "steel"
      },
      {
        "codigo": 17,
        "nome": "fairy"
      },
      {
        "codigo": 18,
        "nome": "electric" 
      }
    ])
  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db, client) {
    await db.collection('tipos').deleteMany({});
  }
};
