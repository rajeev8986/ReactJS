const mongoose = require('mongoose');
const schema = mongoose.Schema;

let todo =  new schema({
    todo_desc : {type:String},
    todo_resp : {type:String},
    todo_pri : {type:String},
    todo_comp : {type:Boolean}
});

module.exports = mongoose.model('Todo',todo);