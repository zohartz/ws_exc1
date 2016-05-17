var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchemaG = new schema({
    name: {type:String, index:1, requier:true, unique:true},
    grade: Number,
    
}, {collection: 'studentGrades'});

var UserG = mongoose.model('UserG', userSchemaG); //connect schema
module.exports = UserG;