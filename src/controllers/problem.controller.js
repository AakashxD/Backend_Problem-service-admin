const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/NotImplemented.error");
const {ProblemService} = require("../services/index.js");
const {ProblemRepository} = require("../repositories/index.js");
    // Create an instance of ProblemService
const problemService = new ProblemService(new ProblemRepository());
async function addProblem(req, res, next) {
  try {
 
    // Call the addProblem method from the service
    const newProblem = await problemService.createProblem(req.body);

    // Return a response with the created problem
    console.log("new Problem",newProblem);
    return res.status(StatusCodes.CREATED).json({
      success:true,
      message:"sucessfully created a new problem",
      error:{},
      data:newProblem

    });
  } catch (error) {
    next(error);
  }
}
async function getProblem(req, res,next) {
  try {
    const { id } = req.params;
   
    const getproblem = await problemService.getProblem(id);

    if (!problem) {
      // Problem not found, return 404 status code
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Problem not found" });
    }
   return res.status(StatusCodes.OK).json(problem);
  } catch (error) {
    next(error);
  }
}
 async function getProblems(req, res, next) {
  try {
    const problemService = new ProblemService(new ProblemRepository());
    const getproblems = await  problemService.getAllProblems();
   return res.status(StatusCodes.OK).json(getproblems);
  } catch (error) {
    next(error);
  }
}
async function deleteProblem(req, res, next) {
  try {
    
    const problemSerice=new ProblemService(new ProblemRepository());
    const delProblem=await problemSerice.deleteProblem();
    return res.status(StatusCodes.OK)

  } catch (error) {
    next(error);
  }
}
function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}
module.exports = {
  addProblem,
  deleteProblem,
  getProblem,
  getProblems,
  updateProblem,
};
