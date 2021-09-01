
 const query = require('../query/query')
 
 exports.insert = async(opts) => {
     try {
         const daoResponse = await query.insert(opts);
          if (daoResponse.success == false) {
             return daoResponse;
         }
         return daoResponse;
 
     } catch (error) {
         throw error;
     }
 }
 
 exports.list = async (opts) => {
     try {
      const daoResponse = await query.list(opts);
         if (daoResponse.success == false) {
             return daoResponse;
         }
         return daoResponse;
 
     } catch (error) {
         throw error;
 
     }
 }
 
 
 exports.update = async (opts) =>{
     try {
         const daoResponse = await query.update(opts);
         if (daoResponse.success == false) {
             return daoResponse;
         }
         return daoResponse;
 
     } catch (error) {
         console.log(error);
         throw error;
     }
 }
 
 exports.checklocation = async (opts) => {
     try {
         const daoResponse = await query.checklocation(apiReference, opts);
         if (daoResponse.success == false) {
             return daoResponse;
         }
         return daoResponse;
 
     } catch (error) {
         throw error;
     }
 }
 
 
 
 