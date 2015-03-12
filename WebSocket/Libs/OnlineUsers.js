/**
 * Created by MYQ1991 on 15/2/8.
 */
var online=require('./online.js');
var path = require('path');
var db_operation = require(path.join(__dirname, '/../../Database'));

exports.Run=function(data,callback){
    var UserEmail=data.email;
    var Tags_Array=data.tags;
    var onlineList=online.GetOnlineList();
    var onlineCount=onlineList.length;
    var tmpArray=[];//for contain all users email except requester.
    for(var i=0;i<onlineCount;i++){
        var tmpItem=onlineList[i];
        var tmpEmail=tmpItem.email;
        if(tmpEmail!==UserEmail){
            tmpArray.push(tmpEmail);
        }
    }

    next(0,tmpArray.length,[],function(err,array){
        if(!err){
            //need to re-order array
            callback(null,array);
        }else{
            callback(err,null);
        }
    });

    function next(index,length,array,callback){
        if(index<length){
            db_operation.findData('users',{email:tmpArray[index]},function(err,result){
                if(!err){
                    var name=result[0].name;
                    var email=result[0].email;
                    var portrait=result[0].portrait;
                    var obj={name:name,email:email,portrait:portrait};
                    array.push(obj);
                    index++;
                    next(index,length,array,callback);
                }else{
                    callback(err,null);
                }
            });
        }else{
            callback(null,array);
        }
    }

}

//var obj={name:followingName,email:followingEmail,portrait:followingPortrait,status:status};