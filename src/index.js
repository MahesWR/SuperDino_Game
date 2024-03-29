import { AUTO, Scale, Game } from "phaser";
import StartGameScene from "./scenes/MainMenu";
import Level1 from "./scenes/Level1";
import WinScene1 from "./scenes/Win1";
import Level2 from "./scenes/Level2";
import WinScene2 from "./scenes/Win2";
import Level3 from "./scenes/Level3";
import WinScene3 from "./scenes/Win3";
import GameOver from "./scenes/GameOver";

const config = {
  type: AUTO,

  parent: "game",
  backgroundColor: "#33A5E7",
  scale: {
    width: 1920,
    height: 1080,
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
      debug: false,
    },
  },
  scene: [
    StartGameScene,
    Level1,
    WinScene1,
    Level2,
    WinScene2,
    Level3,
    WinScene3,
    GameOver,
  ],
};

/* eslint-disable-next-line */
export default new Game(config);
