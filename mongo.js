const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'mybase';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);
  const collection = db.collection('collection'); 

  collection.find({ "statut": "actif" }).toArray((err, documents) => {
    if (err) throw err;

    console.log(documents);
    client.close();
  });
});