

//importig all the express files
const express= require('express');




//getting the files from different folder for futher use 
const db=require('../config/mongoose');
const Tasklist=require('../models/tasklist');
const Signup=require('../models/signup')


 
 // setting the express router to our router so that we can use the properties of it 
const router = express.Router();



//middleware to encode the req
router.use(express.urlencoded());



//making the controller available for futher use 
const homecont=require('../controller/home-controller');



// const usersignupcont=require('../controller/home-controller');
const logincontroller=require('../controller/logincont');



//structure of task list (array)
var task=[

    {
        desc:"",
        nameoftask:"",
        date:""

    }
];




router.get('/ntodo',function(req,res){


     Tasklist.find({},function(err,tasks){


        if(err){


            console.log('err in fetching contact from db');
             return;
        }
          
    return res.render('newtodo1',{
    
        taskList:tasks

     });


    
    
    });
});







//telling the main router to create a new task
router.post('/create-task',function(req,res){

 


    console.log(req.body);


    Tasklist.create({
        desc:req.body.desc,
         nameoftask:req.body.nameoftask,
         date:req.body.date
     
     
         },
         function(err,newlist){
             if(err){
                 console.log('error in creating a list'); 
                 return;
             }
         
         
         console.log('cretated a list ', newlist);
     
         return res.redirect('back');
         });


    
    
   });




    











//telling the router to get the file when / is given in the url
router.get('/',homecont.home);
router.get('/login',logincontroller.login);







//deleting the task
router.get('/delete',function(req,res){


    let id=req.query.id;
    console.log(req.query.id );




   

// find the task using id and delete it 

        Tasklist.findByIdAndDelete(id,function(err){

            if(err){

        console.log('error in deleting ');
        return;

            };


        });



       return res.redirect('back');
  


});






router.get('/ntodo',function(req,res){


    Tasklist.find({},function(err,tasks){


       if(err){


           console.log('err in fetching contact from db');
            return;
       }
         
   return res.render('newtodo1',{
   
       taskList:tasks

    });


   
   
   });
});






 router.get('/signup',function(req,res){
     Signup.find({},function(err,){
         if(err){
             console
         }
     })
 })


 router.post('/new-user',function(req,res){


    Signup.create({
   username:req.body.username,
    emaiil:req.body.emaiil,
    password:req.body.password


    },
    function(err,newuser){
        if(err){
            console.log('error in creating a contact'); 
            return;
        }
    
    
    console.log('cretated a new user ',newuser);

    return res.redirect('/ntodo');
    });
    

   
 });






 ///////////////////////////////######################




 router.get('/signup',homecont.signup);
 router.get('/login',logincontroller.login);











//exporting the router 
 module.exports=router;