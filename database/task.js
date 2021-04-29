const mongoose = require('mongoose');
const schema = mongoose.Schema;
const task = new schema({
    sno :{type:String},
    taskname : {type:String},
    tasklabels: {type:String},
    taskdescription:{type:String},
    dateadded: {type:Date},
    datecompletion: {type:Date},
    status:{type:String}
});
module.exports = mongoose.model('task',task);