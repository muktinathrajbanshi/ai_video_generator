import { useState } from "react";
import axios from "axios";

function UploadForm({ setVideo }) {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("prompt", prompt);

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5005/api/video/generate",
        formData
      );

      setVideo(res.data.videoUrl);

    } catch (err) {
      console.error(err);
      alert("Error generating video");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <br /><br />

      <input
        type="text"
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        required
      />
      <br /><br />

      <button type="submit">
        {loading ? "Generating..." : "Generate Video"}
      </button>
    </form>
  );
}

export default UploadForm;