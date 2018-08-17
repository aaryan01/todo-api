// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (err, client) => {
  if (err) {
    return console.log('Unable to connec to mongodb sever');
  }
  console.log('Connected to MongoDb sever');

  // var db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   return console.log(JSON.stringify(result.ops, undefined, 2));
  //   db.close();
  // });
  // db.collection('Users').insertOne({
  //   name: 'Aaryan Budhiraja',
  //   age: 19,
  //   lcoation: 'Bits Pilani'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   return console.log(result.ops[0]._id.getTimestamp());
  //   db.close();
  // });
});
