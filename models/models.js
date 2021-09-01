const mongoose            = require('mongoose');
const Schema              = mongoose.Schema;

const dataSchema = new Schema({
        name: String,
        minimum: Number,
        delFee: Number,
        Location : {
            type: String,
            Coordinates: Array
            },
        status: { type: Boolean, default: true }
},
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

module.exports = mongoose.model("data", dataSchema);