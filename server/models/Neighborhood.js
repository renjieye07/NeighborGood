const mongoose = require('mongoose');

const neighborhoodSchema = mongoose.Schema({
    // _neighborhhod_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     require:ture
    // },
    neighborhhod_zipCode:{
        type:String,
        require:ture,
        unique:ture,
        minlength:5,
        maxlength:5
    },
    neighborhhod_city:{
        type:mongoose.Schema.Types.ObjectId,
        require:ture,
        minlength:3,
        maxlength:100
    },
    neighborhhod_name:{
        type:String,
        require:ture,
        minlength:3,
        maxlength:100
    },
    neghors:Number //may need a function to calculate the total number of users in the Neighborhhod
});

module.exports = mongoose.model('Neighborhhod',neighborhhodSchema);