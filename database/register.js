const mongoose = require('mongoose');
const schema = mongoose.Schema;
const register = new schema({
    name : {type:String},
    email:{type:String,unique:true},
    mobile:{type:String},
    password:{type:String},
    created_at:{type: Date, default: Date.now}
});
module.exports = mongoose.model('register',register);