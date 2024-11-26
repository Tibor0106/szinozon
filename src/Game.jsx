import { useContext, useEffect } from "react";
import { GameContext } from "./Providers/GameProvider";
import Ball from "./Components/Ball";
import { ModalContext } from "./Providers/ModalProvider";
import Cookies from "js-cookie";
function Game() {
  const { Colors, Ready, GameData, dataChanged, selected, felfed } =
    useContext(GameContext);
  const handleSelectColor = (color) => {
    console.log(color);
    selected(color);
  };
  const state = {
    0: "dot",
    1: "white",
    2: "black",
  };
  const {CreateModal, CloseModal, Modal} = useContext(ModalContext);

  const Rules = () => {

    const Accept = () => {
      Cookies.set("rules_readed", true);
      CloseModal();
    }
    return (
      <h1>szabalyzat</h1>

    )
  }

  useEffect(() => {
    var rulesReaded = Cookies.get("rules_readed");
    if(rulesReaded == null) CreateModal("Szabályzat", Rules, true)
   
  }, [])
  return (
    <>
      <div className="d-none">{dataChanged} </div>
      <div className="container">
        <div className="row game">
          <div className="col-sm-3 mx-auto">
            <div>Színözön</div>
            {/*  <button onClick={Ready}>Kezdődhet a játék</button>
            <button onClick={Ready}>Rendben</button>*/}

            <div>
              <div className="row mt-2">
                {felfed.map(i => (
                  <div className="col-1 ms-4 mini"><Ball ball={i}/></div>
                ))}
              </div>
            </div>
            <div className="row mt-4 g-0">
              <div className="col-10 mx-auto">
                {GameData == null
                  ? null
                  : GameData.trys.map((i) => (
                      <div className="row mb-2">
                        <div className="col-1 mini">
                          {i.colors[0] == undefined ? null : (
                            <Ball ball={i.colors[0]} b />
                          )}
                        </div>
                        <div className="col-1 mini">
                          {i.colors[1] == undefined ? null : (
                            <Ball ball={i.colors[1]} b />
                          )}
                        </div>
                        <div className="col-1 mini">
                          {i.colors[2] == undefined ? null : (
                            <Ball ball={i.colors[2]} b />
                          )}
                        </div>
                        <div className="col-1 mini">
                          {i.colors[3] == undefined ? null : (
                            <Ball ball={i.colors[3]} b />
                          )}
                        </div>
                        <div className="col-3">
                          <div className="row">
                            <div className="col-1 mini-1">
                              <div
                                className={`mini-ball ${
                                  i.results[0] == undefined
                                    ? ""
                                    : state[i.results[0]]
                                }`}></div>
                            </div>
                            <div className="col-1 mini-1">
                              <div
                                className={`mini-ball ${
                                  i.results[1] == undefined
                                    ? ""
                                    : state[i.results[1]]
                                }`}></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-1 mini-1">
                              <div
                                className={`mini-ball ${
                                  i.results[2] == undefined
                                    ? ""
                                    : state[i.results[2]]
                                }`}></div>
                            </div>
                            <div className="col-1 mini-1">
                              <div
                                className={`mini-ball ${
                                  i.results[3] == undefined
                                    ? ""
                                    : state[i.results[3]]
                                }`}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
              <div className="col-1">
                {Colors.map((i) => (
                  <div className="mini mt-1">
                    <Ball ball={i} onClick={() => handleSelectColor(i)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal/>
    </>
  );
}
export default Game;
