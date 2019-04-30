const mongoose = require('mongoose');

const neighborhoodSchema = mongoose.Schema({
    // _neighborhhod_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     require:ture
    // },
    neighborhood_zipCode:{
        type:String,
        require:true,
        unique:true
    },
    neighborhhod_city:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
    },
    neighborhood_name:String,
    neighors:Number
});

module.exports = mongoose.model('Neighborhood',neighborhhodSchema);