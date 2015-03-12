/**
 * Created by MYQ1991 on 15/1/27.
 */
var online=require('./online.js');

exports.Run=function(data,callback){
    try{
        var list=online.GetOnlineList();
        callback(null,list);
    }catch(err){
        callback(err,null);
    }
}