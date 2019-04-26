const mongoose = require('mongoose');

const neighborhoodSchema = mongoose.Schema({
    // _neighborhhod_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     require:ture
    // },
    neighborhhod_zipCode:{
        type:String,
        require:ture,
        unique:ture
    },
    neighborhhod_city:{
        type:mongoose.Schema.Types.ObjectId,
        require:ture,
    },
    neighborhhod_name:String,
    neghors:Number
});

module.exports = mongoose.model('Neighborhhod',neighborhhodSchema);