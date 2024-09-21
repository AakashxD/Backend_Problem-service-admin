const { Problem } = require("../models");
class ProblemRepository {
  async createProblemR(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getProblemR(id){
    try {
      const problem = await Problem.findById(id);

      if (!problem) {
        throw error;
      }

      return problem;
          } catch (error) {
            throw error;
          }
  }
  async getAllProblemsR(){
    try {
        const problems= await Problem.find({});
        return problems;
    } catch (error) {
      console.log(error);
      throw error;

    }
  }
  async deleteProblemR(id){
    try {
        const del=await Problem.deleteOne(id);
    } catch (error) {
       console.log(error);
       throw error;

    }
  }
  async updateProblemR(id){
    try {
      
    } catch (error) {
      
    }
  }
}

module.exports=ProblemRepository;
