// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (err, client) => {
  if (err) {
    return console.log('Unable to connec to mongodb sever');
  }
  console.log('Connected to MongoDb sever');

  var db = client.db('TodoApp');

  db.collection('Users').find({name: "Aaryan Budhiraja"}).toArray().then((docs) =>  {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)  =>  {
    console.log('ERROR!', err);
  });
  //   db.close();
});
