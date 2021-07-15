

//this is exporting the home file to other file for use

module.exports.home=function(req,res){

  //this is returning the html page 

     return res.render('homepage1',{
         title:'HomePage'

     });
     
}


///////////////////////////////######################







//render the signup up page (homepage)

module.exports.signup=function(req,res){

  return res.render('homepage1');
};






//get the sign up data 
module.exports.create=function(req,res){



};







module.exports.createSession = function(req,res){

//

}

