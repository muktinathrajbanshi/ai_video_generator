import { useState } from "react";
import axios from "axios";

function UploadForm({ setVideo }) {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null); // <-- preview state

  const API_URL = import.meta.env.VITE_API_URL; // backend port

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      // Create a temporary URL to show image in UI
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!image || !prompt) {
      alert("Please upload an image and enter a prompt!");
      setLoading(false);
      return;
    }

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
      alert("Video generation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "20px auto" }}>
      <input type="file" onChange={handleFileChange} required />
      
      {preview && (
        <div style={{ margin: "10px 0", textAlign: "center" }}>
          <p>Selected Image Preview:</p>
          <img
            src={preview}
            alt="Preview"
            style={{ maxWidth: "300px", maxHeight: "300px", border: "2px solid #ccc" }}
          />
        </div>
      )}
      
      <input
        type="text"
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        required
      />
      <button type="submit">{loading ? "Generating..." : "Generate Video"}</button>
    </form>
  );
}

export default UploadForm;