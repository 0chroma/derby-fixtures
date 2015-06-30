var racer = require("racer");
var liveDbMongo = require('livedb-mongo');

module.exports = function(cb){
  var redis = require('redis').createClient();
  redis.select(12);
  var store = racer.createStore({
    db: liveDbMongo('mongodb://localhost:27017/example-fixtures?auto_reconnect', {safe: true}),
    redis: redis
  });
  cb(null, store);
};
