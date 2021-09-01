const mongoose            = require('mongoose');
const Schema              = mongoose.Schema;

const latSchema = new Schema({
        lat: Number,
        long: Number
},
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

module.exports = mongoose.model("distance", latSchema);