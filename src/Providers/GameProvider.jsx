import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const Colors = [
    {
      name: "Piros",
      colorCode: "#ff1c1c",
    },
    {
      name: "Fehér",
      colorCode: "#ffff",
    },
    {
      name: "Kék",
      colorCode: "#001be8",
    },
    {
      name: "Rózsaszín",
      colorCode: "#e80070",
    },
    {
      name: "Narancssárga",
      colorCode: "#ff9d00",
    },
    {
      name: "Lila",
      colorCode: "#8f00e8",
    },
    {
      name: "Citromsárga",
      colorCode: "#e0e800",
    },
    {
      name: "Zöld",
      colorCode: "#0b9c03",
    },
  ];
  const getRandomColors = () => {
    var colors = [];
    var random = Math.floor(Math.random() * Colors.length);
    while (colors.length != 4) {
      if (!colors.includes(Colors[random])) {
        colors.push(Colors[random]);
        continue;
      }
      random = Math.floor(Math.random() * Colors.length);
    }
    return colors;
  };
  function generateRandomKey(length = 10) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      key += characters[randomIndex];
    }
    return key;
  }
  const [felfed, setFelfed] = useState(Array(4).fill(0));
  const defaultGameData = {
    selectedColors: getRandomColors(),
    maxTry: 11,
    currentStep: 0,
    gameEnd: false,
    gameEndMessage: "",
    trys: Array(11)
      .fill(null)
      .map(() => ({ colors: [], results: [] })),
    selectColor(color) {
      if (
        this.trys[this.currentStep].colors
          .map((i) => i.name)
          .includes(color.name)
      )
        return alert("Ezt a szín már felhasználtad!");

      this.trys[this.currentStep].colors.push(color);
      if (this.trys[this.currentStep].colors.length == 4) {
        if (this.maxTry - 1 == this.currentStep) {
          this.gameEnd = true;
          this.gameEndMessage = "Vesztes!";
          return;
        }
        var res = this.evalCurrent(this.trys[this.currentStep].colors);
        var win = true;
        res.forEach((i) => {
          if (i * 1 != 2) win = false;
        });
        if (win) {
          this.gameEnd = true;
          this.gameEndMessage = "Gratulálok, nyertél!";
          return;
        }
        this.trys[this.currentStep].results = res;

        this.currentStep++;
      }
    },
    evalCurrent(current) {
      // 0, 1, 2, 0 = nincs, 1 = van, de nem jó helyen, 2: jó helyen van
      var result = [];
      var stage_names = current.map((i) => i.name);
      var selected_names = this.selectedColors.map((i) => i.name);
      for (let i = 0; i < 4; i++) {
        if (current[i].name == this.selectedColors[i].name) {
          result[i] = 2;
          continue;
        }
        if (selected_names.includes(stage_names[i])) {
          result[i] = 1;
        } else {
          result[i] = 0;
        }
      }

      return result;
    },
  };
  const [GameData, setGameData] = useState(defaultGameData);
  const [dataChanged, setDataChanged] = useState();

  const Ready = () => {
    console.log(GameData);
  };
  const selected = (color) => {
    try {
      GameData.selectColor(color);
      setDataChanged(generateRandomKey());
    } catch (Err) {
      console.log(Err);
    }
  };
  useEffect(() => {
    if (GameData.gameEnd) {
      alert(GameData.gameEndMessage);
    }
  }, [dataChanged]);
  return (
    <GameContext.Provider
      value={{ Colors, Ready, GameData, dataChanged, selected, felfed }}>
      {children}
    </GameContext.Provider>
  );
};
