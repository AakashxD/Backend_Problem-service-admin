const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title cannpt be empty"],
  },
  description: {
    type: String,
    required: [true, "description cannpt be empty"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: [true, "Difficulty is not defined "],
    default: "easy",
  },
  // [{input :'5',output :'10'},{input:'2',output:'20'}]
  testCases:[{
    input:{
        type:String,
        required:true,
    },
    output:{
        type:String,
        required:true
    }
  }],
  editorial:{
    type:String
  }
});
const Problem=mongoose.model('problem',ProblemSchema);
module.exports=Problem;