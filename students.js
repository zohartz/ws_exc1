var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema({
        name: {type:String, index:1, requier:true, unique:true},
    last_name:{type:String},
    age: Number,
    Educational_year:Number
}, {collection: 'myStudents'});

var User = mongoose.model('User', userSchema); //connect schema
module.exports = User;