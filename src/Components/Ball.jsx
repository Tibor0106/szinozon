function Ball({ ball, onClick, b = false }) {
  return (
    <div onClick={onClick}>
      <div
        className={`ball ${b ? "s" : ""}`}
        style={{ backgroundColor: ball.colorCode }}></div>
      <div className="ball-color">{ball.name}</div>
    </div>
  );
}
export default Ball;
