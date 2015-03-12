/**
 * Created by MYQ1991 on 15/1/27.
 */
var path=require('path');
exports.IO=require('socket.io').listen(require('http').createServer().listen(require(path.join(__dirname,'/../../config.json')).WebSocket));