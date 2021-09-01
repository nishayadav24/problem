

const Model = require('../models/models');
const Model2 =require('../models/models2');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

exports.insert = async (opts) => {
    try {
    
     data = await Model.create(opts);  
        return {
            success: true,
            data: data
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.list = async (opts) => {
    try {
        const List = await Model.find(opts)
        return {
            success: true,
            data: List
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.update = async ( opts) => {
    try {
     await Model.findByIdAndUpdate( {"_id": ObjectId(opts.id)});
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.checklocation = async (opts) => {
    try {
    
     data = await Model2.create(opts);  
      Distance = await Model2.aggregate([
        {
          $geoNear:
          {
            near: {
              type: "Point",
              coordinates: [data.long, data.lat]
            },
            distanceField: "UserToDistance",
            $maxDistance: maxDistance,
            spherical: true,
            key: 'location'
          }
        }, {
          $match: {
            _id: ObjectId(id)
          }
        }
      ]);

      console.log(Distance);
        return {
            success: true,
            data: data
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}



