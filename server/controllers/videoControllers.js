const Video = require("../models/Video");
const axios = require("axios");

exports.generateVideo = async (req, res) => {
  try {
    const { prompt, userId } = req.body;
    const image = req.file;

    // Real AI API request (example Runway / Pika)
    const response = await axios.post(
      "https://api.runwayml.com/v1/generate",
      {
        prompt,
        image: image.path,
      },
      { headers: { Authorization: `Bearer ${process.env.API_KEY}` } }
    );

    const videoUrl = response.data.video;

    // Save in DB
    const newVideo = await Video.create({ userId, prompt, videoUrl });
    res.json({ videoUrl, id: newVideo._id });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Video generation failed" });
  }
};