const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    Assignedto : {
        type:String,
        required : true
    },
    status : {
        type:Boolean,
        required : true
    },
    DueDate : {
        type: Date,
        required : true
    },
    Priority : {
        type: String,
        required : true
    },
    Comments : {
        type: String,
        required : true
    }

})

const TaskModel = mongoose.model('Tasks',TaskSchema);

module.exports = TaskModel;