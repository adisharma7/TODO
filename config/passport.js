
//acquring the passport  lib
const passport = require('passport');


// getting the local passport strategy
const LocalStrategy= require('passport-local').Strategy;

//getting the signup file in the user
const user = require('../models/signup');




//authentication using passport
 passport.use(new LocalStrategy({
  usernameField:'email'},

function(email,password,done){

    //find the user and establish the identity

    user.findOne({
        email:email}, function(err,user){

            if(err){
                console.log('there is an error in finding a user');
                return done(err);
            }
             if(!user|| user.password !=password){

                console.log('incorrect user or password');

                return done(null,false);
             }

              return done(null,user);
                 

        });

}

 ));




 //serializing the user which key has to be kept in the cookies


  passport.serializeUser(function(user,done){
      done(null,user.id);
  });






 //deserializing the user which key has to be kept in the cookies
 passport.deserializeUser(function(id,doone){
  user.findById(id,function(err,user){

    if(err){
        console.log('there is an error in finding a user');
        return done(err);
    }

    return done(null,user);
  })

 });



 module.exports=passport;