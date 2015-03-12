/**
 * Created by MYQ1991 on 15/1/29.
 */
var path = require('path');
var db_operation = require(path.join(__dirname, '/../../Database'));
var online=require('./online.js');

exports.Run=function(data,callback){
    var SearchType=data.type;
    switch(SearchType){
        case 'ALL':{
            db_operation.findData_option('rooms',{},{"sort":["datetime","desc"]},function(err,result){
                if(!err){
                    callback(null,result);
                }else{
                    callback(err,null);
                }
            });
        }break;

        case 'TAG':{
            var tagName=data.tagName;
            db_operation.findData_option('rooms',{tags:{$all:[{tag:tagName}]}},{"sort":["datetime","desc"]},function(err,result){
                if(!err){
                    callback(null,result);
                }else{
                    callback(err,null);
                }
            });
        }break;

        default :callback('type error',null);
    }
}