const axios = require("axios");

exports.generateVideo = async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const image = req.file;

    // ⚠️ TEMP (Fake API for now)
    const response = await axios.post(
      "https://api.fake-ai.com/generate-video",
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

    res.json({
      success: true,
      videoUrl: response.data.video,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Video generation failed",
    });
  }
};