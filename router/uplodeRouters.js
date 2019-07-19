const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer({ dest: 'uploads/' })

router.post("/single", upload.single("myFile"), function(req, res) {
  console.log(req.file);
  res.status(200).send({
    masseg: "Seliose"
  });
});
router.post("/mult", upload.array("myFile", 12), function(req, res) {
  console.log(req.files);
  res.status(200).send({
    masseg: "Seliose"
  });
});
var cpUpload = upload.fields([{ name: 'myFile', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
router.post('/profile', cpUpload, function (req, res, next) {
    console.log(req.files);
    res.status(200).send({
      masseg: "Seliose"
    });
})

module.exports = router;
