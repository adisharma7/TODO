

//requiring the mongoose 
const mongoose= require('mongoose');

//creating a schema
const  tasklistschema= new mongoose.Schema({

    desc: {

        type:String,
        required:true,


    },
    nameoftask:{


        type:String,
        required:true
    },
    date:{


        type:Date,
        required:true
    }





}
);






//for exporting the file creating a tasklist
const Tasklist =mongoose.model('Tasklist',tasklistschema);


//exporting the tasklist
module.exports=Tasklist;