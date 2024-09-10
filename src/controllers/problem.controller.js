const { StatusCodes } =require('http-status-codes');
const NotImplemented = require('../errors/NotImplemented.error');
function addProblem(req,res,next){
    try {
        throw new NotImplemented('addProblem')
        } catch (error) {
          next(error);
        }
}

function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        mes:"not implemented"
       });
}
function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        mes:"not implemented"
       });
}
function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        mes:"not implemented"
       });
}
function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        mes:"not implemented"
       });
}
module.exports={
    addProblem,
    deleteProblem,
    getProblem,
    getProblems,
    updateProblem
}
