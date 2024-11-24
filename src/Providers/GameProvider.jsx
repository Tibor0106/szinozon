import { useContext, useState } from "react";
import { createContext } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [random, setRandom] = useState(null);
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

  const Ready = () => {
    setRandom(getRandomColors());
  };
  return (
    <GameContext.Provider value={{ Colors, random, Ready }}>
      {children}
    </GameContext.Provider>
  );
};
