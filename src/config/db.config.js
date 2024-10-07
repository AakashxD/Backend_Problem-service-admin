const mongoose =require('mongoose');
const {MONGO_URI}=require("./server.config")
const connect= async()=>{
   try {
      
 
   await mongoose.connect(MONGO_URI);

   } catch (error) {
    console.log("unable to connect to database");
    console.log(error);
   }
}
module.exports=connect;