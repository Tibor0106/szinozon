function Ball({ ball }) {
  return (
    <>
      <div className="ball" style={{ backgroundColor: ball.colorCode }}></div>
      <div className="ball-color">{ball.name}</div>
    </>
  );
}
export default Ball;
