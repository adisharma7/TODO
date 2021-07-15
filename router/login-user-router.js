

// again for this user also it is importing all the express files
const express= require('express');


//setting up a router so that the all the properties of the  express Router is in router
const router= express.Router();


//getting the login-user file from the controller
const loginUserCont=require('../controller/login-user');

 

//telling the user to get the user file from conroller
 router.get('/user',loginUserCont.user);



//exporting the route to be present to the index
  module.exports=router;


