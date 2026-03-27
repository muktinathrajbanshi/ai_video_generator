const axios = require("axios");
const Video = require("../models/Video");

exports.generateVideo = async (req, res) => {
  try {
    const { prompt } = req.body;
    const image = req.file;

    // 🔥 Replace with real AI API
    const response = await axios.post(
      "https://api.runwayml.com/v1/generate",
      {
        prompt,
        image: image.path,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );

    const videoUrl = response.data.video;

    // Save to MongoDB
    const newVideo = await Video.create({
      prompt,
      videoUrl,
    });

    res.json({ videoUrl, id: newVideo._id });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Video generation failed" });
  }
};