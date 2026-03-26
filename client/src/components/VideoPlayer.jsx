function VideoPlayer({ video }) {
  return (
    <div className="card">
      <video src={video} controls style={{ width: '100%', borderRadius: '15px' }} />
    </div>
  );
}

export default VideoPlayer;