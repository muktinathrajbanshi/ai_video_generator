import { useState } from "react";
// import UploadForm from "../components/UploadForm";
// import VideoPlayer from "../components/VideoPlayer";

function Home() {
  const [video, setVideo] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🎬 AI Video Generator</h1>

      <UploadForm setVideo={setVideo} />

      {video && <VideoPlayer video={video} />}
    </div>
  );
}

export default Home;