/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

import "zep-script";
import { StartGame } from "./src/start-game";
import { MAPS } from "./src/salles/MAPS";
import { handleDarknessOnStart } from "./handleDarknessOnStart";

// let zepLogo = ScriptApp.loadSpritesheet("assets/img/zep_logo.png");
// let screamer = ScriptApp.loadSpritesheet("assets/img/screamer.png");


ScriptApp.onJoinPlayer.Add(function (player) {
  // ScriptApp.sayToAll(`onJoinPlayer`);
  if (ScriptMap.name === MAPS.SALLE1) {
    ScriptApp.showCenterLabel(`Bienvenue ${player.name} Pour ta quête d'Halloween 💀💀💀`);
  } else {
    ScriptApp.showCenterLabel(`Tu es dans la salle ${ScriptMap.name}`);
  }
  // handleDarknessOnStart();
});

ScriptApp.onStart.Add(function () {
  // ScriptApp.sayToAll(`onStart`);
  // ScriptMap.putObject(0, 0, zepLogo, { overlap: true });
  StartGame();
});

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});

