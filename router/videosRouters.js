var express = require("express");
var router = express.Router();
var multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});

const upload = multer({ storage: storage });

router.post("/", upload.single('myFile'), function(req, res, next) {
  console.log(req.file);
  res.status(200).send({
    masseg: "Seliose"
  });
});

module.exports = router;
