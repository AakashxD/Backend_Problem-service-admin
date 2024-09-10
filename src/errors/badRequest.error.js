const { model } = require("mongoose");
const BaseError = require("./baseError");
const {StatusCodes} =require('http-status-codes')
class BadRequest extends BaseError{
     constructor(propertyName,details){
         super("badRequest",StatusCodes.BAD_REQUEST,`invalid structure for ${propertyName}`,details)
     }
}
module.exports=BadRequest;