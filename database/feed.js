const mongoose = require('mongoose');
const schema = mongoose.Schema;
const feed = new schema({
    name : {type:String},
    email:{type:String,unique:true},
    mobile:{type:String},
    message:{type:String},
    created_at:{type: Date, default: Date.now}
});
module.exports = mongoose.model('feed',feed);