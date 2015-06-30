Derby Fixtures
==============
Scripts for generating sample data for your apps

For example configurations/fixtures, see the `example-*` files (copy these into your project directory and customize as necessary)

CLI Usage
---------

`derby-fixtures load conf.js fixtures.json` will create a store from `conf.js`, and load all the data from `fixtures.json` into livedb.

Programmatic Usage
------------------

```javascript
var derbyFixtures = require('derby-fixtures');
var fixtures = require('./test/fixtures/myFixtures.json');
require('./test/fixtures-conf.js')(function(err, store) {
  derbyFixtures.load(store, fixtures, function(err){
    console.log("done!");
  });
});

```
