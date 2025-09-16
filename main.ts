/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

import "zep-script";
import { StartGame } from "./src/start-game";

let zepLogo = ScriptApp.loadSpritesheet("zep_logo.png");

// Charge une image pour le screamer (mets ton fichier screamer.png)
let screamer = ScriptApp.loadSpritesheet("screamer.png");

ScriptApp.onJoinPlayer.Add(function (player) {
  ScriptApp.showCenterLabel(`Bienvenue ${player.name} Hello World `);
});

ScriptApp.onStart.Add(function () {
  ScriptMap.putObject(0, 0, zepLogo, { overlap: true });
  StartGame();
});

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});

ScriptApp.onJoinPlayer.Add(function (player) {
   // Affiche un message
  ScriptApp.showCenterLabel(`Bienvenue ${player.name} Hello World `);
});

ScriptApp.onStart.Add(function () {
  ScriptMap.putObject(0, 0, zepLogo, { overlap: true });
});

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});

