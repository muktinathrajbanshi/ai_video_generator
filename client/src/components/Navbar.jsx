function Navbar({ username }) {
  return (
    <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>🎬 AI Video Generator</h1>
      {username && <span>Hello, {username}</span>}
    </div>
  );
}

export default Navbar;

