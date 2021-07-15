
//this import all the function of mongoose to the varible 
const mongoose = require('mongoose');
 

//this helps to connect the mongoose to our db that we created
mongoose.connect('mongodb://localhost/task-List-db');

//once we have connected to the db then  the connection is set up in db
const db =mongoose.connection;

//db is throing the error
db.on('error',console.error.bind(console,'error in connecing to db'));



db.once('open',function(){

console.log('successful');


});