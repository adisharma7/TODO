

//this is to set up express
const express = require('express');

//setting the port 
const port =8000;



// giving all the properties of express to app so that we can use it 
const app=express();



//setting up a session cookie
 const session=require('express-session');
const passport = require('passport');
const LocalStrategy= require('./config/passport');




  // using the imported index router
  app.use('/',require('./router/index'));
  


  


//this is telling the app to set a viewengine  for ejs files
app.set('view engine','ejs');

//set views to the ./views file
app.set('views','./views');




// setting up a cookie 

app.use(session({
  name:'todo',
  secret:'lalalala',
  saveUninitialized:false,
  resave:false,
  cookie:{
    maxAge:(1000 * 60 * 100)
  }

}));








//telling the app to use the folder assets for getting css
 app.use(express.static('assets'));

 







//this will help the app to the server on port and mentioning the error
  app.listen(port,function(err){

    if(err){
        console.log("there is an error in the server");

    }

     console.log(`server is  working on :${port}`);

  });




















