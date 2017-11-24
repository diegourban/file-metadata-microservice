module.exports = function(app) {
  app.post('/get-file-size', app.api.getFileSize);

  app.get("/", function (request, response) {
    response.sendFile(__dirname + '/public/index.html');
  });
}
