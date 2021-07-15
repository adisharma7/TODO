


// importing express 
 const express = require('express');

 //using the express router
 const router = express.Router();


// getiing the logincont file from the controller for futher use 
 const loginCont = require('../controller/logincont');




//when the user gives /login then get the login file from the controller
router.get('/login',loginCont.login);



// exporting this fileto the router
  module.exports= router;