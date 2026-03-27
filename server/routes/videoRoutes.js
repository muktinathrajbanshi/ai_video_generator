const express = require("express");
const multer = require("multer");
const { generateVideo } = require("../controllers/videoController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/generate", upload.single("image"), generateVideo);

module.exports = router;