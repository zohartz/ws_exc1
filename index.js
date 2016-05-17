/*var mongoose = require('mongoose');
mongoose.connect('mongodb://tz.zohar:z37893789@ds023452.mlab.com:23452/ws_student');
var User = require('./students');

var conn = mongoose.connection; //reference to the connection
*/
var express = require('express');
var app = express();
var EventEmitter = require('events');
var port = process.env.PORT || 3000;
var func = require('./funcFile');


//will show all students in database
app.get('/', function(req,res){
    res.send(func.getAllStudents());
});

//will show information about specific student 
app.get('/getStudInfo/:value', function(req,res){
    var value = req.params.value;
    res.send(func.getStudInfo(value));
});


// will show info about students with grade over 90 (include 90)
app.get('/excellentStudent', function(req,res){
    var value = req.params.value;
    res.send(func.excellentStudent());
});


app.get('/excellentByYear/:value', function(req,res){
    var value = req.params.value;
    res.send(func.excellentByYear(value));
});



app.listen(port);
console.log("listening on port 3000");

//err listiner
/*conn.on('error', function(err){
    console.log('connection error'+err);
});



conn.once('open', function(){
    //get all the users
    //find is action on the model
    User.find({name:'Zohar'}, function(err, user){ 
        if(err) throw err;
        console.log(user);
        mongoose.disconnect();
    });
});*/






