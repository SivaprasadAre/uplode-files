var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer();
 
router.post('/profile', upload.none(), function (req, res, next) {
    console.log(req);
    res.status(200).send({
      masseg: "Seliose"
    });
});
// 
router.post('/', upload.any(), function (req, res, next) {
    console.log(req.files);
    res.status(200).send({
      masseg: "Seliose"
    });
});

module.exports = router;
