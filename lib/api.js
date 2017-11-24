const os = require('os');
const multer = require('multer');
const uploader = multer({ dest: os.tmpdir() }).single('file');

exports.getFileSize = function(req, res) {
  console.log('Request for file size received');
  uploader(req, res, function(err) {
    if(err) {
      console.log('Uploader error \n' + err);
      return res.status(500).send(err);
    }

    console.log(`The size of the file is ${req.file.size} bytes`);

    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({ size: req.file.size}));
  })
}
