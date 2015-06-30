module.exports = {
  load: function(store, fixtures, cb) {
    var model = store.createModel();
    var collections = fixtures.collections;
    for(var collection in collections){
      var docs = collections[collection].documents;
      for(var i=0; i<docs.length; i++){
        var doc = docs[i];
        model.add(collection, doc);
      }
    }
    model.whenNothingPending(function() {
      model.close(cb);
    });
  }
};
