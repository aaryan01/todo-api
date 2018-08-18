const {mongoose}  = require('./../server/db/mongoose');
const {Todo}  = require('./../server/models/todo');
const {User}  = require('./../server/models/user');

var id = '5b76cdc92a2a363d3d9aabf1';

// Todo.find({
//   _id: id
// }).then((todos) =>  {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) =>  {
//   console.log('Todo', todo);
// });

User.findById(id).then((user) =>  {
  if(!user) {
    console.log('Error!');
  }
  console.log(user);
}, (e)  =>  {
  console.log(e);
});
