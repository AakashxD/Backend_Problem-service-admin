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
    try {
        throw new NotImplemented('addProblem')
        } catch (error) {
          next(error);
        }
}
function getProblems(req,res,next){
    try {
        throw new NotImplemented('addProblem')
        } catch (error) {
          next(error);
        }
}
function deleteProblem(req,res,next){
    try {
        throw new NotImplemented('addProblem')
        } catch (error) {
          next(error);
        }
}
function updateProblem(req,res,next){
    try {
        throw new NotImplemented('addProblem')
        } catch (error) {
          next(error);
        }
}
module.exports={
    addProblem,
    deleteProblem,
    getProblem,
    getProblems,
    updateProblem
}
