const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  videoUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Video", VideoSchema);