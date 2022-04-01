const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    displayName : {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    birth: {
        type:String,
        require:true
    },
    profileUrl: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    }

})
module.exports = mongoose.model('User',userSchema)