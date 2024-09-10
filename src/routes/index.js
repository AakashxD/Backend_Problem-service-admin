const express= require('express');

const v1Router=require('./v1');
// upcomming routers continues with v1 and then / problem
const apiRouter=express.Router();

apiRouter.use('/v1',v1Router);

module.exports= apiRouter;
