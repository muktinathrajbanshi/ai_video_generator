function VideoPlayer({ video }) {
  if (!video) return null;

  return (
    <div className="video-card">
      <p>Generated Video</p>
      <video src={video} controls />
    </div>
  );
}

export default VideoPlayer;