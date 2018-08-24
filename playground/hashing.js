const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var pass = '123abc!';

bcrypt.genSalt(10, (err, salt)  =>  {
  bcrypt.hash(pass, salt, (err, hash) =>  {
    console.log(hash);
  });
});

var hashedpass = '$2a$10$RZVAPP3dYshwp74c4Gnlx.aWbKvTlG15gYB5wydHsLD.GbAyr3/vy';

bcrypt.compare(pass, hashedpass, (err, res) =>  {
  console.log(res);
});
// var data = {
//   id: 10
// }
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);
//
//
// // var msg = 'I am user 1';
// // var hash = SHA256(msg).toString();
// //
// // console.log(`Msg: ${msg}`);
// // console.log(`Hash: ${hash}`);
// //
// // var data = {
// //   id: 4
// // };
// //
// // var token = {
// //   data: data,
// //   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// // }
// //
// // var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// //
// // if(resultHash === token.hash) {
// //   console.log('Data was not changed');
// // } else {
// //   console.log('Data waschanged dont trust');
// // }
