const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/NotImplemented.error");
const { ProblemService } = require("../services/index.js");
const { ProblemRepository } = require("../repositories/index.js");
// Create an instance of ProblemService
const problemService = new ProblemService(new ProblemRepository());
async function addProblem(req, res, next) {
  try {
    // Call the addProblem method from the service
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "sucessfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}
async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "sucessfully created a new problem",
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}
async function getProblems(req, res, next) {
  try {
    const Allproblems = await problemService.getAllProblems();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "sucessfully fetch all new problem",
      error: {},
      data: Allproblems,
    });
  } catch (error) {
    next(error);
  }
}
async function deleteProblem(req, res, next) {
  try {

    const delProblem = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      status:true,
      message:"Problem deletd successfully",
      error:{},
      data: delProblem,
    });
  } catch (error) {
    next(error);
  }
}
async function updateProblem(req, res, next) {
  try {
    const updatedProblem=await problemService.deleteProblem(req.params.id);
    
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
