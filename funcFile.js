
var mongoose = require('mongoose');
mongoose.connect('mongodb://tz.zohar:z37893789@ds023452.mlab.com:23452/ws_student');
var User = require('./students');
var UserG=require('./grades');
var result;
var gradeResult;
var conn = mongoose.connection; //reference to the connection

//err listiner
conn.on('error', function(err){
    console.log('connection error'+err);
});

conn.once('open', function(){
    User.find({}, function(err, user){ 
        if(err) throw err;
        console.log(user);
        result=user;
       // mongoose.disconnect();
     });
    UserG.find({}, function(err, userG){ 
        if(err) throw err;
        console.log(userG);
        gradeResult=userG;
       // mongoose.disconnect();
     });
    
});

//the func returns info over the students in the database
 //conn.once('open', function(){
exports.getAllStudents = function(){
    return result;
    }
//});


    // the func gets name of a student and returns info about him
exports.getStudInfo = function(value){
    for(var k in result){
            if(result[k].name==value){
                return(result[k]);
            }
        }  
}



//the func gets a year value and returns info about excellentStudents
exports.excellentByYear = function(value){
    var resultArr=[];
    if(value>=1 && value<=3){
        for(var i in result){
            if(result[i].Educational_year ==value){
                for(var j in gradeResult){
                    if(gradeResult[j].grade >=90 && result[i].name==gradeResult[j].name){
                            resultArr.push(result[i]);
                    }
                }
            }
        }
    }
    return resultArr;
}

exports.excellentStudent = function(){
    var resultArr=[];
        for(var i in gradeResult){
            if(gradeResult[i].grade >=90){
                for(var j in result){
                    if(result[j].name==gradeResult[i].name){
                            resultArr.push(result[j]);
                    }
                }
            }
        }
 
    return resultArr;
}



