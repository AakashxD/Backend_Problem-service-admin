const express=require("express");

const {problemController} =require("../../controllers/index");

const problemRouter=express.Router();
// const problemRouter.get("/ping",problemController.)
problemRouter.get("/",problemController.getProblem);

problemRouter.get("/:id",problemController.getProblems);

problemRouter.put("/:id",problemController.updateProblem);

problemRouter.post("/",problemController.addProblem);

problemRouter.delete("/:id",problemController.deleteProblem);

module.exports={
    problemRouter
}