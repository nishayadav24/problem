

 const dataServices           = require('../services/services');
 const responses              = require('../responses/responses');
 
 
 exports.create = async (req, res) => {
    let requestBody     = { ...req.body }
     try {
         const response = await dataServices.insert( requestBody);
            if (response.success == true) {
             return responses.success(res, response, null);
         }
         return responses.alreadyExists(res, response);
     } catch (error) {
         console.log(error);
         return responses.internalServerError(res);
     }
 };
 
 exports.list = async (req, res) => {
     let requestBody     = { ...req.body }
 
     try {
         const response = await dataServices.list(requestBody);
         if (response.success == true) {
             return responses.success(res, response, null);
         }
         return responses.noDataFound(res, response);
     } catch (error) {
         return responses.internalServerError(res);
     }
 }
 
  exports.update = async (req, res) => {
    let requestBody   = { ...req.body };
    try {
    

      const response = await dataServices.update( requestBody);
      if(response.success){
        return responses.success(res, response.data);
      }
      return responses.failure(res, {}, response.error);
    } catch (error) {
      return responses.internalServerError(res);
    }
  };
 
  exports.checklocation = async (req, res) => {
    let requestBody     = { ...req.body }
     try {
         const response = await dataServices.checklocation( requestBody);
            if (response.success == true) {
             return responses.success(res, response, null);
         }
         return responses.alreadyExists(res, response);
     } catch (error) {
         return responses.internalServerError(res);
     }
 };
 