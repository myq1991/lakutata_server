/**
 * Created by MYQ1991 on 15/3/22.
 */
exports.Run=function(data,callback){
    console.log(data.message);
    var result="test success";
    callback(null,result);
}