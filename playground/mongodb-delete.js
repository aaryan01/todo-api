// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb sever');
  }
  console.log('Connected to MongoDb sever');

  var db = client.db('TodoApp');

//delete

 db.collection('Todos').findOneAndDelete({text: 'lol'}).then((result)  =>  {
    console.log(result);
  });

  //   db.close();
});
