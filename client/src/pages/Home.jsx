import { useState } from "react";
import UploadForm from "../components/UploadForm";
import VideoPlayer from "../components/VideoPlayer";

function Home() {
  const [video, setVideo] = useState(null); // stores generated video URL

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        🎬 AI Image → Video Generator
      </h1>

      {/* Upload form */}
      <UploadForm setVideo={setVideo} />

      {/* Video player */}
      {video && <VideoPlayer video={video} />}
    </div>
  );
}

export default Home;