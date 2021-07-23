const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://user:jEa44Mcugq@.9zq@cluster0.qla1a.mongodb.net/STORE_FINDER?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});