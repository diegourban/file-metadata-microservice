const express = require('./config/express');

const app = express();

var listener = app.listen(3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
