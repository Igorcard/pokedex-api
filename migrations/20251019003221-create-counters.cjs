module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    await db.collection('counters').insertMany([
      {
        _id: "tipos_codigo",
        seq: 18
      },
      {
        _id: "pokemons_codigo",
        seq: 150
      }
    ])
  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db, client) {
    await db.collection('counters').deleteMany({
      _id: { $in: ["tipos_codigo", "pokemons_codigo"] }
    });
  }
};