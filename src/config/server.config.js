const dotenv=require('dotenv')
dotenv.config();
module.exports={
    PORT : process.env.PORT || 3008,
    MONGO_URI:process.env.MONGO_URI
}
