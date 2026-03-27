function VideoPlayer({ video }) {
  if (!video) return null;

  return (
    <div className="card" style={{ maxWidth: "500px", margin: "20px auto" }}>
      <video src={video} controls style={{ width: "100%", borderRadius: "15px" }} />
    </div>
  );
}

export default VideoPlayer;