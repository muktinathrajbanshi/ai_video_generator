const axios = require("axios");
const fs = require("fs");
const Video = require("../models/Video");

exports.generateVideo = async (req, res) => {
  try {
    const { prompt } = req.body;
    const image = req.file;

    if (!image) return res.status(400).json({ error: "Image is required" });

    // Convert image to base64
    const imageBase64 = fs.readFileSync(image.path, { encoding: "base64" });

    // Call AI API
    const response = await axios.post(
      "https://api.runwayml.com/v1/generate",
      {
        prompt,
        image: imageBase64, // send as base64
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );

    // Replace with actual field from API response
    const videoUrl = response.data.video; 

    // Save to MongoDB
    const newVideo = await Video.create({ prompt, videoUrl });

    res.json({ videoUrl, id: newVideo._id });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Video generation failed" });
  }
};