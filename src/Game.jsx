import { useContext } from "react";
import { GameContext } from "./Providers/GameProvider";
import Ball from "./Components/Ball";
function Game() {
  const { Colors, Ready } = useContext(GameContext);
  return (
    <>
      <div className="container">
        <div className="row game">
          <div className="col-sm-3 mx-auto">
            <div>Színözön</div>
            <button onClick={Ready}>Ready</button>
            <div>
              <div className="row mt-2">
                <div className="col-1 ms-4 mini"></div>
                <div className="col-1 ms-4 mini"></div>
                <div className="col-1 ms-4 mini"></div>
                <div className="col-1 ms-4 mini"></div>
              </div>
            </div>
            <div className="row mt-4 g-0">
              <div className="col-10 mx-auto">
                {Array(11)
                  .fill(0)
                  .map((i) => (
                    <div className="row mb-2">
                      <div className="col-1 mini"></div>
                      <div className="col-1 mini"></div>
                      <div className="col-1 mini"></div>
                      <div className="col-1 mini"></div>
                      <div className="col-3">
                        <div className="row">
                          <div className="col-1 mini-1">0</div>
                          <div className="col-1 mini-1">0</div>
                        </div>
                        <div className="row">
                          <div className="col-1 mini-1">0</div>
                          <div className="col-1 mini-1">0</div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col-1">
                {Colors.map((i) => (
                  <div className="mini mt-1">
                    <Ball ball={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Game;
