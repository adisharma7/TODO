 
//getting the express module
 const express= require('express');


 //using the router of the express
  const router = express.Router();


//telling the router to go to the newtodoc in the new controller
router.get('/ntodo',newTodoRCont.newtodoc);


//exporting the router
  module.exports=router;