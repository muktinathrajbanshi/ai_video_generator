import Navbar from "../components/Navbar";
import UploadForm from "../components/UploadForm";
import VideoPlayer from "../components/VideoPlayer";
import { useState } from "react";

function Home() {
  const [video, setVideo] = useState("");
  const userId = "userId_placeholder"; // Replace with logged-in user ID

  return (
    <div>
      <Navbar username="Muktinath" />
      <UploadForm userId={userId} setVideo={setVideo} />
      {video && <VideoPlayer video={video} />}
    </div>
  );
}

export default Home;