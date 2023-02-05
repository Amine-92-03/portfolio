// const { MongoClient } = require("mongodb");
// require("dotenv").config();

// let dbConnection;
// const urlAtlas = `mongodb+srv://amine:${process.env.DB_PASSWORD}@cluster0.yzznkac.mongodb.net/?retryWrites=true&w=majority`;

// // let urlLocal = 'mongodb://localhost:27017/bookStore'
// module.exports = {
//   connectToDb: (cb) => {
//     // MongoClient.connect('mongodb://localhost:27017/bookStore') // local mongoDb
//     MongoClient.connect(urlAtlas) // atlas mongoDb
//       .then((client) => {
//         dbConnection = client.db();
//         return cb();
//       })
//       .catch((err) => {
//         console.log(err);
//         return cb(err);
//       });
//   },
//   getDB: () => dbConnection,
// };
