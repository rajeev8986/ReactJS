const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const mongoose = require('mongoose');
const todoRoutes = express.Router();

let Todo = require('./todo.model');
app.use(cors());
app.use(bodyParser.json());
app.use('/todos',todoRoutes);

todoRoutes.route('/').get(function(req,res){
    Todo.find(function(err,todos){
        if(err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    })
});

todoRoutes.route('/add').post(function(req,res){
    let todo = new Todo(req.body);
    todo.save().then(todo => {
        res.status(200).json({'todo' :'added successfully'});
    }).catch(err => {
        res.status(400).send('adding failed');
    })
});

mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open',function() {
    console.log('Mongo db conncetion established successfully');
})
app.listen(PORT,function(){
    console.log("Server is running on port: " + PORT);
})