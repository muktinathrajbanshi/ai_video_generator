import { useState } from "react";
import axios from "axios";

function UploadForm({ setVideo }) {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null); // preview selected image

  const API_URL = import.meta.env.VITE_API_URL; // your backend

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file)); // live preview
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !prompt) return alert("Upload image and enter prompt!");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("prompt", prompt);

      const res = await axios.post(`${API_URL}/api/video/generate`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setVideo(res.data.videoUrl);
    } catch (err) {
      console.error(err);
      alert("Video generation failed (no real AI API yet)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-card">
      <h2>Upload Image & Enter Prompt</h2>

      {preview && (
        <img
          src={preview}
          alt="Preview"
          style={{ maxWidth: "100%", marginBottom: "15px", borderRadius: "8px" }}
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      <input
        type="text"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Generating..." : "Generate Video"}
      </button>
    </form>
  );
}

export default UploadForm;