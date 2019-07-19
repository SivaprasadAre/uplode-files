const express = require("express");
const router = express.Router();

router.use("/uplode", require("./uplodeRouters"));
router.use("/user", require("./userRouters"));
router.use("/videos", require("./videosRouters"));

module.exports = router;
