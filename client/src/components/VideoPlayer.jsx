function VideoPlayer({ video }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Result</h2>
      <video src={video} controls width="500" />
    </div>
  );
}

export default VideoPlayer;