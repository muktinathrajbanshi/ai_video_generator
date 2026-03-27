import { useState } from "react";
import UploadForm from "../components/UploadForm";
import VideoPlayer from "../components/VideoPlayer";

function Home() {
  const [video, setVideo] = useState("");

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>🎬 AI Image → Video Generator</h1>
      <UploadForm setVideo={setVideo} />
      <VideoPlayer video={video} />
    </div>
  );
}

export default Home;