// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (err, client) => {
  if (err) {
    return console.log('Unable to connec to mongodb sever');
  }
  console.log('Connected to MongoDb sever');

  var db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b76572856fb4f19caa1713a")
  }, {

    $set: {
      name: "Aaryan"
    },
    $inc: {
      age: 1
    }

  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  //   db.close();
});
