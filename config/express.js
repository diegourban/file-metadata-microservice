const express = require('express');
const consign = require('consign');

module.exports = function() {
  var app = express();

  app.use(express.static('public'));

  consign({cwd: 'lib'})
  .include('api.js')
  .then('route.js')
  .into(app);

  return app;
}
