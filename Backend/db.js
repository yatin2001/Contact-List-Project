//connection to mongo 
const config = require('./config');
const { MongoClient } = require("mongodb");


//uri for the mongo db server
const uri = `mongodb+srv://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@cluster0.im7d8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// client for the mongo db server
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

//var to send later
let dbConnection;

module.exports = {
  //abstract function to connect to the mongo db server
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("contacts");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },
 // abstract function to get the db connection 
  getDb: function () {
    return dbConnection;
  },
};